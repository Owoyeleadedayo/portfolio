import React, { ReactElement } from 'react';
import { motion } from "framer-motion";
import { urlFor } from '../sanity';
import { Project } from '../typings';

interface Props {
     projects : Project[];
}

function Projects({projects}: Props): ReactElement {
     return (
          <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1.5 }}
               className='h-[900px] relative flex overflow-hidden flex-col md:flex-col max-w-full justify-evenly mx-auto items-center z-0 text-center xl:space-y-0 xl:px-5'>
               <h3 className=' uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Projects
               </h3>

               <div className='relative w-full flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                    {projects?.map((project, i) => (
                         <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' key={i}>
                              <motion.img 
                                   initial={{
                                        y: -300,
                                        opacity: 0,
                                   }}
                                   transition={{ duration: 1.2 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   src={urlFor(project?.image).url()} alt="" />

                              <div className='space-y-3 px-0 md:px-5 max-w-6xl'>
                                   <h4 className='text-4xl font-semibold'>
                                        <span>
                                              Case Study {i + 1} of {projects.length}: 
                                        </span>{" "}
                                        {project?.title}
                                   </h4>

                                   <p className='text-lg text-center md:text-left'>
                                        {project.summary}
                                   </p>
                              </div>
                         </div>
                    ))}
               </div>

               <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
          </motion.div>
     )
}

export default Projects
