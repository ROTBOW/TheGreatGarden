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
    return 'Dreams'
}

const Flower = () => {
    const params = useParams();
    const [flower, setFlower] = useState({
        pName: params.pId,
        color: '#005CFF',
        planted_at: {seconds: 0}
    });

    useEffect(() => {
        getFlower(params.fId)
        .then(res => {
            if (res) {
                setFlower({
                    pName: res.parterre_name,
                    color: res.color,
                    planted_at: res.planted_at
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
            <p className="text-lg ml-12">{params.fId} - Planted on {timestampToString(flower.planted_at)}</p>
            <Rose color={flower.color}/>
        </div>
    )
}


export default Flower;