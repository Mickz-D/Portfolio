"use client";
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



const Projects = () => {
  const [ref, inView] = useInView({
   threshold: 0.1,
  });
  return (
      <section
          id='projects'
          className='w-full max-container xl:w-4/5 max-xl:padding-x'
    >
      <motion.div
        ref={ref}
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: inView ? 50 : 300, opacity: inView ? 1 : 0 }}
        transition={{ type: "easeInOutQuart", duration: 0.8 }}
        viewport={{ amount: 0.8 }}
      >
        <motion.div
         
        >
              <h1 className='text-white text-4xl font-montserrat font-black'>
                  My<span className='text-[#1bfd9c]'> Projects</span>
              </h1>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-10'>
          <div>
              <h2 className='text-3xl font-montserrat font-bold text-white'>
                  Keeper App
              </h2>
              <p className='text-[#cbd5e1]'>
                Keeper, a streamlined note-taking app built with Next.js.
                Experience seamless performance and a clean, intuitive interface
                for organizing your thoughts effortlessly.
                      </p>
                      <div className='flex gap-5 mt-5 mb-5'>
                        <a href="https://keeper-app-dun-ten.vercel.app/">
                        <Button
                            label="View site"
                            backgroundColor
                            textColor="text-[#1bfd9c]"
                            borderColor="border-[#1bfd9c]"
                          />
                          </a>
                          <a href="https://github.com/Mickz-D/notes-app">
                          <Button
                            label="Github"
                            backgroundColor="bg-[#1bfd9c]"
                            textColor="#282828"
                            borderColor="border-[#1bfd9c]"
                          />
                          </a>
                          </div>
          </div>
          <div>
              <Image
                  src="/assets/images/keeper-image.png"
                  alt="Keeper app project iamge for all devices"
                  width="450"
                  height="450"
              />
              </div>
              </div>
        </motion.div>
        </motion.div>
    </section>
  )
}

export default Projects