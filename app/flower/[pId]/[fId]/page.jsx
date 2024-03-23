"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Link from 'next/link';

import getFlower from '@firebase/flowers/getFlower';
import Loading from "@/components/loading/loading";
import FlowerPicker from "@/components/flowerPicker/flowerPicker";

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
                    flowerType: res?.flowerType, // this is new value so older flowers won't have it, there is a catch and default for undefined
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
            <h2 className="p-10 capitalize md:text-4xl"><Link href='/'>The Great Garden</Link> -&gt; <Link href={`/parterre/${params.pId}`}>{flower.pName}</Link> -&gt; <Link href='#'>{flower_id_to_title(params.fId)}</Link></h2>
            <p className="md:ml-12 ml-5 mb-5 md:text-lg max-w-xs">{params.fId} - Planted on {timestampToString(flower.planted_at)} {(flower.planter !== '') ? `by ${flower.planter}` : ''}</p>
            <div className="flex md:flex-row flex-col-reverse justify-center w-full">
                <div className="max-w-lg p-1 overflow-y-auto font-mono md:ml-28 mx-5 mb-5 md:mt-28 max-h-96" style={{minWidth: '60px'}}>
                    {flower.note}<br/>
                    {
                        (flower.planter !== '') ? `- ${flower.planter}` : ''
                    }
                </div>
                <FlowerPicker flower={flower.flowerType} color={flower.color}/>
            </div>
            
        </div>
    )
}


export default Flower;