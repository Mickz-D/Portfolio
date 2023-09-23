"use client";
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import TypedText from './TypedText'

const Hero = () => {
     const handleDownload = () => {
   
    window.open('../assets/images/cv.jpg', '_blank');
  };
  return (
      <section id='home'
                className='w-full flex xl:flex-row flex-col justify-center min-h-screen 
                            gap-10 max-container'>
       
          <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
              <h1 className='text-white text-sm font-montserrat font-medium'>
                  Hi there I'm Renato
              </h1>
              <h2 className='text-white text-4xl lg:text-8xl font-montserrat font-black'>
                  I'm a Web  <span className='text-[#1bfd9c]'>
                                <TypedText />
                            </span>
              </h2>
              <p className='text-white text-sm font-montserrat font-medium'>
                  I create intuitive and visually appealing user interfaces
                  using
                  <a href=""><span className='text-[#1bfd9c]'> Next.js</span></a>,
                  <a href=""><span className='text-[#1bfd9c]'> Tailwindcss</span></a>,
                  <a href=""><span className='text-[#1bfd9c]'> Webflow </span></a>and
                  <a href=""><span className='text-[#1bfd9c]'> WordPress</span></a>.
              </p>
              <div className='flex mt-10 gap-5'>
                  <a href="#projects">
                  <Button
                      label="My Projects"
                      backgroundColor
                      textColor="text-[#1bfd9c]"
                      borderColor="border-[#1bfd9c]"
                  />
                  </a>
                   <Button
                      label="Download CV"
                      backgroundColor="bg-[#1bfd9c]"
                      textColor="#282828"
                      borderColor="border-[#1bfd9c]"
                      onClick={handleDownload}
                      
                  />
              </div>
          </div>
          <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-18'>
              <Image
                  src="/assets/images/heroImg.png"
                  alt="Developer Image"
                  width={550}
                  height={550}
              />
          </div>
    </section>
  )
}

export default Hero