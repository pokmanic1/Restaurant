import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import logoImg from '@/public/Logo.png' 

const Navbar = () => {
  return (
    <nav className=" min-w-[375px] w-full flex justify-between items-center sticky top-0 z-50 bg-black h-[60px] px-10">

      <Link href='/' className="logo relative w-12 h-12">
        <Image 
          src={logoImg} 
          alt="logo" 
          fill
          className="object-cover" 
        />
      </Link>

      <div className="pages text-center text-white flex items-center justify-center gap-[30px] font-serif-playfair">
        <Link href='/meniu'>Meniu</Link>
        <Link href='/programari'>Programari</Link>
        <Link href='/recenzii'>Recenzii</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar