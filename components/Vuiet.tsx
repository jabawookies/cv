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
                className='w-28 h-28 object-cover rounded-full xl:w-[200px] xl:h[200px] object-center'
                src="https://cdn-az.allevents.in/events4/banners/e5beda50bf766c19611366eff5be6062d67206bae3c93c61c73f4680cffae633-rimg-w1200-h675-dce8d4bf-gmir?v=1721532000" alt=""
            />
<div className='px-0 md:px-10 '>
    <h4 className='text-4xl font-light'>
        Graphic designer & Marketing
    </h4>
    <p className='font-bold text-2xl mt-1'>
        Vuiet Festival
    </p>
    <div className='flex space-x-2 my-2'>
        <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s" alt="" />
        <img className='h-10 w-10 rounded-full object-cover' src="https://www.creativetools.se/image/cache/catalog/product/adobe/photoshop-cc/Adobe-Photoshop-2020-Logos-1280x720.jpg" alt="" />
        <img className='h-10 w-10 rounded-full object-cover' src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/41/51/39/4151392f-64cc-d784-d90b-9af42bd68b18/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220-0.png/1200x600wa.png" alt="" />
        <img className='h-10 w-10 rounded-full object-cover' src="https://tbig.co.za/wp-content/uploads/2023/03/openAI-chat-gpt-1.jpg" alt="" />
    
    </div>
    <p className='uppercase py-5 text-gray-300'> Aug 2023 - Aug 2024</p>

    <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>Designed various festival elements such as social media posts, wristbands, stickers, and overall branding.
        </li>
        <li>Worked closely with the festival organizers to ensure consistent branding across all materials.
        </li>
        <li>Developed and adapted a dynamic marketing plan to fit the organizers' evolving needs.
        </li>
        <li>Managed and created content for social media, including posts and descriptions, during and after the festival.
        </li>
    </ul>
</div>
        </article>
    )
}

export default experienceCard