'use client';

import React, { useState } from 'react';

const Programari = () => {

  const timeOptions = [
    "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const [form, setForm] = useState({
    nume: '',
    telefon: '',
    data: '',
    persoane: '',
    ora: '',
    locatia: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', form);
  };

  return (
    <section className='flex flex-col items-center justify-center gap-6 principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]'>
      <h1 className='text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria'>
        Programări
      </h1>

      <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 max-w-[1200px] w-[90%] md:w-[50%] shadow-2xl text-white'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 text-white'>

          {/* Nume */}
          <div className='flex flex-col gap-1.5 w-full'>
            <label htmlFor='nume' className='text-sm font-medium text-white/90'>
              Numele
            </label>
            <input
              type='text'
              id='nume'
              name='nume'
              value={form.nume}
              onChange={handleChange}
              className='w-full p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300'
            />
          </div>

          {/* Telefon */}
          <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor="telefon" className='text-sm font-medium text-white/90'>
              Telefon
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={form.telefon}
              onChange={handleChange}
              className='w-full p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-white placeholder-slate-400 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300'
            />
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Data */}
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="data" className='text-sm font-medium text-white/90'>
                Data
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={form.data}
                onChange={handleChange}
                className='w-full p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-white placeholder-slate-400 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300'
              />
            </div>

            {/* Persoane */}
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="persoane" className='text-sm font-medium text-white/90'>
                Număr persoane
              </label>
              <input
                type="number"
                id="persoane"
                name="persoane"
                min={1}
                max={20}
                value={form.persoane}
                onChange={handleChange}
                className='w-full p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-white placeholder-slate-400 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300' />
            </div>

          </div>



          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Ora */}
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="ora" className='text-sm font-medium text-white/90'>
                Ora
              </label>
              <select
                name="ora"
                id="ora"
                value={form.ora}
                onChange={handleChange}
                className='w-full p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-white placeholder-slate-400 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300'>

                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Selecteaza ora
                </option>
                {timeOptions.map((time) => (
                  <option key={time} value={time} className="bg-slate-900 text-slate-400">
                    {time}
                  </option>
                ))}

              </select>

            </div>

          </div>




          <button
            type='submit'
            className='flex-center mt-2 w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 cursor-pointer'
          >
            Trimite Programarea
          </button>
        </form>
      </div>
    </section>
  );
};

export default Programari;