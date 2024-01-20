"use client"
import { useParams } from "next/navigation";
import { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import style from './newFlower.module.scss';
import Link from 'next/link';

import Rose from "@/components/rose/rose";
import getParterre from "@/firebase/parterres/getParterre";
import addFlower from "@/firebase/flowers/addFlower";


const NewFlower = () => {
    const params = useParams();
    const [pName, setPName] = useState(params.pId);
    const [color, setColor] = useState('#FFFFF');
    const [note, setNote] = useState('');
    const [planter, setPlanter] = useState('');

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
                note, 
                planter
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
                    <div className="flex pb-10 w-full justify-center">
                        <HexColorPicker color={color} onChange={setColor} />
                    </div>

                    <label for="note">Note Attached To Flower</label>
                    <textarea className="mb-6 mt-1 p-1 rounded bg-gray-400 text-black" name="note" id="note" onChange={(e) => {setNote(e.target.value.trim())}}/>

                    <label for="planter-input">Planter (you)</label>
                    <input className={`${style.planter} bg-gray-400 rounded mb-16 mt-1 w-2/5 text-black pl-2`} type='text' id="planter-input" placeholder="optional" onChange={(e) => {setPlanter(e.target.value.trim())}}/>

                    <button className="p-1 rounded-xl bg-gray-400" type="submit">Plant Flower</button>
                </form>
                <Rose color={color}/>
            </div>
        </div>
    )
}

export default NewFlower;