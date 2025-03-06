import { assets, serviceData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >      
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
      </motion.h4>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Experience
      </motion.h2>
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
             Technical journey through research and cloud-based application development.
      </motion.p>

      
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 max-w-7xl mx-auto'
      >
        {serviceData.map((item, index) => {
          // Split the description by bullet points
          const bulletPoints = item.description.split('\n\n').filter(point => point.trim() !== '');
          
          return (
            <motion.div
              whileInView={{ scale: 1.05 }}
              key={index}
              className='border border-gray-400 rounded-lg overflow-hidden h-full flex flex-col
                hover:shadow-black cursor-pointer hover:bg-lightHover
                hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white
                mx-2'
            >
              {/* Job title - Now at the top and more prominent */}
              <div className="px-8 pt-8 pb-4">
                <h4 className="text-xl font-Ovo text-gray-800 dark:text-white">
                  {item.title}
                </h4>
              </div>
              
              {/* Header section with logo and company info */}
              <div className="flex items-start px-8 pb-4">
                {/* Logo container */}
                <div className="w-16 h-16 min-w-[4rem] flex-shrink-0 bg-white rounded-md p-2 shadow-sm mr-4 flex items-center justify-center">
                  <Image 
                    src={item.logo || assets.web_icon} 
                    alt={item.company || 'Company'} 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                
                {/* Company and position info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-Ovo text-gray-700 dark:text-white">
                    {item.company || 'Company Name'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-white font-Ovo">
                    {item.location || 'Location'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-white font-Ovo italic">
                    {item.period || 'Date Range'}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <div className="px-8 pt-2 pb-8 flex-grow">
                <div className="space-y-4">
                  {bulletPoints.map((point, i) => (
                    <p key={i} className='text-sm text-gray-600 leading-5 dark:text-white pl-4 relative font-Ovo'>
                      <span className="absolute left-0 top-0">•</span>
                      {point.startsWith('•') ? point.substring(1).trim() : point}
                    </p>
                  ))}
                </div>
                
                {item.link && item.link !== '#' && (
                  <a 
                    href={item.link} 
                    className='flex items-center gap-2 text-sm mt-5 font-Ovo'
                  >
                    View Details
                    <Image 
                      src={assets.right_arrow} 
                      alt='' 
                      className='w-4'
                    />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  )
}

export default Services