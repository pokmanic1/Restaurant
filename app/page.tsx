'use client'
import Image from "next/image";
import { BlueButon, WhiteButon } from "@/components/Buton";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

export default function Home() {

  useGSAP(() => {
    const title = new SplitText('.title', { type: 'chars' });

    gsap.from(title.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06
    })



  }, [])


  return (
    <>
      <section id='hero'
        className="relative flex flex-col items-center justify-center md:justify-between p-6 sm:p-10 md:p-14 w-full min-w-[375px] min-h-[95dvh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/restaurants 1.png')" }}
      >
        <div className="line1 hidden md:block absolute top-10 left-10 w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] border-l border-t border-gray-200/60 pointer-events-none"></div>
        <div className="line2 hidden md:block absolute bottom-10 left-10 w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] border-l border-b border-gray-200/60 pointer-events-none"></div>

        <div className="md:m-auto text-center z-10">
          <h1 className="title text-white text-5xl sm:text-7xl md:text-8xl font-serif-inria tracking-wide drop-shadow-md">
            Loughi
          </h1>
        </div>

        <div className="w-full hidden md:flex flex-col md:flex-row items-center md:items-end md:justify-between gap-8 z-10 mt-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm md:max-w-xs lg:max-w-sm">
            <h2 className="font-serif-playfair text-white text-lg sm:text-xl lg:text-2xl mb-3 drop-shadow">
              Transformăm masa într-o experiență de neuitat.
            </h2>
            <BlueButon link="/meniu" continut="Vezi meniu" />
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-sm md:max-w-xs lg:max-w-sm md:ml-auto">
            <h3 className="font-serif-playfair text-white text-lg sm:text-xl lg:text-2xl mb-3 drop-shadow">
              Servim mai mult decât simplă mâncare
            </h3>
            <WhiteButon link="/programari" continut="Programează-te" />
          </div>
        </div>

        <div className="w-full md:hidden flex flex-col md:flex-row items-center md:items-end md:justify-between gap-8 z-10 mt-5">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm md:max-w-xs lg:max-w-sm">
            <h2 className="font-serif-playfair text-white text-lg sm:text-md lg:text-xl mb-3 drop-shadow">
              Transformăm masa într-o experiență de neuitat.
            </h2>
            <div className="flex-center gap-5">
              <BlueButon link="/meniu" continut="Vezi meniu" />
              <WhiteButon link="/programari" continut="Programează-te" />
            </div>
          </div>
        </div>
      </section>

      <section className="col-center principal-gradient w-full min-w-[375px] px-6 py-20 sm:py-28 relative overflow-hidden">
        <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-3  sm:gap-5 md:gap-8 lg:gap-12  items-center">


          <div className="relative group mx-auto w-full max-w-[500px] md:max-w-none">

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/restaurants 1.png"
                alt="Interior Loughi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className=" flex flex-col items-start  text-center md:text-start text-white w-full p-6 sm:p-12 md:p-0">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-inria tracking-wide mb-6 w-full md:w-auto flex-center ">
              Despre noi
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              La Loughi transformăm masa într-o experiență de neuitat. Îmbinăm
              ingrediente proaspete, rețete atent lucrate și o atmosferă
              primitoare pentru fiecare vizită, fie că vii la o cină liniștită,
              fie la o sărbătoare alături de cei dragi.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 md:block hidden">
              Echipa noastră pune suflet în fiecare farfurie, de la preparatele
              clasice la cele mai noi creații din meniu. Treci pe la noi și
              hai să te convingem cu gustul.
            </p>
            <div className="w-full flex-center">
              <BlueButon link="/contact" continut="Contactează-ne" />
            </div>
          </div>



        </div>
      </section>

      <section className="col-center principal-gradient w-full min-w-[375px] px-6 py-20 sm:py-28 relative">
        <div className="w-full max-w-[850px] rounded-3xl border border-white/15 bg-slate-900/40 backdrop-blur-xl p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/10 blur-3xl pointer-events-none"></div>



          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-inria text-white tracking-wide mb-4">
            Spune-ne cum a fost experiența ta
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-[580px] mx-auto">
            Ai fost de curând la Loughi? Feedback-ul tău ne ajută să fim mai
            buni în fiecare zi. Lasă-ne o recenzie și împărtășește-ne impresiile
            tale.
          </p>

          <div className="flex justify-center">
            <WhiteButon link="/recenzii" continut="Lasă o recenzie" />
          </div>
        </div>
      </section>
    </>
  );
}