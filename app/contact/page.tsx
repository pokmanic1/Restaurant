'use client';

import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from 'gsap/src/SplitText';

const Contact = () => {
  useGSAP(() => {
    const title = new SplitText('.title', { type: 'words, chars' });
    const tl = gsap.timeline();

    tl.from(title.chars, {
      yPercent: 100,
      autoAlpha: 0,
      ease: "expo.out",
      
      stagger: 0.06
    })
    .from('.map-card', {
      x: -60,
      autoAlpha: 0,
      duration:1.5,
      ease: "expo.out",
    }, "-=0.2")
    .from('.info-card', {
      x: 60,
      autoAlpha: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power2.out",
      clearProps: "transform"
    }, "-=0.6");
  }, []);

  return (
    <section className='col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]'>
      <h1 className='title text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria my-auto mb-6'>
        Contact
      </h1>
      <div className='w-[80%] max-w-[1200px] gap-10 grid grid-cols-1 md:grid-cols-2 items-center'>
        
        <div className="map-card relative min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-2xl flex-center text-white/50 text-sm font-medium">
          <span>  
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52823.242480449946!2d28.160000625026832!3d45.90771685604771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65c95ca29ef7d%3A0x254c4e01d94d6250!2sCahul%2C%20Moldova!5e0!3m2!1sro!2sit!4v1786427709694!5m2!1sro!2sit"
              width="600"
              height="450"
              className='opacity-85'
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Maps - Cahul, Moldova"
            />
          </span>
        </div>

        <div className="p-6 grid grid-cols-1 gap-5">

          <div className="info-card group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
            <h3 className="text-xl font-semibold tracking-wide text-white/90 group-hover:text-white">Adresa</h3>
            <p className="mt-2 text-sm text-slate-300">Main Street 123, Block B</p>
            <p className="text-sm text-slate-400">Prague, Czech Republic</p>
          </div>

          <div className="info-card group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
            <h3 className="text-xl font-semibold tracking-wide text-white/90 group-hover:text-white">Social media</h3>
            <p className="mt-2 text-sm text-slate-300">@yourcompany_official</p>
            <p className="text-sm text-slate-400">Facebook • Instagram • LinkedIn</p>
          </div>

          <div className="info-card group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
            <h3 className="text-xl font-semibold tracking-wide text-white/90 group-hover:text-white">Telefon</h3>
            <p className="mt-2 text-sm text-slate-300">+420 123 456 789</p>
            <p className="text-sm text-slate-400">Mon - Fri: 8:00 - 17:00</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;