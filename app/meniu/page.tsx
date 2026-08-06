'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlueButon from '@/components/Buton'

const Meniu = () => {

  const [sectionShow, setSectionShow] = useState(0);





  return (
    <section className='relative col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] p-[50px]'>
     <div className="left-arow"><Image src='/meniu/icons8-freccia-50.png'  width={40} height={40} alt='arrow' className='left-arow absolute left-3 sm:left-5 md:left-7 lg:left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer '></Image></div>
     <div className="right-arow"><Image src='/meniu/icons8-arrow-50.png' width={40} height={40} alt='arrow' className='right-arow absolute right-3 sm:right-5 md:right-7 lg:right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer '></Image></div>
      <div className='flex-center w-[70%] '> 


    

        <div className={`col-center  w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg scale-95 md:scale-105 
          ${sectionShow===6 || sectionShow===0 || sectionShow===1?'flex':'hidden'}`}>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px]  mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Carne.png"
              alt="Pizza"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon />
        </div>



    

      


    
      



      </div>
    </section>
  )
}

export default Meniu