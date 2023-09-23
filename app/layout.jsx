import '../styles/globals.css'
import Nav from '@/components/Nav'


export const metadata = {
    title: "Renato De Asis Jr. Portfolio",
    description: "Personal portfolio project using NextJs"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
       
        <main className='relative'>
          <Nav />
          {children}
        </main>
      </body>    
    </html>
  )
}

export default RootLayout;