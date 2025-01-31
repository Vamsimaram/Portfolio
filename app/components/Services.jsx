import { assets, serviceData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='services' className='w-full px-[12%] py-10
    scroll-mt-20'>
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
      What I offer</motion.h4>
      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>
      My services</motion.h2> 
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I offer services in full-stack development, mobile development, 
      and more, tailored to meet your project needs.      
      </motion.p>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay:0.9}}
      className='grid grid-cols-auto gap-6 my-10'>
      {serviceData.map(({icon, title, description, link},index)=>(
        <motion.div 
        whileInView={{scale:1.05}}
        key={index}
        className='border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover
        hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
          <Image src={icon} alt='' className='w-10'/>
          <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
          <p className='text-sm text-gray-600 leading-5 dark:text-white'>
            {description}
          </p>
          <a href={link} className='flex items-center gap-2 text-sm mt-5'>
            Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
          </a>
        </motion.div>
      ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
