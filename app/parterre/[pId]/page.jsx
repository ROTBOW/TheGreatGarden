'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from 'next/link';

import getParterre from "@/firebase/parterres/getParterre";
import getAllParterresFlowers from "@/firebase/flowers/getAllParterreFlowers";
import Loading from "@/components/loading/loading";
import MiniFlower from "@/components/miniFlower/MiniFlower";

const Parterre = () => {
    const params = useParams();
    const [parterre, setParterre] = useState({name: '', color: ''});
    const [flowers, setFlowers] = useState({loaded: false});

    useEffect(() => {
        getParterre(params.pId)
        .then(res => {
            setParterre(res);
        })
        .then(() => {
            getAllParterresFlowers(params.pId)
            .then(res => {
                setFlowers(res);
            })
        })
    }, [])

    const create_grid = () => {
        let grid = [];
        for (let i = 0; i < 10; i++ ) {
            for (let j = 0; j < 10; j++ ) {
                let id = `${params.pId}F${i}${j}`
                if (flowers[id]) {
                    grid.push(
                        <div className="flex justify-center items-center border rounded-xl m-1 bg-gray-800" id={id} key={id}>
                            <Link href={`/flower/${params.pId}/${id}`} className="aspect-square rounded-xl w-full h-full text-center pt-4">
                                <MiniFlower color={flowers[id].color} hasNote={flowers[id].note.length > 0}/>
                            </Link>
                        </div>
                    )
                } else {
                    grid.push(
                        <div className="flex justify-center items-center border rounded-xl m-1 bg-gray-800" id={id} key={id}>
                            <Link href={`/flower/${params.pId}/${id}/new`} className="aspect-square w-full h-full rounded-xl text-yellow-800">
                                <div className="h-full flex justify-center align-middle items-center">
                                    ___
                                </div>
                            </Link>
                        </div>
                    )
                }
            }
        };
        return grid;
    }

    if (flowers.loaded !== undefined) {
        return <Loading/>
    }

    return (
        <div className="w-full h-12">
            <h2 className="text-4xl p-10 capitalize"><Link href='/'>The Great Garden</Link> -&gt; <Link href='#'>{parterre.name}</Link></h2>
            <div className="flex justify-center">
                <div className={`grid grid-cols-10 w-3/5 h-auto aspect-square rounded-xl`} style={{backgroundColor: parterre.color}}>
                    {create_grid()}
                </div>
            </div>

        </div>
    )
}

export default Parterre;