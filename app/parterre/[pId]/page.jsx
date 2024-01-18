'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from 'next/link';

import addFlower from "@firebase/flowers/addFlower";
import getDoument from "@firebase/getData";
import getParterre from "@/firebase/parterres/getParterre";
import getAllParterresFlowers from "@/firebase/flowers/getAllParterreFlowers";

const Parterre = () => {
    const params = useParams();
    const [pName, setPName] = useState('');
    const [flowers, setFlowers] = useState({});

    useEffect(() => {
        getParterre(params.pId)
        .then(res => {
            setPName(res.name)
        })
        getAllParterresFlowers(params.pId)
        .then(res => {
            setFlowers(res);
        })
    }, [])

    const create_grid = () => {
        let grid = [];
        for (let i = 0; i < 10; i++ ) {
            for (let j = 0; j < 10; j++ ) {
                let id = `${params.pId}F${i}${j}`
                if (flowers[id]) {
                    grid.push(
                        <div className="flex justify-center items-center border rounded-xl m-1 text-4xl" id={id}>
                            <Link href={`/flower/${params.pId}/${id}`} className="aspect-square" style={{color: flowers[id].color}}>❀</Link>
                        </div>
                    )
                } else {
                    grid.push(
                        <div className="flex justify-center items-center p-2 border rounded-xl m-1" id={id}>
                            <Link href={`/flower/${params.pId}/${id}/new`} className="aspect-square">__</Link>
                        </div>
                    )
                }
            }
        };
        return grid;
    }

    return (
        <div className="w-full h-12">
            <h2 className="text-4xl p-10 capitalize"><Link href='/'>The Great Garden</Link> -&gt; <Link href='#'>{pName}</Link></h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-10 bg-gray-800 w-3/5 aspect-square rounded-xl">
                    {create_grid()}
                </div>
            </div>

        </div>
    )
}

export default Parterre;