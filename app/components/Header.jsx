import {assets} from '@/assets/assets' 
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'


const Header = (isDarkMode) => {
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
        className='w-6'/></motion.h3>
        <motion.h1 
        initial={{y:-30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        full-stack web developer based in Washington.
        </motion.h1>

        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
          I am a full-stack web developer based in Washington, USA. With a 
           passion for building dynamic and responsive websites, I specialize 
           in creating seamless user experiences. I thrive in fast-paced environments, '
           and I am always eager to learn new technologies to improve my skills.

            {/* I am a frontend developer currently based in Washington, USA. 
            With a Master's in Computer Science from George Mason University, 
            I specialize in web development, data science, and software development. 
            In addition to my academic background, I have practical experience 
            as a Machine Learning Research Assistant, where I built AI-driven 
            systems like a smart traffic signal control system. I'm passionate about 
            using my technical skills to create intuitive and impactful web applications. */}
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

            <motion.a 
            initial={{y:30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6, delay:1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-center gap-2 dark:bg-transparent'
            >contact me <Image src={assets.right_arrow_white}
                alt='' className='w-4'/>
            </motion.a>

            <motion.a 
            initial={{y:30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6, delay:1.2}}
            href="/Vamsi_Resume.pdf" download
            className='px-10 py-3 border rounded-full border-gray-500 flex
            items-center gap-2 bg-white dark:text-black'>
            my resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </motion.a>
        </div>
    </div>
  )
}

export default Header
