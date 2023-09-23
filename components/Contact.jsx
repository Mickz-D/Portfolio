import React from 'react'

const Contact = () => {
  return (
      <section
          id='contact'
          className='w-full max-container xl:w-4/5 max-xl:padding-x mt-11'
      >
          <div className='flex flex-1 flex-wrap flex-col justify-center items-center'>
              <h1 className='text-2xl text-[#1bfd9c] font-montserrat font-bold text-center'>
                  Interested working with me?
              </h1>
              <h2 className='text-4xl text-slate-300 font-montserrat font-black mb-5 mt-5 text-center'>
                  Let's Connect!
              </h2>
              <p className='text-slate-300 font-montserrat text-center'>
                  I am continuously seeking new experiences and knowledge,
                  and I would be thrilled to work with you. Feel free to email me
                  at <span className='text-[#1bfd9c]'> renato.deasis300@gmail.com </span> to discuss potential collaborations.
              </p>
          </div>
    </section>
  )
}

export default Contact