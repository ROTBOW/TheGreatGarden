"use client"
import { useParams, redirect } from "next/navigation";
import { useState, useEffect } from 'react';
import Link from 'next/link';

import Rose from "@/components/rose/rose";
import getParterre from "@/firebase/parterres/getParterre";
import addFlower from "@/firebase/flowers/addFlower";


const NewFlower = () => {
    const params = useParams();
    const [pName, setPName] = useState(params.pId);
    const [color, setColor] = useState('#fa05f2');
    const [note, setNote] = useState('');

    useEffect(() => {
        getParterre(params.pId)
        .then(res => {
            setPName(res.name)
        })
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addFlower(
            {
                color,
                parterre_name: pName,
                parterre_id: params.pId,
                note
            },
            params.fId
        ).then(() => {
            window.location.replace(`/flower/${params.pId}/${params.fId}`)
        });
    }

    return (
        <div>
            <h2 className="md:text-4xl p-10 capitalize"><Link href='/'>The Great Garden</Link> -&gt; <Link href={`/parterre/${params.pId}`}>{pName}</Link> -&gt; <Link href='#'>Empty Plot</Link></h2>
            <div className="flex justify-around">
                <form className="flex flex-col w-1/2 h-full p-20" onSubmit={handleSubmit}>
                    <label className="mb-16">
                        <input className="mr-1" type='color' onChange={(e) => {setColor(e.target.value)}}/>
                        Flower Color
                    </label>

                    <label for="note">Note Attached To Flower</label>
                    <textarea className="mb-16 p-1 rounded bg-gray-400 text-black" name="note" id="note" onChange={(e) => {setNote(e.target.value)}}/>

                    <button className="p-1 rounded-xl bg-gray-400" type="submit">Plant Flower</button>
                </form>
                <Rose color={color}/>
            </div>
        </div>
    )
}

export default NewFlower;