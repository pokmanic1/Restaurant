'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BlueButon} from '@/components/Buton'
import { section } from 'framer-motion/client'

const Meniu = () => {

const [sectionShow, setSectionShow] = useState<number>(0);
  const totalSections = 5; 

  const changeSection = (step: number) => {
    setSectionShow((prevSection) => {
      const nextSection = prevSection + step;
      if(nextSection>5)return 0
      if(nextSection<0) return 5
      return nextSection
    });
  };

  const getOrder = (cardIndex: number) => {
    let diff = cardIndex - sectionShow
    if (diff === 5) diff = -1
    if (diff === -5) diff = 1
    return diff
  }


  return (
    <section className='relative col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]'>
     <button onClick={()=>changeSection(-1)} className="left-arow"><Image src='/meniu/icons8-freccia-50.png'  width={40} height={40} alt='arrow' className='left-arow absolute Z-10 left-3 sm:left-5 md:left-7 lg:left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer '></Image></button>
     <button onClick={() => changeSection(1)} className="right-arow"><Image src='/meniu/icons8-arrow-50.png' width={40} height={40} alt='arrow' className='right-arow absolute Z-10 right-3 sm:right-5 md:right-7 lg:right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer '></Image></button>
      <div className='flex-center w-full   '> 


        {/* -------------------------------------------------------------------------------------------- */}
        {/* Carne = index 0 */}
        {/* -------------------------------------------------------------------------------------------- */}

        <div style={{order: getOrder(0)}} className={`col-center  w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-white/5  text-white border border-gray-700 rounded-lg px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6 shadow-2xl hover:border-white/20 hover:bg-white/10 
          ${sectionShow===5 || sectionShow===0 || sectionShow===1?'flex':'hidden'}
          ${sectionShow===0 ? 'scale-105':'scale-75'}`}>

          <h2 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4">
            Carne
          </h2>

          <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px]  mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Carne.png"
              alt="Carne"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon continut="Vezi mai mult" link="/meniu/carne" />
        </div>


        {/* -------------------------------------------------------------------------------------------- */}
        {/* Pizza = index 1 */}
        {/* -------------------------------------------------------------------------------------------- */}

        <div style={{order: getOrder(1)}} className={`col-center  w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-white/5  text-white border border-gray-700 rounded-lg px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6shadow-2xl hover:border-white/20 hover:bg-white/10 
          ${sectionShow===0 || sectionShow===1 || sectionShow===2?'flex':'hidden'}
          ${sectionShow===1 ? 'scale-105':'scale-75'}`}>

          <h2 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px]  mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Pizza.png"
              alt="Pizza"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon continut="Vezi mai mult" link="/meniu/pizza" />
        </div>


        {/* -------------------------------------------------------------------------------------------- */}
        {/* Mic Dejun = index 2 */}
        {/* -------------------------------------------------------------------------------------------- */}

        <div style={{order: getOrder(2)}} className={`col-center  w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-white/5  text-white border border-gray-700 rounded-lg px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6shadow-2xl hover:border-white/20 hover:bg-white/10  
          ${sectionShow===1 || sectionShow===2 || sectionShow===3?'flex':'hidden'}
          ${sectionShow===2 ? 'scale-105':'scale-75'}`}>

          <h2 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4">
            Mic Dejun
          </h2>

          <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px]  mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/MicDejun.png"
              alt="Mic Dejun"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon continut="Vezi mai mult" link="/meniu/micdejun" />
        </div>


        {/* -------------------------------------------------------------------------------------------- */}
        {/* Pasta = index 3 */}
        {/* -------------------------------------------------------------------------------------------- */}

        <div style={{order: getOrder(3)}} className={`col-center  w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-white/5  text-white border border-gray-700 rounded-lg px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6shadow-2xl hover:border-white/20 hover:bg-white/10   
          ${sectionShow===2 || sectionShow===3 || sectionShow===4?'flex':'hidden'}
          ${sectionShow===3 ? 'scale-105':'scale-75'}`}>

          <h2 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4">
            Pasta
          </h2>

          <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px]  mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Pasta.png"
              alt="Pasta"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon continut="Vezi mai mult" link="/meniu/pasta"/>
        </div>


        {/* -------------------------------------------------------------------------------------------- */}
        {/* Salaata = index 4 */}
        {/* -------------------------------------------------------------------------------------------- */}

        <div style={{order: getOrder(4)}} className={`col-center  w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-white/5  text-white border border-gray-700 rounded-lg px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6shadow-2xl hover:border-white/20 hover:bg-white/10 
          ${sectionShow===3 || sectionShow===4 || sectionShow===5?'flex':'hidden'}
          ${sectionShow===4 ? 'scale-105':'scale-75'}`}>

          <h2 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4">
            Salaata
          </h2>

          <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px]  mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Salat.png"
              alt="Salata"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon continut="Vezi mai mult" link="/meniu/salata"/>
        </div>


        {/* -------------------------------------------------------------------------------------------- */}
        {/* Supe = index 5 */}
        {/* -------------------------------------------------------------------------------------------- */}

        <div style={{order: getOrder(5)}} className={`col-center  w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] bg-white/5  text-white border border-gray-700 rounded-lg px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6shadow-2xl hover:border-white/20 hover:bg-white/10   
          ${sectionShow===4 || sectionShow===5 || sectionShow===0?'flex':'hidden'}
          ${sectionShow===5 ? 'scale-105':'scale-75'}`}>

          <h2 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4">
            Supe
          </h2>

          <div className="relative w-full h-[140px] sm:h-[170px] md:h-[220px]  mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Soup.png"
              alt="Supe"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon continut="Vezi mai mult" link="/meniu/supe" />
        </div>



      </div>
    </section>
  )
}

export default Meniu  