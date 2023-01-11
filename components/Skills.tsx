import React, { ReactElement } from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillType } from '../typings';


interface Props {
     skills : SkillType[]
}

function Skills({skills}: Props): ReactElement {
     return (
          <div className='flex relative flex-col text-center md:text-left  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
               <h3 className=' p-5 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Skills
               </h3>

               <h3 className='uppercase tracking-[3px] text-gray-500 text-2sm pb-12 '>Hover over a skill for currency proficiency</h3>

               <div className='grid grid-cols-4 gap-5' >
                    {skills.map((skill) => (
                         <Skill key={skill._id} skill={skill}/>
                    ))}
               </div>
          </div>
     )
}

export default Skills;
