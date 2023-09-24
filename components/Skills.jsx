"use client";
import Image from "next/image"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';




const Skills = () => {
    const [ref, inView] = useInView({
    threshold: 0.1, 
     });
    
  return (
     
          
          <div className='w-full max-container xl:w-4/5 max-xl:padding-x mt-11 mb-11 pt-11 pb-11'>
          <motion.h1
                className='text-white text-4xl font-montserrat font-black mb-5'
                ref={ref}
                initial={{ x: '-100%', opacity: 0 }} // Slide in from the left and start invisible
                animate={{ x: inView ? 0 : '-100%', opacity: inView ? 1 : 0 }} // Slide in or out based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
          >
                  My<span className='text-[#1bfd9c]'> Skills</span>
              </motion.h1>
              <div className="flex flex-col justify-center items-center flex-wrap gap-5 md:flex-row lg:flex-row mt-8">
              <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
              >
                        <Image
                         src="/assets/skillsImg/next.png"
                        alt="skills image next js logo"
                        width={150}
                        height={150}
                    />
              </motion.div>   
                <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
                >
                    <Image
                      src="/assets/skillsImg/react.png"
                      alt="skills image react js logo"
                      width={150}
                      height={150}
                    />
              </motion.div> 
              <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
               >
                  <Image
                      src="/assets/skillsImg/tailwind.png"
                      alt="skills image tailwind css logo"
                      width={150}
                      height={150}
                  />
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
               >
                  <Image
                      src="/assets/skillsImg/node.png"
                      alt="skills image node js logo"
                      width={150}
                      height={150}
                  />
              </motion.div> 
              <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
               >
                  <Image
                      src="/assets/skillsImg/wpWhite.png"
                      alt="skills image wordpress logo"
                      width={150}
                      height={150}
                  />
              </motion.div> 
              <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
               >
                  <Image
                      src="/assets/skillsImg/webflow.png"
                      alt="skills image webflow logo"
                      width={150}
                      height={150}
                  />
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
               >
                  <Image
                      src="/assets/skillsImg/mongodb.png"
                      alt="skills image mongodb logo"
                      width={150}
                      height={150}
                  />
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ rotateY: -180, opacity: 0 }} // Start flipped and invisible
                animate={{ rotateY: inView ? 0 : -180, opacity: inView ? 1 : 0 }} // Flip or unflip based on inView
                transition={{ type: "easeInOutQuart", duration: 0.8 }}
                viewport={{ amount: 0.8 }}
               >
                  <Image
                      src="/assets/skillsImg/mysql.png"
                      alt="skills image mysql logo"
                      width={150}
                      height={150}
                  />
                </motion.div>  
              </div>
          </div>

  )
}

export default Skills