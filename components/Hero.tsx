import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import {BackgroundCircle} from './BackgroundCircle';


interface Props {
     pageInfo: PageInfo;
}

export const Hero = ({pageInfo}: Props) => {
     const [text, count] = useTypewriter({
          words: [
               `Hi, My name is ${pageInfo?.name}`,
               "I am a Web Developer",
               "And I Love Writing Codes"
          ],
          loop: true,
          delaySpeed: 2000,
     });
     return (
          <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
               <BackgroundCircle />
               <img 
                    src={urlFor(pageInfo?.heroImage).url()}
                    className='relative rounded-full h-32 w-32 mx-auto object-cover' />
               <div className='z-20'>
                   <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo.role}</h2>
                   <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                   </h1>

                   <div>
                    <Link href="#about">
                         <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                         <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                         <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                         <button className='heroButton'>Projects</button>
                    </Link>
                   </div>
               </div>
          </div>
     )
}
