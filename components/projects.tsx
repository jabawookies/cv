import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1]; // Example projects array
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='scroll-smooth min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row px-5 md:px-10 justify-center mx-auto items-center'
        >
            {/* H1 "Projects" Positioned at the Top */}
            <h3 className='absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl w-full text-center'>
                Projects
            </h3>

            <div className='scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab8a] relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, index) => (
                    <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-20 h-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://i.postimg.cc/qRtwcMnz/mediamodifier-image-1.png"
                            alt="Project Image"
                            className='object-cover w-[90%] md:w-[500px] h-auto'
                        />
                        <div className='space-y-5 px-5 md:px-10 max-w-6xl text-center md:text-left'>
                            <h4 className='text-2xl md:text-4xl font-semibold'>
                                <span className='underline decoration-[#f7ab8a]'>Case Study {index + 1} of 2:</span> Animalescu UX/UI
                            </h4>
                            <p className='text-sm md:text-lg'>
                                Made both the UX research and UI design of the Animalescu online pet shop platform.
                                <a href='https://www.figma.com/proto/p4FXkI0BxZD7mwOXDEc1zT/behance?page-id=0%3A1&node-id=14-7850&node-type=frame'
                                    className='text-bold underline decoration-[#f7ab8a]'>
                                    Click here to view project
                                </a>
                            </p>
                        </div>
                    </div>
                ))}

                {/* Second Project */}
                {projects.map((project, index) => (
                    <div key={index} className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-20 h-screen w-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://i.postimg.cc/05Lsgzy2/mediamodifier-image-1.png"
                            alt="Project Image"
                            className='object-cover w-[90%] md:w-[500px] h-auto'
                        />
                        <div className='space-y-5 px-5 md:px-10 max-w-6xl text-center md:text-left'>
                            <h4 className='text-2xl md:text-4xl font-semibold'>
                                <span className='underline decoration-[#f7ab8a]'>Case Study {index + 2} of 2:</span> Redesign for Brutaria Frontera
                            </h4>
                            <p className='text-sm md:text-lg'>
                                Made both the UX research and UI redesign of the Brutaria Frontera website.
                                <a href='https://www.figma.com/proto/S9IoGDlIxh9wsRNdaD5Pqm/persoana.inspirata%2Fwireframefrontera?page-id=0%3A1&node-id=104-6'
                                    className='text-bold underline decoration-[#f7ab8a]'>
                                    Click here to view project
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab8a]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    );
}
