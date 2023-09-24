"use client";
import Image from "next/image"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';




const Skills = () => {
    const [ref, inView] = useInView({
    threshold: 0.1, 
     });
    
  return (
     
          
    <motion.div
      className='w-full max-container xl:w-4/5 max-xl:padding-x mt-11 mb-11 pt-11 pb-11'
      ref={ref}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: inView ? 50 : 300, opacity: inView ? 1 : 0 }}
      transition={{ type: "easeInOutQuart", duration: 0.8 }}
      viewport={{ amount: 0.8 }}
    >
          <h1 className='text-white text-4xl font-montserrat font-black mb-5'>
                  My<span className='text-[#1bfd9c]'> Skills</span>
              </h1>
              <div className="flex flex-col justify-center items-center flex-wrap gap-5 md:flex-row lg:flex-row mt-8">
                        <Image
                         src="/assets/skillsImg/next.png"
                        alt="skills image next js logo"
                        width={150}
                        height={150}
                    /> 
                    <Image
                      src="/assets/skillsImg/react.png"
                      alt="skills image react js logo"
                      width={150}
                      height={150}
                    />
                  <Image
                      src="/assets/skillsImg/tailwind.png"
                      alt="skills image tailwind css logo"
                      width={150}
                      height={150}
                  />
                  <Image
                      src="/assets/skillsImg/node.png"
                      alt="skills image node js logo"
                      width={150}
                      height={150}
                  />
                  <Image
                      src="/assets/skillsImg/wpWhite.png"
                      alt="skills image wordpress logo"
                      width={150}
                      height={150}
                  />
                  <Image
                      src="/assets/skillsImg/webflow.png"
                      alt="skills image webflow logo"
                      width={150}
                      height={150}
                  />
                  <Image
                      src="/assets/skillsImg/mongodb.png"
                      alt="skills image mongodb logo"
                      width={150}
                      height={150}
                  />
                  <Image
                      src="/assets/skillsImg/mysql.png"
                      alt="skills image mysql logo"
                      width={150}
                      height={150}
                  />
              </div>
          </motion.div>

  )
}

export default Skills