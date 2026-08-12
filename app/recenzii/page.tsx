'use client';

import React, { useState } from 'react';

const Recenzii = () => {
  const [nume, setNume] = useState('');
  const [titlu, setTitlu] = useState('');
  const [nota, setNota] = useState('5');
  const [recenzie, setRecenzie] = useState('');

  const [erornume, setErornume] = useState('');
  const [erorTitlu, setErorTitlu] = useState('');
  const [erorRecenzie, setErorRecenzie] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let areErori = false;

    if (!titlu) {
      setErorTitlu('Câmpul "titlu" e obligatoriu');
      areErori = true;
    } else {
      setErorTitlu('');
    }

    if (!recenzie) {
      setErorRecenzie('Câmpul "recenzie" e obligatoriu');
      areErori = true;
    } else {
      setErorRecenzie('');
    }

    if (areErori) return;

    setIsSubmitting(true);
    setIsSubmitting(false);
  };

  return (
    <section className='col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]'>
      <div className='col-center w-full'>
        <h1 className='text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria my-auto mb-6'>
          Recenzii
        </h1>
        <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 max-w-[1200px] w-[90%] md:w-[50%] shadow-2xl text-white'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 text-white'>

            {/* nume */}
            <div className='flex flex-col gap-1.5 w-full'>
              <label htmlFor='nume' className='text-sm font-medium text-white/90'>
                Numele
              </label>
              <input
                type='text'
                id='nume'
                placeholder=''
                value={nume}
                onChange={(e) => setNume(e.target.value)}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 focus:outline-none transition duration-300 ${erornume ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-white/30 focus:bg-white/10'
                  }`}
              />
              {erornume && <p className='text-red-400 text-sm mt-0.5'>{erornume}</p>}
            </div>

            {/* TITLU */}
            <div className='flex flex-col gap-1.5 w-full'>
              <label htmlFor='titlu' className='text-sm font-medium text-white/90'>
                Titlu Recenzie
              </label>
              <input
                type='text'
                id='titlu'
                placeholder=''
                value={titlu}
                onChange={(e) => setTitlu(e.target.value)}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 focus:outline-none transition duration-300 ${erorTitlu ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-white/30 focus:bg-white/10'
                  }`}
              />
              {erorTitlu && <p className='text-red-400 text-sm mt-0.5'>{erorTitlu}</p>}
            </div>

            {/* NOTA */}
            <div className='flex flex-col gap-1.5 w-full'>
              <label htmlFor='nota' className='text-sm font-medium text-white/90'>
                Notă (1 - 5)
              </label>
              <select
                id='nota'
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                className='w-full p-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-white/30 text-white focus:outline-none transition duration-300 cursor-pointer'
              >
                <option value='5'>5 ★ - Excelent</option>
                <option value='4'>4 ★ - Foarte bine</option>
                <option value='3'>3 ★ - Mediu</option>
                <option value='2'>2 ★ - Slab</option>
                <option value='1'>1 ★ - Foarte slab</option>
              </select>
            </div>

            {/* RECENZIE */}
            <div className='flex flex-col gap-1.5 w-full'>
              <label htmlFor='recenzie' className='text-sm font-medium text-white/90'>
                Recenzia ta
              </label>
              <textarea
                id='recenzie'
                rows={4}
                placeholder='Scrie părerea ta aici...'
                value={recenzie}
                onChange={(e) => setRecenzie(e.target.value)}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 focus:outline-none transition duration-300 resize-none ${erorRecenzie ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-white/30 focus:bg-white/10'
                  }`}
              />
              {erorRecenzie && <p className='text-red-400 text-sm mt-0.5'>{erorRecenzie}</p>}
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='flex-center mt-2 w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 cursor-pointer'
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