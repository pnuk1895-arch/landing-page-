import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import CareemMedium from '../../assets/businessGroupLogo/Careem/careem_medium.webp'
import CareemLarge from '../../assets/businessGroupLogo/Careem/careem_large.webp'
import CareemSmall from '../../assets/businessGroupLogo/Careem/careem_small.webp'

import DamacLarge from '../../assets/businessGroupLogo/DAMAC/DAMAC_large.webp'
import DamacSmall from '../../assets/businessGroupLogo/DAMAC/DAMAC_small.webp'
import DamacMedium from '../../assets/businessGroupLogo/DAMAC/DAMAC_medium.webp'

import EMAARLarge from '../../assets/businessGroupLogo/EMAAR/EMAAR_large.webp'
import EMAARMedium from '../../assets/businessGroupLogo/EMAAR/EMAAR_medium.webp'
import EMAARSmall from '../../assets/businessGroupLogo/EMAAR/EMAAR_small.webp'

import EmiratesLarge from '../../assets/businessGroupLogo/Emirates/Emirates_large.webp'
import EmiratesMedium from '../../assets/businessGroupLogo/Emirates/Emirates_medium.webp'
import EmiratesSmall from '../../assets/businessGroupLogo/Emirates/Emirates_small.webp'

import NoonLarge from '../../assets/businessGroupLogo/Noon/Noon_large.webp'
import NoonMedium from '../../assets/businessGroupLogo/Noon/Noon_medium.webp'
import NoonSmall from '../../assets/businessGroupLogo/Noon/Noon_small.webp'

import tabalatLarge from '../../assets/businessGroupLogo/talabat/talabat_large.webp'
import tabalatMedium from '../../assets/businessGroupLogo/talabat/talabat_medium.webp'
import tabalatSmall from '../../assets/businessGroupLogo/talabat/talabat_small.webp'

import etisalatLarge from '../../assets/businessGroupLogo/etisalat/etisalat_large.webp'
import etisalatMedium from '../../assets/businessGroupLogo/etisalat/etisalat_medium.webp'
import etisalatSmall from '../../assets/businessGroupLogo/etisalat/etisalat_small.webp'

import 'swiper/css';

const GroupsLogo=[
    {
        name:"Careem",
        large:CareemLarge,
        medium:CareemMedium,
        small:CareemSmall
    },
    {
        name:'DAMAC',
        large:DamacLarge,
        medium:DamacMedium,
        small:DamacSmall
    },
    {
        name:'EMAAR',
        large:EMAARLarge,
        medium:EMAARMedium,
        small:EMAARSmall
    },
    {
        name:'Emirates',
        large:EmiratesLarge,
        medium:EmiratesMedium,
        small:EmiratesSmall
    },
    {
        name:'Noon',
        large:NoonLarge,
        medium:NoonMedium,
        small:NoonSmall
    },
    {
        name:'tabalat',
        large:tabalatLarge,
        medium:tabalatMedium,
        small:tabalatSmall
    },
    {
        name:'etisalat',
        large:etisalatLarge,
        medium:etisalatMedium,
        small:etisalatSmall
    },

]

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
                [...GroupsLogo, ...GroupsLogo, ...GroupsLogo].map((obj, index)=>(
                <SwiperSlide key={index} className="realtive! border-0! flex! justify-center after:content-[''] after:absolute after:right-0 after:top-4 md:after:top-5 lg:after:top-6 after:w-0.5 after:h-6 md:after:h-8 after:bg-gray-300 w-24! sm:w-30! md:w-36! lg:w-40! transition-[width] duration-700 ease-in">
                    <div className=" w-16 h-12 md:w-20 md:h-16 lg:w-32 lg:h-20 flex justify-center items-center ">
                        <img
                        src={obj.small} 
                        srcSet={`${obj.small} 480w, ${obj.medium} 800w, ${obj.large} 1200w `}
                        alt={obj.name}
                        loading="lazy"
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
