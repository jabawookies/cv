import React from 'react'
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
}

export default function skill({ directionLeft }: Props) {
  return (

    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj"
        className='rounded-full border border-gray-500 w-24 h-24 md:w-28 md:h-28 xl:w-28
       xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <motion.div
       initial={{
        x:directionLeft ? -200 : 200,
      }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0 }}
      className='absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-28 xl:h-28
       rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>
          40%
        </p>
      </div>
    </motion.div>
    </div >
  )
}