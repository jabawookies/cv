import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 z-50 bg-transparent p-5 w-full">
            <div className="flex items-start justify-between max-w-7xl mx-auto">
                {/* Social Icons on the left */}
                <motion.div
                    initial={{ x: -300, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-row items-center"
                >
                    <SocialIcon url="https://www.behance.net/isergiuadrian" fgColor="gray" bgColor="transparent"  />
                    <SocialIcon url="https://www.linkedin.com/in/petre-sergiu-adrian/" fgColor="gray" bgColor="transparent" />
                    <SocialIcon url="https://www.facebook.com/petre.sergiu.334/" fgColor="gray" bgColor="transparent" />
                   {/* <SocialIcon url="https://www.instagram.com/sonee.inspace/" fgColor="gray" bgColor="transparent"  />*/}
                </motion.div>

                {/* Contact Info on the right */}
                <motion.div
                    onClick={() => (window.location.href = "#Contact")}
                    initial={{ x: 300, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer"
                >
                    <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
                </motion.div>
            </div>
        </header>
    );
}
