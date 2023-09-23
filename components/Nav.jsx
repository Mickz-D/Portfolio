"use client";
import Image from "next/image"
import { useState } from "react";

const Nav = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
      <header
          className='w-full max-container xl:w-4/5 max-xl:padding-x sticky top-0 z-10'
      >
       <nav className="flex justify-between items-center max-container">
              <a href="/">
                  <Image
                      src="/assets/images/greenLogo.png"
                      alt="Logo"
                      width={75}
                      height={75}
                    
          />
        </a>
        <div className="hidden sm:flex md:flex">
              <ul className="flex-1 flex justify-end gap-16 max-lg:flex">
                  
                      <li >
                          <a href="#home"
                             className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#1bfd9c]" 
                        >
                          Home
                          </a>
                  </li>
                  <li >
                          <a href="#projects"
                             className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#1bfd9c]" 
                        >
                          Projects
                          </a>
                  </li>
                  <li >
                          <a href="#about"
                             className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#1bfd9c]" 
                        >
                          About
                          </a>
                  </li>
                  <li >
                          <a href="#contact"
                             className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#1bfd9c]" 
                        >
                          Contact
                          </a>
                      </li>
                  
            </ul>
          </div>
              <div className={`sm:hidden curser-pointer" ${isMenuOpen ?'hidden':''} lg:hidden`} onClick={toggleMenu}>
                  <Image
                      src="/assets/icons/hamburger.png"
                      alt="Hamburger"
                      width={25}
                      height={25}
                  />
        </div>
        <div className={`
        ${isMenuOpen
            ?
            "fixed left-0 top-0 w-[65%] h-[45%] sm:hidden md:flex p-5 ease-in duration-500"
            :
            "fixed left-[100%] top-0 p-5 ease-in duration-500"}
        `}>
          <div>
            <div onClick={toggleMenu} className="flex flex-col items-start cursor-pointer mb-5">
            <Image
                      src="/assets/icons/close.png"
                      alt="close icon"
                      width={15}
                      height={25}
                  />
            </div>
            <div className="flex-col">
            <ul>
                  
                      <li >
                  <a href="#home"
                    onClick={() => setIsMenuOpen(false)}
                             className="font-montserrat leading-normal text-lg text-slate-gray" 
                        >
                          Home
                          </a>
                  </li>
                  <li >
                  <a href="#projects"
                    onClick={() => setIsMenuOpen(false)}
                             className="font-montserrat leading-normal text-lg text-slate-gray" 
                        >
                          Projects
                          </a>
                  </li>
                  <li >
                  <a href="#about"
                    onClick={() => setIsMenuOpen(false)}
                             className="font-montserrat leading-normal text-lg text-slate-gray" 
                        >
                          About
                          </a>
                  </li>
                  <li >
                  <a href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                             className="font-montserrat leading-normal text-lg text-slate-gray" 
                        >
                          Contact
                          </a>
                      </li>
                  
            </ul>
            </div>
          </div>
        </div>
        </nav>
    </header>
  )
}

export default Nav