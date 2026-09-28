import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import Careem from '../../assets/businessGroupLogo/careem.png'
import DAMAC from '../../assets/businessGroupLogo/DAMAC.png'
import EMAAR from '../../assets/businessGroupLogo/EMAAR.png'
import Emirates from '../../assets/businessGroupLogo/Emirates.png'
import Noon from '../../assets/businessGroupLogo/Noon.png'
import tabalat from '../../assets/businessGroupLogo/talabat.png'
import etisalat from '../../assets/businessGroupLogo/etisalat.png'

import 'swiper/css';

const GroupsLogo=[[Careem,'Careem'], [DAMAC , "DAMAC"], [EMAAR,"EMAAR"], [Emirates,"Emirates"], [Noon,"Noon"], [tabalat, "tabalat"], [etisalat,"Etisalat"] ]

export default function TrustedGroupSection()
{
  return (
  <section className='w-full bg-white'>
    <div className='w-full'>
        {/* title */}
        <div className='w-full flex justify-center my-2 font-semibold font-custom scale-y-89 transition-[width] duration-1000 ease-in'>
            <p className='tracking-tight text-sm lg:text-base text-[#0B1736]'>TRUSTED BY GROWING BUSINESSES IN THE UAE</p>
        </div>
        <div className='w-full '>
            <Swiper
            modules={[Autoplay]}
            
            loop={true} 
            slidesPerView="auto"
            spaceBetween={10}
            speed={4500}
            autoplay={{
                delay:0,
                disableOnInteraction:false
            }}
            className='logo-swiper mx-auto'
            >
                {/* logo of groupiing business */}
            {
                [...GroupsLogo, ...GroupsLogo, ...GroupsLogo].map(([logo,name], index)=>(
                <SwiperSlide className="realtive! border-0! flex! justify-center after:content-[''] after:absolute after:right-0 after:top-4 md:after:top-5 lg:after:top-6 after:w-0.5 after:h-6 md:after:h-8 after:bg-gray-300 w-24! sm:w-30! md:w-36! lg:w-40! transition-[width] duration-700 ease-in">
                    <div className=" w-16 h-12 md:w-20 md:h-16 lg:w-32 lg:h-20 flex justify-center items-center ">
                        <img
                        src={logo} 
                        alt={name}
                        className='text-black w-22' />
                    </div>
                </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    </div>
  </section>
  )
}
