import AboutImage from "../../assets/About.png"
import {Icon } from '@iconify/react'

export default function About()
{
  return (
  <section className=" relative w-full max-w-380 mx-auto max-h-80">
        <div className=" relative
                         z-10 flex
                         flex-col 
                        items-center 
                        my-2 mx-8 text-[#0B1736] font-custom lg:absolute lg:inset-0 lg:ml-14! xl:ml-15! 2xl:ml-20! lg:items-start ">
          <p className="text-xs  font-semibold text-gray-400 tracking-wide ">READY TO GROW?</p>
          <h1 className="text-xl font-extrabold ">Get a Free Strategy Call</h1>
          <p className="text-xs font-medium text-center leading-3 mt-0.5 ">Let's discuss how performance marketing can grow your business in the UAE.</p>
          <button className=" bg-[#FFC83D] rounded-full flex justify-center items-center  gap-2 h-8 w-60 my-2">
            <Icon
            icon="boxicons:calendar-alt"
            className="text-xl "
            />
            <p className="text-sm font-bold " >Book Free Call</p>
            <Icon
            icon="basil:arrow-right-outline" 
            className="text-xl"
            />
          </button>
        </div>
        <div className="w-full inset-0 ">
            <img src={AboutImage} alt="" className="h-80 w-full hidden lg:block object-fill" />
            <div className="absolute z-5 inset-0 bg-[linear-gradient(to_right,#FFFFED_0%,#FFFFED_30%,#FFFFF5_45%,white_50%,#FFFFF5_55%,#FFFFED_70%,#FFFFED_100%)] lg:bg-[linear-gradient(to_right,#FFFFED_0%,#FFFFED_70%,transparent_100%)] lg:right-4/12 "></div>
        </div>
  </section>
  )
}

