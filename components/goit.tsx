import React from 'react'
import { motion } from "framer-motion";


type Props = {}

function experienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 
        flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ opacity: 0, y: -100, }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='w-28 h-28 rounded-full object-cover xl:w-[200px] xl:h[200px] object-center'
                src="https://yt3.googleusercontent.com/ewla8TVnjq_aGUrGLnWvtuzeTT_weBDlfSok9VWLAw_C5rNmxtG4DnLKK4zL-MiUErWVMdr9eQ=s900-c-k-c0x00ffffff-no-rj" alt=""
            />
<div className='px-0 md:px-10 '>
    <h4 className='text-4xl font-light'>
        Student UX/UI Design
    </h4>
    <p className='font-bold text-2xl mt-1'>
        GoIT Academy
    </p>
    <div className='flex space-x-2 my-2'>
        <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s" alt="" />
        <img className='h-10 w-10 rounded-full object-cover' src="https://www.creativetools.se/image/cache/catalog/product/adobe/photoshop-cc/Adobe-Photoshop-2020-Logos-1280x720.jpg" alt="" />
        <img className='h-10 w-10 rounded-full object-cover' src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/41/51/39/4151392f-64cc-d784-d90b-9af42bd68b18/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220-0.png/1200x600wa.png" alt="" />
        
    </div>
    <p className='uppercase py-5 text-gray-300'> Sept 2023 - Sept 2024</p>

    <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>Primary web research,
prototyping and wireframing for both mobile and web,
visual hierarchy, typography, and color theory,
user personas, customer journey mapping,
atomic design systems and responsive design,
Figma and other industry-standard tools
        </li>
        <li>Soft Skills: Agile methodology, communication, and teamwork.
        </li>
      
    </ul>
</div>
        </article>
    )
}

export default experienceCard