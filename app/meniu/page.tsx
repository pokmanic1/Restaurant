'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MenuCard } from '@/components/MeniuCard';

const MENU_ITEMS = [
  { title: 'Carne', image: '/meniu/Carne.png', link: '/meniu/carne' },
  { title: 'Pizza', image: '/meniu/Pizza.png', link: '/meniu/pizza' },
  { title: 'Mic Dejun', image: '/meniu/MicDejun.png', link: '/meniu/micdejun' },
  { title: 'Pasta', image: '/meniu/Pasta.png', link: '/meniu/pasta' },
  { title: 'Salată', image: '/meniu/Salat.png', link: '/meniu/salata' },
  { title: 'Supe', image: '/meniu/Soup.png', link: '/meniu/supe' },
];

const Meniu = () => {
  const [sectionShow, setSectionShow] = useState<number>(0);
  const totalItems = MENU_ITEMS.length;

  useGSAP(() => {
    gsap.from('.sectiune', {
      y: 400,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'expo.out',
    });
  }, []);

  const changeSection = (step: number) => {
    setSectionShow((prev) => {
      const next = prev + step;
      if (next >= totalItems) return 0;
      if (next < 0) return totalItems - 1;
      return next;
    });
  };

  const getOrder = (index: number) => {
    let diff = index - sectionShow;
    if (diff === 5) diff = -1;
    if (diff === -5) diff = 1;
    return diff;
  };

  const isCardVisible = (index: number) => {
    const prev = (sectionShow - 1 + totalItems) % totalItems;
    const next = (sectionShow + 1) % totalItems;
    return index === sectionShow || index === prev || index === next;
  };

  return (
    <section className="relative col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]">
    
      <button onClick={() => changeSection(-1)}>
        <Image
          src="/meniu/icons8-freccia-50.png"
          width={40}
          height={40}
          alt="Săgeată stânga"
          className="absolute left-3 sm:left-5 md:left-7 lg:left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        />
      </button>

      <button onClick={() => changeSection(1)}>
        <Image
          src="/meniu/icons8-arrow-50.png"
          width={40}
          height={40}
          alt="Săgeată dreapta"
          className="absolute right-3 sm:right-5 md:right-7 lg:right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        />
      </button>

      <div className="sectiune flex-center w-full">
        {MENU_ITEMS.map((item, index) => (
          <MenuCard
            key={item.title}
            title={item.title}
            image={item.image}
            link={item.link}
            order={getOrder(index)}
            isActive={sectionShow === index}
            isVisible={isCardVisible(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Meniu;