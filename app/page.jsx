import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h2 className="md:text-4xl p-10"><Link href="#">The Great Garden</Link></h2>
      This is the home page, it will show all the parterres<br/>
      <Link href="/parterre/P1" className='capitalize'>Stone's Heel</Link>
    </div>
  )
}

export default Home;
