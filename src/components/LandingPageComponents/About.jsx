import AboutLarge from '../../assets/AboutImage/About_large.webp'
import AboutMedium from '../../assets/AboutImage/About_medium.webp'
import AboutSmall from '../../assets/AboutImage/About_small.webp'

import {Icon } from '@iconify/react'

export default function About()
{
  return (
  <section id="About" className="relative 
                      w-full 
                      max-w-380 
                      mx-auto">

    {/* content element */}
        <div className=" relative
                         z-10 flex
                         flex-col 
                        items-center 
                        my-2 mx-8 
                        text-[#0B1736] 
                        font-custom
                        
                        min-[425px]:my-4

                        lg:absolute 
                        lg:inset-0 
                        lg:ml-14! 
                        lg:items-start 
                        lg:my-6 

                        xl:ml-16! 

                        2xl:ml-20! 
                        ">

          <p className="text-xs 
                        font-semibold 
                        text-gray-400 
                        tracking-wide 
                        
                        lg:text-sm
                        
                        xl:text-base

                        ">READY TO GROW?</p>

          <h1 className="text-xl 
                        font-extrabold 

                        min-[425px]:text-2xl
                        
                        md:mt-1
                        md:text-3xl
                        md:font-black

                        lg:text-4xl 
                        lg:mt-2 
                        lg:font-black

                        xl:text-5xl                        
                        ">Get a Free Strategy Call</h1>
          <p className="text-xs 
                        font-medium 
                        text-center 
                        leading-3 
                        mt-0.5 

                        min-[425px]:text-sm
                        min-[425px]:font-semibold
                        min-[425px]:leading-4

                        md:text-base
                        md:mt-1
                        md:leading-5

                        lg:text-start 
                        lg:text-lg 
                        lg:leading-6 
                        lg:mt-2 
                        lg:tracking-wide 
                        lg:font-bold
                        
                        xl:text-xl
                        xl:mt-3
                        ">Let's discuss how performance marketing <br/> can grow your business in the UAE.</p>
          
          {/* call  button  */}
          <button className=" bg-[#FFC83D] 
                              rounded-full 
                              flex 
                              justify-center 
                              items-center  
                              gap-2 
                              min-h-8 
                              min-w-60 
                              my-2 

                              min-[425px]:my-4
                              min-[425px]:py-2

                              md:py-3
                                                             
                              
                              lg:gap-4 
                              lg:px-4
                              
                              xl:px-8
                              xl:my-6
                              ">
            <Icon
            icon="boxicons:calendar-alt"
            className="text-xl 

                      min-[425px]:

                      md:text-2xl

                      lg:text-3xl
                      
                      xl:text-4xl
                      "
            />
            <p className="text-sm 
                          font-bold 
                          
                          md:text-base
                          
                          lg:text-lg 
                          
                          xl:text-xl

                          " >Book Free Call</p>
            <Icon
            icon="basil:arrow-right-outline"
            className="text-xl

                        md:text-2xl

                       lg:text-3xl
                       
                       xl:text-4xl
                       "
            />
          </button>
        </div>
        
        {/* bg element   */}
        <div className="w-full inset-0 ">
          {/* bg image  */}
            <img loading="lazy" src={AboutSmall} 
            sreset={`${AboutSmall} 480w, ${AboutMedium} 800w, ${AboutLarge} 1200w`}
            sizes="(max-width: 600px) 480px, 800px" 
            alt=""
            className="h-70
                      w-full 
                      hidden 
                      lg:block 
                      object-fill
                      xl:h-80
                      "/>
          {/* bg colored element  */}
            <div className="absolute 
                            z-5 
                            inset-0 
                            bg-[linear-gradient(to_right,#FFFFED_0%,#FFFFED_30%,#FFFFF5_45%,white_50%,#FFFFF5_55%,#FFFFED_70%,#FFFFED_100%)] 
                            lg:bg-[linear-gradient(to_right,#FFFFED_0%,#FFFFED_70%,transparent_100%)] 
                            lg:right-4/12 "></div>
        </div>
  </section>
  )
}

