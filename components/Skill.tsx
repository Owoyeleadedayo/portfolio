import React from 'react';
import { motion } from "framer-motion";
import { Skill } from '../typings';
import { urlFor } from '../sanity';


type Props = {
     skill: Skill;
}

function Skill({skill}: Props) {
  return (
    <div className='group relative cursor-pointer flex'>
     <motion.img 
          src={urlFor(skill?.image).url()}
          className='rounded-full border border-gray-500 object-cover  w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
     />
     <div className='absolute opacity-0 w-24 h-24 xl:w-32 xl:h-32 rounded-full opacity-1  group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-28 md:h-28 z-0'>
          <div className=' border-red-500 h-full flex items-center justify-center' >
               <p className='text-3xl font-bold text-black opacity-100 '>{skill.progress}%</p>
          </div>
     </div>
    </div>
  )
}

export default Skill;