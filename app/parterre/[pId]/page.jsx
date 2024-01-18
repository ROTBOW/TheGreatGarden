'use client'
import { useEffect } from "react";
import { useParams } from "next/navigation";

import addFlower from "@firebase/flowers/addFlower";
import getDoument from "@firebase/getData";

const Parterre = () => {
    const params = useParams();

    const handleClickAdd = () => {
        console.log('creating flower!');
        addFlower(
            {
                parterreId: 'parterres/P1',
                color: 'FF0000',
            },
            'F2'
        ).then(res => {
            console.log(res);
        })
    }

    const handleClickGet = () => {
        getDoument('flowers', 'F1')
        .then(res => {
            if (res.result) {
                console.log(res.result.data());
            } else {
                console.log(res);
            }
        })
    }

    return (
        <div className="w-full h-12">
            <h2 className="text-4xl p-20">Parterre {params.pId}</h2>
            <button className="m-10 p-1 rounded bg-gray-600 " onClick={handleClickAdd}>Create Flower</button>
            <button className="m-10 p-1 rounded bg-gray-600 " onClick={handleClickGet}>Get Flower</button>
            <div className="grid grid-cols-3 bg-red-600 border-green-500 border w-4/5">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

        </div>
    )
}

export default Parterre;