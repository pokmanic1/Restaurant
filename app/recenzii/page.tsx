'use client';

import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from 'gsap/src/SplitText';

const Recenzii = () => {
  const [nume, setNume] = useState('');
  const [titlu, setTitlu] = useState('');
  const [nota, setNota] = useState('5');
  const [recenzie, setRecenzie] = useState('');

  const [erornume, setErornume] = useState('');
  const [erorTitlu, setErorTitlu] = useState('');
  const [erorRecenzie, setErorRecenzie] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errGeneral, setErrGeneral] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useGSAP(() => {
    const title = new SplitText('.title', { type: 'words, chars' });
    const tl = gsap.timeline();

    tl.from(title.chars, {
      yPercent: 100,
      autoAlpha: 0,
      ease: "expo.out",
      stagger: 0.03
    })
      .from('.form-card', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "expo.out",
      }, "-=0.2")
      .from('.field-group', {
        y: 20,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.4")
      .fromTo('.buton',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          clearProps: "transform"
        },
        "-=0.2"
      );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMsg('')
    setErrGeneral('')




    const TRecenzii = 1000 * 60 * 60 * 24 * 3;
    const ultimaSalvare = JSON.parse(localStorage.getItem('LimitaTrimitereRecenzii') || 'null');

    if (ultimaSalvare && (Date.now() - ultimaSalvare < TRecenzii)) {
      const timpRamasMilisecunde = TRecenzii - (Date.now() - ultimaSalvare);
      const zileRamase = Math.ceil(timpRamasMilisecunde / (1000 * 60 * 60 * 24));

      setErrGeneral(`Poți trimite o nouă recenzie peste ${zileRamase} ${zileRamase === 1 ? 'zi' : 'zile'}.`);
      return;
    }



    let areErori = false;
    if (!titlu ) { setErorTitlu('Câmpul "titlu" e obligatoriu'); areErori = true; } else setErorTitlu('');
    if (titlu.length<5) { setErorTitlu('Câmpul "titlu" trebuie sa aiba macar 5 litere'); areErori = true; } else setErorTitlu('');
    if (!recenzie) { setErorRecenzie('Câmpul "recenzie" e obligatoriu'); areErori = true; } else setErorRecenzie('');
    if (recenzie.length<30) { setErorRecenzie('Câmpul "recenzie" trebuie sa aiba macar 30 de caractere'); areErori = true; } else setErorRecenzie('');
    if (areErori) return;





    setIsSubmitting(true);
    try {
      const res = await fetch('/api/recenzie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nume, titlu, nota, recenzie }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrGeneral(data.message);
        throw new Error(data.message || 'Eroare la trimiterea recenziei');
      }



      setNume(''); setTitlu(''); setNota('5'); setRecenzie('');
      setSuccessMsg('Recenzie a fost trimisă cu succes!');




      localStorage.setItem('LimitaTrimitereRecenzii', JSON.stringify(Date.now()));
      console.log('am salvat in consola data de azi ', Date.now())




    } catch (err) {
      console.error(err);
      setErrGeneral('Eroare la trimtere');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]'>
      <div className='col-center w-full'>
        <h1 className='title text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria my-auto mb-6'>
          Recenzii
        </h1>
        <div className='form-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 max-w-[1200px] w-[90%] md:w-[50%] shadow-2xl text-white'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 text-white'>

            <div className='field-group flex flex-col gap-1.5 w-full'>
              <label htmlFor='nume' className='text-sm font-medium text-white/90'>
                Numele
              </label>
              <input
                type='text'
                id='nume'
                placeholder=''
                value={nume}
                onChange={(e) => setNume(e.target.value)}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 focus:outline-none transition-colors duration-300 ${erornume ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-white/30 focus:bg-white/10'
                  }`}
              />
              {erornume && <p className='text-red-400 text-sm mt-0.5'>{erornume}</p>}
            </div>

            <div className='field-group flex flex-col gap-1.5 w-full'>
              <label htmlFor='titlu' className='text-sm font-medium text-white/90'>
                Titlu Recenzie
              </label>
              <input
                type='text'
                id='titlu'
                placeholder=''
                value={titlu}
                onChange={(e) => setTitlu(e.target.value)}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 focus:outline-none transition-colors duration-300 ${erorTitlu ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-white/30 focus:bg-white/10'
                  }`}
              />
              {erorTitlu && <p className='text-red-400 text-sm mt-0.5'>{erorTitlu}</p>}
            </div>

            <div className='field-group flex flex-col gap-1.5 w-full'>
              <label htmlFor='nota' className='text-sm font-medium text-white/90'>
                Notă (1 - 5)
              </label>
              <select
                id='nota'
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                className='w-full p-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-white/30 text-white focus:outline-none transition-colors duration-300 cursor-pointer'
              >
                <option value='5'>5 ★ - Excelent</option>
                <option value='4'>4 ★ - Foarte bine</option>
                <option value='3'>3 ★ - Mediu</option>
                <option value='2'>2 ★ - Slab</option>
                <option value='1'>1 ★ - Foarte slab</option>
              </select>
            </div>

            <div className='field-group flex flex-col gap-1.5 w-full'>
              <label htmlFor='recenzie' className='text-sm font-medium text-white/90'>
                Recenzia ta
              </label>
              <textarea
                id='recenzie'
                rows={4}
                placeholder='Scrie părerea ta aici...'
                value={recenzie}
                onChange={(e) => setRecenzie(e.target.value)}
                className={`relative   w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 focus:outline-none transition-colors duration-300 resize-none ${erorRecenzie ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-white/30 focus:bg-white/10'
                  }`}
              />
              <div className="absolute text-gray-300  text-[10px] md:text-[12px] bottom-1 right-3 ">{recenzie.length}/30</div>
            </div>
              {erorRecenzie && <p className='text-red-400 text-sm mt-[-10px]'>{erorRecenzie}</p>}

            {successMsg && <p className='text-green-400 text-center text-sm font-medium'>{successMsg}</p>}
            {errGeneral && <p className='text-red-400 text-center text-sm font-medium'>{errGeneral}</p>}

            <button
              type='submit'
              disabled={isSubmitting}
              className='buton flex-center mt-2 w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 shadow-lg disabled:opacity-50 cursor-pointer'
            >
              {isSubmitting ? 'Se trimite...' : 'Trimite Recenzia'}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Recenzii;