import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function projects({ }: Props) {
    const projects = [1]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className=' scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab8a] relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
snap-mandatory z-20'>

                {projects.map((Projects) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col
                    space-y-5 items-center justify-center p-0 md:p-44 h-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://i.postimg.cc/qRtwcMnz/mediamodifier-image-1.png" alt="" className='object-cover w-[500px]
      h-[888.19px] ' />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#f7ab8a]'>Case Study 1 of 2:</span>
                                {" "}Animalescu UX/UI</h4>

                            <p className='text-lg text-center md:text-left'> Made both the UX research and UI design of the Animalescu online pet shop platform.
                                <br></br><br></br>
                                UX Research: I conducted thorough competitive analysis of leading pet stores, identifying user pain points such as lack of personalization and complicated navigation. Using this data, I developed detailed user personas and customer journey maps to ensure the platform would meet the specific needs of different user groups. My research shaped features like personalized recommendations and recurring order systems.
                                <br></br><br></br>
                                UI Design: I created the platform's user interface using Figma, focusing on a clean, intuitive design. I crafted custom visuals in Photoshop and Illustrator, including logos and icons, to maintain brand consistency. The result was a streamlined, visually appealing platform that enhanced user experience and facilitated efficient, enjoyable shopping.
                                <a href='https://www.figma.com/proto/p4FXkI0BxZD7mwOXDEc1zT/behance?page-id=0%3A1&node-id=14-7850&node-type=frame&viewport=-1766%2C3861%2C0.17&t=5qHzJzgwMhRlnc9W-1&scaling=min-zoom&content-scaling=fixed'
className=' text-bold underline decoration-[#f7ab8a]'
>Click here to view project</a>
                                </p>
                        </div>

                    </div>



                )
                )},
                {/*projects*/}
                {projects.map((Projects) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col
                    space-y-5 items-center justify-center p-0 md:p-44 h-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://i.postimg.cc/05Lsgzy2/mediamodifier-image-1.png" alt="" className='object-cover w-[500px]
      h-[888.19px] ' />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#f7ab8a]'>Case Study 2 of 2:</span>
                                {" "}Redesign for Brutaria Frontera</h4>

                            <p className='text-lg text-center md:text-left'> Made both the UX research and UI redesign of the Brutaria Frontera website.
                                <br></br><br></br>
                                The UI kit elements, grid system, and typography were all tailored to reflect the bakery’s identity, with a focus on easy navigation and a warm, inviting color scheme that resonates with the bakery’s target audience. The final design optimized the desktop experience while ensuring a seamless, user-friendly interface.<br></br><br></br>

                                Creating user personas to understand customer needs. The personas helped identify key motivations, such as the desire for a simplified online ordering experience and easy access to the bakery’s product information. This research guided the design choices, particularly the focus on a clean interface and user flow, making it easier for customers to find and purchase products. 
<a href='https://www.figma.com/proto/S9IoGDlIxh9wsRNdaD5Pqm/persoana.inspirata%2Fwireframefrontera?page-id=0%3A1&node-id=104-6&node-type=frame&viewport=-693%2C426%2C0.09&t=Y7st9dC1gyl5FgzR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=104%3A6'
className=' text-bold underline decoration-[#f7ab8a]'
>Click here to view project</a>
                            </p>

                        </div>

                    </div>



                )
                )}

            </div>


            <div className='w-full absolute top-[30%] bg-[#f7ab8a]/10 left-0 h-[500px] -skew-y-12'></div>

        </motion.div>
    )
}