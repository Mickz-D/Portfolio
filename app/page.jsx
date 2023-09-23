import React from 'react'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Projects />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <About />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Skills />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default page