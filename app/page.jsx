"use client"

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Loading from '@/components/loading/loading';
import getAllParterres from '@/firebase/parterres/getAllParterres';

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
      <h2 className="md:text-4xl text-2xl md:p-10 pl-10 py-4"><Link href="#">The Great Garden</Link></h2>
      <h3 className="md:text-3xl text-2xl pb-4 pl-10"><Link href="gate">The Gate</Link></h3>
      
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
