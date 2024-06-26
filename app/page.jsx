"use client"
import Link from 'next/link';

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


  if (Object.keys(parterres).length === 0) {
    return <Loading/>
  }

  const buildGrid = () => {
    let p = [];

    for (let i = 1; i < 10; i++) {
      p.push(
        <div className="border capitalize" key={`P${i}`}>
          <Link className='flex justify-center items-center h-full w-full text-center'  href={`/parterre/P${i}`}>{parterres[`P${i}`]?.name}</Link>
        </div>
      )
    }

    return p
  }

  return (
    <div>
      <h2 className="md:text-4xl text-2xl p-10"><Link href="#">The Great Garden</Link></h2>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-3 md:w-2/5 w-4/5 aspect-square border rounded">
            {
              buildGrid()
            }
        </div>
      </div>

    </div>
  )
}

export default Home;
