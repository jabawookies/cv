import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: ["Hi, My name is Sergiu", "<I am a creative person/>", "I love to design."],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='relative min-h-screen flex flex-col  items-center pb-20 justify-center text-center'>
            {/* Background Circles */}
            <BackgroundCircles />  {/* Ensure BackgroundCircles stay behind other elements */}
            
            {/* Hero Image */}
            <img
                className='relative z-10 rounded-full h-32 w-32 mx-auto object-cover'
                src="https://i.postimg.cc/RCK7KjfX/316147142-682859616779411-2810922803689853242-n.jpg"
                alt="Profile"
            />
            
            {/* Hero Text */}
            <div className='relative z-10'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>
                    UX/UI Designer
                </h2>

                <h1 className='text-3xl lg:text-6xl sm:text-2xl font-semibold px-10'>
                    <span className='nr-3'>{text}</span>
                    <Cursor cursorColor='#ff7ab7' />
                </h1>

                {/* Buttons */}
                <div className='pt-5 relative z-10'>
                    <Link href="#About">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#Experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#Skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#Projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
