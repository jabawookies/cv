import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='scroll-smooth flex flex-col relative min-h-screen text-center md:text-left max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center'
    >
      {/* Title with increased spacing */}
      <h3 className='absolute top-0 md:top-4 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        About
      </h3>

      {/* Content wrapper with increased margin-top */}
      <div className='flex flex-col md:flex-row items-center mt-2 md:mt-10'>
        {/* Image with responsive size and margin adjustment */}
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="https://media.licdn.com/dms/image/v2/C4E03AQE8EBA5lLkMbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652887904910?e=1733961600&v=beta&t=2llsmB4HNgRkjO5UlrtD-W-MIOCKU2nhjRAntRHCpUM"
          alt="Profile"
          className='object-cover mb-10 md:mb-0 flex-shrink-0 w-40 h-40 md:w-64 md:h-96 rounded-full md:rounded-lg xl:w-[500px] xl:h-[600px]'
        />

        {/* Text content */}
        <div className='space-y-5 px-5 md:px-10'>
          <h4 className='text-3xl md:text-4xl font-semibold'>
            Here is a <span className='underline decoration-[#f7ab8a]'>little</span> background
          </h4>
          <p className='text-sm md:text-base'>
            I am a motivated and adaptable UX/UI and graphic designer with a strong passion for creativity and innovation. With over 1 year of experience in managing public image, event planning, and marketing campaigns, I’ve developed a unique skill set in organizing and promoting electronic music events, collaborating closely with artists, and handling logistics.
            <br /><br />
            My hands-on experience spans from creating marketing strategies and graphic designs for festivals and websites to managing social media campaigns, ensuring that the image and message of each event resonates with its audience. I'm proficient in design tools like Figma, Photoshop, and Canva, and have a keen eye for creating visually appealing and engaging content.
            <br /><br />
            In addition to my creative background, I have experience in diverse fields such as logistics, e-commerce, and hospitality, which have helped me become a versatile and quick learner, always ready to take on new challenges.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
