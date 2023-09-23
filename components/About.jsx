import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
      <section
          id="about"
          className='w-full max-container xl:w-4/5 max-xl:padding-x'
      >
          <div className='flex flex-col md:flex-col lg:flex-row mt-10'>   
              <div className='pt-28 lg:basis-1/2'>
                <h1 className='text-white text-4xl font-montserrat font-black'>
                    About
                    <span className='text-[#1bfd9c]'> Me</span>
                </h1>
                  <p className='text-[#cbd5e1] pt-8'>
                      Meet a budding web developer with a knack for Next.js,
                      Tailwind CSS, WordPress, and Webflow. While new to the
                      field, their passion and skills show great promise for
                      creating engaging and stylish websites.
                  </p>
              </div>
              <div className='lg:basis-1/2'>
                <Image
                    src="/assets/images/aboutme.png"
                    alt="Image about me coding"
                    width={450}
                    height={450}
                />
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row mt-10'>
         <div className='pt-28 lg:basis-1/2'>
                <Image
                    src="/assets/skillsImg/goals.png"
                    alt="Image about me coding"
                    width={450}
                    height={450}
                />
        </div>
        <div className='pt-28 lg:basis-1/2'>
          <h1 className='text-white text-4xl font-montserrat font-black'>
                    My
                    <span className='text-[#1bfd9c]'> Goals</span>
                </h1>
                  <p className='text-[#cbd5e1] pt-8'>
                      Passionate about the dynamic world of web development, I am
                      dedicated to honing my skills in HTML, CSS, JavaScript,
                      and beyond. With a keen eye for design and a strong foundation
                      in coding principles, I aspire to create seamless and visually
                      appealing websites that offer exceptional user experiences.
                      Through continuous learning and staying abreast of industry trends,
                      I aim to contribute to innovative digital solutions, ultimately making a
                      positive impact in the ever-evolving realm of technology.
                  </p>
              </div>
      </div>
    </section>
  )
}

export default About