import {assets} from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
    items-center justify-center gap-4'>
      {/* <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type:'spring', stiffness:100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div> */}

      <motion.h3
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.6, delay:0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Vamsi Krishna Maram <Image src={assets.hand_icon} alt=''
        className='w-6'/>
      </motion.h3>
      
      <motion.h1 
        initial={{y:-30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        full-stack web developer 
      </motion.h1>
      
      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
        Innovative full-stack engineer translating vision into intuitive digital 
        experiences from concept to launch. From my Washington base, I combine technical 
        prowess with creative problem-solving to craft applications that connect 
        people and inspire possibilities.
      </motion.p>
      
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <motion.div
          initial={{y:30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.6, delay:1}}
          className='flex items-center gap-4'
        >
          <a 
            href="mailto:vamsim1221@gmail.com"
            className='w-12 h-12 rounded-full flex items-center justify-center
            border border-gray-400 bg-gray-100 hover:bg-gray-200 
            dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300
            hover:-translate-y-1 hover:shadow-md'
            aria-label="Email"
          >
            <Image src={assets.mail_icon} alt="Email" className={`w-5 ${isDarkMode ? 'hidden' : 'block'}`} />
            <Image src={assets.mail_icon_dark} alt="Email" className={`w-5 ${isDarkMode ? 'block' : 'hidden'}`} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/vamsi-krishna-maram/"
            target="_blank"
            rel="noopener noreferrer" 
            className='w-12 h-12 rounded-full flex items-center justify-center
            border border-gray-400 bg-gray-100 hover:bg-gray-200
            dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300
            hover:-translate-y-1 hover:shadow-md'
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isDarkMode ? "white" : "black"}>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          <a 
            href="https://github.com/Vamsimaram"
            target="_blank"
            rel="noopener noreferrer"
            className='w-12 h-12 rounded-full flex items-center justify-center
            border border-gray-400 bg-gray-100 hover:bg-gray-200
            dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300
            hover:-translate-y-1 hover:shadow-md'
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isDarkMode ? "white" : "black"}>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </motion.div>
        
        <motion.a
          initial={{y:30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.6, delay:1.2}}
          href="/Vamsi_Resume.pdf" download
          className='px-10 py-3 border rounded-full border-gray-500 
          flex items-center gap-2 bg-white hover:bg-gray-100
          dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white
          transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
        >
          my resume 
        </motion.a>
      </div>
    </div>
  )
}

export default Header