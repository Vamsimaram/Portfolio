import {assets, infoList, toolsData} from '@/assets/assets' 
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='about' className='w-full px-[12%] py-10
    scroll-mt-20 flex flex-col items-center text-center'>
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
      Introduction
      </motion.h4>

      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>
      About Me
      </motion.h2>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
      className='max-w-2xl mt-10'>
        {/* <motion.div 
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt=''
                className='w-full rounded-3xl'/>
        </motion.div> */}

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.8}}
         className='flex-1 justify-center'>
           <p className='mb-10 max-w-2xl font-Ovo justify-center '>
           I hold a Master's degree in Computer Science from George Mason University 
           and specialize in web development, data science, and software development. 
           I am deeply passionate about leveraging my technical skills to create 
           intuitive and impactful web applications.

           {/* I am a frontend web developer based in Washington, USA. With a 
           passion for building dynamic and responsive websites, I specialize 
           in creating seamless user experiences. I thrive in fast-paced environments, '
           and I am always eager to learn new technologies to improve my skills. */}
           </p> 

           <motion.ul 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.8, delay:1}}
           className='grid grid-cols-1 sm:grid-cols-3 gap-6
           max-w-2xl justify-center'>
            {infoList.map(({icon,iconDark, title, description},index)=>(
                <motion.li 
                whileInView={{scale:1.05}}
                className='border-[0.5px] border-gray-400 justify-center
                rounded-xl p-6 cursor-pointer hover:bg-lightHover
                hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}>
                <Image src={isDarkMode? iconDark : icon} alt='' className='w-7 mt-3 justify-center'/>
                <h3 className='my-4 font-semibold
                text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </motion.li>
            ))}
           </motion.ul>
           <motion.h4
           initial={{opacity:0, y:20}}
           whileInView={{opacity:1, y:0}}
           transition={{duration:0.5, delay:1.3}}
            className='my-6 justify-center text-gray-700 font-Ovo dark:text-white/80'>Tools
            </motion.h4>

           <motion.ul 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.6, delay:1.5}}  
           className='flex justify-center items-center gap-3 sm:gap-5'>
             {toolsData.map((tool,index)=>(
                <motion.li 
                whileInView={{scale:1.05}}
                className='flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1
                duration-500' 
                key={index}>
                    <Image src={tool} alt='' className='w-5 sm:w-7'/>
                </motion.li>
             ))}
           </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
