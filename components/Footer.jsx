import Image from "next/image"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <section>     
      <div className="flex flex-1 justify-center items-center">
          <a href="https://github.com/Mickz-D">
            <Image
              src="/assets/Social Icons/github.png"
              alt="social icon github logo"
              width={45}
              height={45}
            />
            </a>
           <a href="https://www.linkedin.com/in/renato-de-asis-jr-6b67a2234/">    
           <Image
              src="/assets/Social Icons/LinkedIn.png"
              alt="social icon LinkedIn logo"
              width={45}
              height={45}
            />
            </a>
            <a href="https://www.instagram.com/mickz.it/">     
           <Image
              src="/assets/Social Icons/instagram.png"
              alt="social icon instagram logo"
              width={45}
              height={45}
            />
            </a>
        </div>
          <div className="flex flex-1 justify-center items-center mt-5 mb-5">
            <p className="text-sm text-zinc-400 font-montserrat font-medium">
              © {year} DEVELOPED AND DESIGN BY MICKZ.
            </p>
          </div>
        </section>
  )
}

export default Footer