import style from './loading.module.css';
import {useEffect, useState} from 'react';
import Link from 'next/link';


const Loading = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        let t = setTimeout(() => {
            setShow(true)
        }, 10000);

        return () => {clearTimeout(t)}
    }, [])

    return (
        <>
        <div className="flex flex-col items-center pt-20 leading-tight">
            <div className={`${style.layer} text-5xl text-red-500`} style={{animationDelay: '1.5s', padding: '0'}}>❀</div>
            <div className={`${style.layer} text-green-500`} style={{animationDelay: '1s', padding: '0'}}>🙕|⠀⠀</div>
            <div className={`${style.layer} text-green-500`} style={{animationDelay: '0.5s'}}>⠀|🙓</div>
            <div className={`${style.layer} text-yellow-800`} style={{padding: '0'}}>▃▃▃▃</div>
        </div>
        <div className='flex flex-col items-center transition-opacity duration-700 opacity-0' style={{opacity: (show) ? '1' : '0'}}>
            <p>Nothing seems to be happening...</p>
            <p>You can try refreshing the page or return <Link href="/" className='p-0 underline'>Home</Link></p>
        </div>
        </>
    )
}


export default Loading;