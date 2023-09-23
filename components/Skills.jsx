import Image from "next/image"

const Skills = () => {
  return (
      <section
          id='skills'
          className='w-full max-container xl:w-4/5 max-xl:padding-x'>
          <div>
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
          </div>
    </section>
  )
}

export default Skills