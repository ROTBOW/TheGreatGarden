'use client'

import Link from 'next/link';
import stories from '@/data/gateSteps';
import { useRouter } from 'next/navigation';

/**
 * this is the gate, a portal, and an small interactive story
 */




const Gate = () => {
    const router = useRouter();


    const randomStep = () => {
         /**
         * The function `randomStep` generates a random index and navigates to a specific route using
         * `router.push`.
         */
        let idx = Math.floor(Math.random() * Object.keys(stories).length)

        router.push(`/gate/step/${idx}`)
    };
    
    return (
        <div>
            <div className="flex items-center flex-col pt-10">
                <div className='text-center font-mono md:w-1/2 w-2/3'>
                    You stand before the Gate, center of the Garden<br/>
                    It leads everywhere, and nowhere, <br/>
                    houses your deepest fears, cradles your faintest hopes. <br/>
                    You've always known it, like the door to your home, <br/>
                    It's always known you, like a mother with a child.
                </div><br/>
            
                {/* Gate art */}
                <div className="border flex flex-col justify-center w-fit h-auto rounded-xl p-2 mb-5">
                <pre>
                    <code className="font-mono text-xl">
{`===============
||           ||
||           ||
||     *     ||
||           ||
||           ||
||___________||`}</code>
                </pre>
            
                {/* spinners for portal effect */}
                <div className='absolute'>
                    <div className='font-mono relative animate-spin' style={{left: '3.8rem', bottom: '0.25rem'}}>&gt;&lt; &gt;&lt;</div>
                </div>
                <div className='absolute'>
                    <div className='font-mono relative animate-ping -rotate-90' style={{left: '3.1rem', bottom: '0.25rem'}}> &gt;&lt; &nbsp; &gt;&lt; </div>
                </div>
                <div className='absolute'>
                    <div className='font-mono relative animate-ping rotate-90' style={{left: '3.1rem', bottom: '0.25rem'}}> &gt;&lt; &nbsp; &gt;&lt; </div>
                </div>
            
            </div>
                <div>What do you do?</div>
                <div className='flex justify-around w-1/4 pt-3 animate-pulse'>
                    <button onClick={randomStep}>Enter</button>
                    <Link href="/">Leave</Link>
                </div>
            </div>
        </div>
    )
};

export default Gate;