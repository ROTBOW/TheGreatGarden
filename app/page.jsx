"use client"
import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import getAllParterres from '@/firebase/parterres/getAllParterres';
import Loading from '@/components/loading/loading';

const Home = () => {
  const [parterres, setParterres] = useState({});

  useEffect(() => {
    getAllParterres()
    .then(res => {
      setParterres(res);
    })
  }, [])


  if (Object.keys(parterres).length === 1) {
    return <Loading/>
  }

  const buildGrid = () => {
    let p = [];

    for (let i = 1; i < 10; i++) {
      p.push(
        <div className='flex items-center justify-center border capitalize'>
          <Link href={`/parterre/P${i}`}>{parterres[`P${i}`]?.name}</Link>
        </div>
      )
    }

    return p
  }

  return (
    <div>
      <h2 className="md:text-4xl p-10"><Link href="#">The Great Garden</Link></h2>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-3 w-2/5 aspect-square border">
            {
              buildGrid()
            }
        </div>
      </div>

    </div>
  )
}

export default Home;
