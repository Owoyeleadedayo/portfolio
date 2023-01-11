import React from 'react'
import { motion } from "framer-motion";
import { DiJavascript } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { Experience } from '../typings';
import { urlFor } from '../sanity';


type Props = {
     experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
     <motion.img
          initial={{
               y: -100,
               opacity: 0
          }} 
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
          src='/face.jpg'/>

          <div className='px-0 md:px-10'>
               <h4 className='text-4xl font-light'>Intern</h4>
               <p className='text-2xl font-bold'>Skyt Technologies</p>
               <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology, index) => (
                         <img className='w-10 h-10 rounded-full' src={urlFor(technology.image).url()}/>
                    ))}
               </div>
               <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
               </p>

               <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points.map((point, i) => (
                         <li>{point}</li>
                    ))}
               </ul>
          </div>
    </article>
  )
}

export default ExperienceCard