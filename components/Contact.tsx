import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form'; 
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const [text] = useTypewriter({
    words: ["I have got just what you need.", "Let's talk"],
    loop: true,
    delaySpeed: 4000,
  });

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sergiu.petre@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

      {/* Adjusted Contact title with responsive positioning */}
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Contact
      </h3>

      {/* Add padding to avoid content overlap with the title */}
      <div className='flex flex-col space-y-10 w-full md:w-3/4 lg:w-1/2 mt-28 md:mt-40'>
        <h4 className='text-center text-4xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span className='nr-3'>{text}</span>
          <Cursor cursorColor='#ff7ab7' />
        </h4>

        <div className='flex flex-col items-center space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab8a] h-7 w-7 animate-pulse' />
            <p className='text-xl md:text-2xl'>+40735230187</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab8a] h-7 w-7 animate-pulse' />
            <p className='text-xl md:text-2xl'>sergiu.petre@yahoo.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab8a] h-7 w-7 animate-pulse' />
            <p className='text-xl md:text-2xl'>Ploiesti, Prahova</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full max-w-md mx-auto'>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput w-full' type="text" />
            <input {...register('email')} placeholder='E-mail' className='contactInput w-full' type="email" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput w-full' type="text" />
          <textarea {...register('message')} placeholder='Message' className='contactInput w-full' />
          <button type="submit" className='bg-[#f7ab8a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  );
}

