import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlueButon from '@/components/Buton'

const Meniu = () => {
  return (
    <section className='col-center principal-gradient w-full min-h-[95dvh]'>

      <div className="col-center w-80 bg-black text-white border border-gray-700 rounded-lg p-6 shadow-lg">

        <h2 className="text-3xl font-serif tracking-wide mb-4">
          Pizza
        </h2>

        <div className="relative w-full h-64 mb-6 overflow-hidden rounded border border-gray-600">
          <Image
            src="/pizza.jpg"
            alt="Pizza"
            fill
            className="object-cover"
          />
        </div>

        <BlueButon/>
      </div>


    </section>
  )
}

export default Meniu