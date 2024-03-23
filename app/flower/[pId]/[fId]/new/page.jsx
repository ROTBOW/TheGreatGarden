"use client"
import { useParams } from "next/navigation";
import { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import style from './newFlower.module.scss';
import Link from 'next/link';

import getParterre from "@/firebase/parterres/getParterre";
import addFlower from "@/firebase/flowers/addFlower";
import FlowerPicker from "@/components/flowerPicker/flowerPicker";


const NewFlower = () => {
    const params = useParams();
    const [pName, setPName] = useState(params.pId);
    const [flowerType, setFlowerType] = useState('rose');
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
            <h2 className="p-10 capitalize md:text-4xl text-3xl"><Link href='/'>The Great Garden</Link> -&gt; <Link href={`/parterre/${params.pId}`}>{pName}</Link> -&gt; <Link href='#'>Empty Plot</Link></h2>
            <div className="flex flex-col md:flex-row justify-around w-full">
                <form className="flex flex-col md:w-1/2 w-full h-full md:p-20 pb-5 px-2" onSubmit={handleSubmit}>
                    <div className="flex justify-center w-full pb-10">
                        <HexColorPicker color={color} onChange={setColor} />
                    </div>

                    <label for="note">Note Attached To Flower</label>
                    <textarea className="p-1 mt-1 mb-6 text-black bg-gray-400 rounded" name="note" id="note" onChange={(e) => {setNote(e.target.value.trim())}}/>

                    <label for="planter-input">Planter (you)</label>
                    <input className={`${style.planter} bg-gray-400 rounded mb-16 mt-1 w-2/5 text-black pl-2`} type='text' id="planter-input" placeholder="optional" onChange={(e) => {setPlanter(e.target.value.trim())}}/>

                    <button className="p-1 bg-gray-400 rounded-xl" type="submit">Plant Flower</button>
                </form>
                <FlowerPicker flower={flowerType} color={color}/>
            </div>
        </div>
    )
}

export default NewFlower;