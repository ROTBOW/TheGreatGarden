/**
 * this is the gate, a portal, and an small interactive story
 * progress will be stored in localstorage so folk can continue on their own
 */

import Link from 'next/link';

const Gate = () => {

    
    return (
        <div>
            <h2 className="md:text-4xl text-2xl md:p-10 pl-10 py-4"><Link href="#">The Great Garden</Link></h2>
            <div className="flex items-center flex-col">
                <div className='text-center font-mono'>
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
                <div className='flex justify-around w-1/4 pt-3'>
                    <button>Enter</button>
                    <button>Leave</button>
                </div>
            </div>
        </div>
    )
};

export default Gate;