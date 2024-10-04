import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function about({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='scroll-smooth flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                    initial={{ opacity: 0, x: -200, }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    
                    src="https://i.postimg.cc/cCsP0sZL/DSCF7242-Enhanced-NR.jpg"  alt="de ce nu se vede"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
                />

            <div className=' space-y-10 px-0 md:px-10'>
               
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#f7ab8a]'>little</span> background
                </h4>
                <p className='text-sm justify-end'>
                    I am a motivated and adaptable UX/UI and graphic designer with a strong passion for creativity and innovation. With over 1 year of experience in managing public image, event planning, and marketing campaigns, I’ve developed a unique skill set in organizing and promoting electronic music events, collaborating closely with artists, and handling logistics.

                    My hands-on experience spans from creating marketing strategies and graphic designs for festivals and websites to managing social media campaigns, ensuring that the image and message of each event resonates with its audience. I'm proficient in design tools like Figma, Photoshop, and Canva, and have a keen eye for creating visually appealing and engaging content.

                    In addition to my creative background, I have experience in diverse fields such as logistics, e-commerce, and hospitality, which have helped me become a versatile and quick learner, always ready to take on new challenges.
                </p>
            </div>

        </motion.div>
    )
}