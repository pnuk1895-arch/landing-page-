import logo from '/Logo_of_Axvional_digital.png'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
import { ArrowRight, Cpu } from "lucide-react"

const links = [
  "Home",
  "Services",
  "Case Studies",
  "About"
]

export default function Header() {
  return (
    <header className=" absolute top-0 w-full h-18 px-8 sm:px-10 md:px-12 lg:px-14 " >

      {/* // desktop header */}
      <div className="w-full max-w-326 h-full mx-auto flex justify-center items-center">
        {/* logo */}
        <div className='flex-1 h-14 flex gap-3 min-w-52 items-center' >
          <img
            src={logo}
            alt="Axvional logo"
            className='h-14' />
            <Link to="https://www.axvionel.com/" className='relative leading-4.5 text-center shrink-0'>
              <p className='font-bold text-white scale-95'>Axvional Digital</p>
              <p className='text-[12px] text-gray-500 font-bold tracking-widest scale-y-85 '>PRIVATE LIMITED</p>
              <Cpu className='absolute top-0 left-31 w-3 h-3 text-gray-300 transition-colors duration-500 ease-in hover:text-gray-500'/>
            </Link>
        </div>

        {/* nav bar   */}
        <div className='flex-4 hidden lg:block'>
          <nav className=' w-auto flex justify-center gap-10 '>
            {
              links.map((link, index) => (
                <span key={`${link}-${index}`}>
                  <Link to="/" className='text-[#F4F8FC] opacity-90 font-custom font-extralight'>{link}</Link>
                </span>
              ))
            }
          </nav>
        </div>

        {/* call button */}
        <div className=' w-60 hidden md:flex justify-end'>
          <button className='bg-[#FFC83D] text-black font-bold rounded-full w-full max-w-50 transition-all flex justify-center py-2 items-center gap-2 ' >
            <p className='text-sm '>
              Get a Free Strategy Call
            </p>
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      
      {/* tablet */}

              <div className='w-1/12 flex justify-end lg:hidden'>
                  <MdOutlineMenu className='w-8 h-8' />
              </div>

      
      </div>
    </header>
  )
}
