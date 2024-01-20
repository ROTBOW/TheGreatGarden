"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Link from 'next/link';

import getFlower from '@firebase/flowers/getFlower';
import Rose from "@/components/rose/rose";
import Loading from "@/components/loading/loading";

const flower_id_to_title = (fId) => {
    return 'Flower ' + fId.split('F')[1];
}

const timestampToString = (ts) => {
    if (ts) {
        let date = new Date(ts.seconds*1000)
        return date.toDateString();
    }
    return 'Hopes'
}

const Flower = () => {
    const params = useParams();
    const [flower, setFlower] = useState({
        pName: params.pId,
        color: '#005CFF',
        planted_at: {seconds: 0},
        note: '',
        planter: ''
    });

    useEffect(() => {
        getFlower(params.fId)
        .then(res => {
            if (res) {
                setFlower({
                    pName: res.parterre_name,
                    color: res.color,
                    planted_at: res.planted_at,
                    note: res.note,
                    planter: res.planter
                })
            }
        })
    }, [])

    if (flower.pName === params.pId) {
        return <Loading/>
    }
    return (
        <div>
            <h2 className="md:text-4xl p-10 capitalize"><Link href='/'>The Great Garden</Link> -&gt; <Link href={`/parterre/${params.pId}`}>{flower.pName}</Link> -&gt; <Link href='#'>{flower_id_to_title(params.fId)}</Link></h2>
            <p className="text-lg ml-12">{params.fId} - Planted on {timestampToString(flower.planted_at)} {(flower.planter !== '') ? `by ${flower.planter}` : ''}</p>
            <div className="flex w-full justify-center">
                <div className="ml-28 mt-28 font-mono max-h-96 max-w-lg overflow-y-auto p-1" style={{minWidth: '60px'}}>
                    {flower.note}<br/>
                    {
                        (flower.planter !== '') ? `- ${flower.planter}` : ''
                    }
                </div>
                <Rose color={flower.color}/>
            </div>
            
        </div>
    )
}


export default Flower;