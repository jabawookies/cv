import React from 'react'
import { motion } from "framer-motion";
import Skill from './skill';
import Skill1 from './romana';
import Romana from './romana';
import Engleza from './engleza';
import Franceza from './franceza';
import Figma from './figma';
import Photoshop from './photoshop';
import Illustrator from './illustrator';
import Excel from './excel';
import Powerpoint from './powerpoint';
import Word from './word';
import Css from './visualstudio';
import Hastml from './hastml';
import Chatgpt from './chatgpt';

type Props = {}

function skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flew-row
    max-w-[2000xpx] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

<h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

<div className='grid grid-cols-3 gap-9'>
<Romana />
<Engleza /><Franceza /><Figma /><Photoshop /><Illustrator /><Excel /><Word /><Powerpoint /><Hastml /><Css /><Chatgpt />
</div>

    </motion.div>
  )
}

export default skills