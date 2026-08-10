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
        <div className='col-center bg-[#161616] border border-gray-700 rounded-lg py-6 px-6 max-w-[1400px] w-full md:w-[50%] shadow-xl'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 text-white'>

            {/* nume */}
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='nume' className='text-sm font-medium text-gray-300'>
                Numele
              </label>
              <input
                type='text'
                id='nume'
                placeholder=''
                value={nume}
                onChange={(e) => setNume(e.target.value)}
                className={`w-full p-3 rounded bg-[#222222] border focus:outline-none transition ${
                  erornume ? 'border-red-600' : 'border-gray-600 focus:border-white'
                }`}
              />
              {erornume && <p className='text-red-500 text-sm'>{erornume}</p>}
            </div>

            {/* TITLU */}
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='titlu' className='text-sm font-medium text-gray-300'>
                Titlu Recenzie
              </label>
              <input
                type='text'
                id='titlu'
                placeholder=''
                value={titlu}
                onChange={(e) => setTitlu(e.target.value)}
                className={`w-full p-3 rounded bg-[#222222] border focus:outline-none transition ${
                  erorTitlu ? 'border-red-600' : 'border-gray-600 focus:border-white'
                }`}
              />
              {erorTitlu && <p className='text-red-500 text-sm'>{erorTitlu}</p>}
            </div>

            {/* NOTA */}
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='nota' className='text-sm font-medium text-gray-300'>
                Notă (1 - 5)
              </label>
              <select
                id='nota'
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                className='w-full p-3 rounded bg-[#222222] border border-gray-600 focus:border-white focus:outline-none transition cursor-pointer'
              >
                <option value='5'>5 ★ - Excelent</option>
                <option value='4'>4 ★ - Foarte bine</option>
                <option value='3'>3 ★ - Mediu</option>
                <option value='2'>2 ★ - Slab</option>
                <option value='1'>1 ★ - Foarte slab</option>
              </select>
            </div>

            {/* RECENZIE */}
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='recenzie' className='text-sm font-medium text-gray-300'>
                Recenzia ta
              </label>
              <textarea
                id='recenzie'
                rows={4}
                placeholder='Scrie părerea ta aici...'
                value={recenzie}
                onChange={(e) => setRecenzie(e.target.value)}
                className={`w-full p-3 rounded bg-[#222222] border focus:outline-none transition resize-none ${
                  erorRecenzie ? 'border-red-600' : 'border-gray-600 focus:border-white'
                }`}
              />
              {erorRecenzie && <p className='text-red-500 text-sm'>{erorRecenzie}</p>}
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='flex-center mt-2 w-full bg-white text-black font-semibold py-3 px-4 rounded hover:bg-gray-200 transition duration-200 disabled:opacity-50 cursor-pointer'
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