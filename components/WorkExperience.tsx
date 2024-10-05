import React from 'react';
import { motion } from 'framer-motion';
import Vuiet from './Vuiet';
import Goit from './goit';

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='scroll-smooth min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row px-5 md:px-10 justify-center mx-auto items-center'
    >
      {/* Title with responsive positioning */}
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Experience
      </h3>

      {/* Container with added margin-top to avoid overlap */}
      <div className='scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab8a] w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-28 md:mt-40'>
        {/* Experience Cards */}
        <Vuiet />
        <Goit />
      </div>
    </motion.div>
  );
}
