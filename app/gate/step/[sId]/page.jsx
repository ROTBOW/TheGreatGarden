'use client'

import {useEffect, useState} from 'react';

import Link from 'next/link';
import Loading from "@/components/loading/loading";
import stories from '@/data/gateSteps';
import { useParams } from "next/navigation";

const Step = () => {

    const params = useParams();
    const [story, setStory] = useState(null);

    useEffect(() => {
        let s = stories[params.sId];
        if (s) {
            setStory(s)
        } else {
            setStory(stories['0'])
        }
    }, [])

    if (!story) {
        return <Loading/>;
    }

    return (
        <div className='flex items-center flex-col'>
            <p className='pt-10 font-mono w-1/3 text-center'>
                {story}
            </p><br/>
            <Link href="/gate" className='text-xl animate-pulse'>Return</Link>
        </div>
    )
}

export default Step;