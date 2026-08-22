'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/Logo.png'

const Navbar = () => {

  const [burger, setBurger] = useState(false)
  const handleBurger = () => {
    console.log(burger)
    setBurger((prevState) => !prevState)
  }


  return (
    <>
      <nav className=" min-w-[375px] w-full flex justify-between items-center sticky top-0 z-50 bg-[#1e1e1e] h-[60px] px-10">

        <Link href='/' className="logo relative w-12 h-12">
          <Image
            src={logoImg}
            alt="logo"
            fill
            className="object-cover"
          />
        </Link>

        <div className="pages text-center text-white hidden md:flex items-center justify-center   md:gap-[25px] lg:gap-[30px] font-serif-playfair">
          <Link href='/meniu'>Meniu</Link>
          <Link href='/programari'>Programari</Link>
          <Link href='/recenzii'>Recenzii</Link>
          <Link href='/contact'>Contact</Link>
        </div>

        <button onClick={handleBurger} className='col-center gap-[4px] md:hidden'>
          <span className='border-2 border-gray-300 w-[30px]'></span>
          <span className='border-2 border-gray-300 w-[30px]'></span>
          <span className='border-2 border-gray-300 w-[30px]'></span>
        </button>
        <div className={`absolute  top-14 right-0 z-50 flex-col w-56 font-serif-playfair text-sm md:hidden text-white bg-black p-5 rounded-2xl shadow-xl border border-gray-100 gap-4 ${burger ? 'flex' : 'hidden'}`}>
          <Link href='/meniu'>Meniu</Link>
          <Link href='/programari' >Programari</Link>
          <Link href='/recenzii' >Recenzii</Link>
          <Link href='/contact' >Contact</Link>
        </div>
      </nav>


    </>

  )
}

export default Navbar