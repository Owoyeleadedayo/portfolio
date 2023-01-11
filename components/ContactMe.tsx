import React, { ReactElement } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FiMapPin } from 'react-icons/fi';
import { useForm, SubmitHandler } from "react-hook-form";



type Inputs = {
     name: string,
     email: string,
     subject: string,
     message: string,
};


interface Props {}

function ContactMe({}: Props): ReactElement {
     const { register, handleSubmit} = useForm<Inputs>();
     const onSubmit: SubmitHandler<Inputs> = (formData) => {
          window.location.href = `mailto:owoyeleadedayo25@gmail?subject=${formData.subject}& body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
     };
     return (
          <div className='h-screen flex relative flex-col text-center py-10 max-w-7xl mx-auto items-center'>
               <h3 className='uppercase tracking-[20px] text-gray-500 text-4xl'>
                    Contact
               </h3>

               <div className='flex flex-col space-y-3'>
                    <h4 className='text-2xl font-semibold text-center py-10 md:text-4xl'>
                         I have what you need.{" "}
                         <span className='underline decoration-[#F7AB0A]'>Let's Talk</span>
                    </h4>

                    <div className='space-y-3'>
                         <div className='flex items-center space-x-5 justify-center'>
                              <FaPhoneAlt className='text-[#F7AB0A] h-5 w-5 animate-pulse'/>
                              <p>0811 044 3114</p>
                         </div>

                         <div className='flex items-center space-x-5 justify-center'>
                              <HiOutlineEnvelope className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                              <p>owoyeleadedayo25@gmail.com</p>
                         </div>

                         <div className='flex items-center space-x-5 justify-center'>
                              <FiMapPin className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                              <p>Magodo Road</p>
                         </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                         <div className='space-x-1'>
                              <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                              <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                         </div>

                         <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                         <textarea {...register('message')} placeholder='Message' className='contactInput' />
                         <button type='submit' className='bg-[#F7AB0A] py-2 px-7 rounded-md text-black font-bold text-lg'>Submit</button>
                    </form>
               </div>
          </div>
     )
}

export default ContactMe
