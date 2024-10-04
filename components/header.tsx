import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { animate, motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

export default function header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -300,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2,
                }}
                className='flex flex-row items-center'>
                {/*Social Icons */}
                <SocialIcon
                    url="https://www.linkedin.com/in/petre-sergiu-adrian/"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon url="https://www.facebook.com/petre.sergiu.334/"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon url="https://www.instagram.com/sonee.inspace/"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>


          

                <motion.div
                onClick={() => (window.location.href = "#Contact")}
                    initial={{
                        x: 300,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className=' flex flex-row items-center text-gray-300'>
                    <SocialIcon className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                        Get in touch
                    </p>
                </motion.div>
           
        </header>
    )
}