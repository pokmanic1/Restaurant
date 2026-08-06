'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlueButon from '@/components/Buton'

const Meniu = () => {

  const [sectionShow, setSectionShow] = useState(0);





  return (
    <section className='col-center principal-gradient w-full min-h-[95dvh] p-[50px]'>
      <div>
        <div className="col-center w-80 bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg">

          <h2 className="text-3xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Pizza.png"
              alt="Pizza"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon />
        </div>


        <div className="col-center w-80 bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg">

          <h2 className="text-3xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Carne.png"
              alt="Pizza"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon />
        </div>



        <div className="col-center w-80 bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg">

          <h2 className="text-3xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/MicDejun.png"
              alt="Pizza"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon />
        </div>


        <div className="col-center w-80 bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg">

          <h2 className="text-3xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Pasta.png"
              alt="Pizza"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon />
        </div>



        <div className="col-center w-80 bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg">

          <h2 className="text-3xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Soup.png"
              alt="Pizza"
              fill
              className="object-cover"
            />
          </div>

          <BlueButon />
        </div>

        <div className="col-center w-80 bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg">

          <h2 className="text-3xl font-serif tracking-wide mb-4">
            Pizza
          </h2>

          <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-gray-600">
            <Image
              src="/meniu/Salat.png"
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