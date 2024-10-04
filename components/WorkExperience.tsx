import React from 'react'
import { motion } from "framer-motion";
import Vuiet from './Vuiet';
import Goit from './goit';

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='scroll-smooth min-h-screen flex relative overflow-hidden flex-col text-lft md:flex-row px-10
    justify-items-center mx-auto items-center'>
        <div className='relative top-400'>
        <h3 className=' top-100 uppercase  tracking-[20px] text-gray-500 text-2xl'>
            Experience 

        </h3>
          </div>

        <div className='scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab8aa] w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            {/*Experience Card*/}
            <Vuiet />
           <Goit />

        </div>
    </motion.div>
  )
}