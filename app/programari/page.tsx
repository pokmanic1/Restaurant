'use client';

import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from 'gsap/src/SplitText';

const timeOptions = [
  "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00"
];

const initialFormState = {
  nume: '',
  telefon: '',
  data: '',
  persoane: '',
  ora: '',
  locatia: ''
};

const REGEX_TELEFON = /^(\+373|0)[67]\d{7}$/;

function esteTelefonValid(telefon: string): boolean {
  const curatat = telefon.replace(/[\s-]/g, '');
  return REGEX_TELEFON.test(curatat);
}



const Programari = () => {

  useGSAP(() => {
    const title = new SplitText('.title', { type: 'words, chars' });
    const tl = gsap.timeline();

    tl.from(title.chars, {
      yPercent: 100,
      autoAlpha: 0,
      ease: "expo.out",
      stagger: 0.03
    })
      .from('.section', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "expo.out",
      }, "-=0.2")
      .from(['.div1', '.div2', '.div3', '.div4'], {
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

  const [error, setError] = useState({
    numeErr: '',
    telefonErr: '',
    dataErr: '',
    persoaneErr: '',
    oraErr: '',
    locatiaErr: ''
  });

  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    setSuccessMsg('');

    let valid = true;
    const newErrors = {
      numeErr: '',
      telefonErr: '',
      dataErr: '',
      persoaneErr: '',
      oraErr: '',
      locatiaErr: ''
    };

    if (!form.nume.trim()) {
      newErrors.numeErr = 'Numele este obligatoriu.';
      valid = false;
    }
    if (!form.telefon.trim()) {
      newErrors.telefonErr = 'Numărul de telefon este obligatoriu.';
      valid = false;
    } else if (!esteTelefonValid(form.telefon)) {
      newErrors.telefonErr = 'Numărul de telefon nu este valid. Format: 06..... sau +373.......';
      valid = false;
    }
    if (!form.data) {
      newErrors.dataErr = 'Data este obligatorie.';
      valid = false;
    }
    if (!form.persoane) {
      newErrors.persoaneErr = 'Numărul de persoane este obligatoriu.';
      valid = false;
    }
    if (!form.ora) {
      newErrors.oraErr = 'Ora este obligatorie.';
      valid = false;
    }
    if (!form.locatia) {
      newErrors.locatiaErr = 'Locația este obligatorie.';
      valid = false;
    }

    setError(newErrors);

    if (!valid) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/programari', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nume: form.nume,
          telefon: form.telefon,
          data: form.data,
          persoane: form.persoane,
          ora: form.ora,
          locatie: form.locatia
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Eroare la trimiterea programării');
      }

      setSuccessMsg('Programarea a fost trimisă cu succes!');
      setForm(initialFormState);
    } catch (err: any) {
      console.error(err);
      setServerError(err.message || 'A apărut o eroare neașteptată.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='flex flex-col items-center justify-center gap-6 principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]'>
      <h1 className='title text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria'>
        Programări
      </h1>

      <div className='section rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 max-w-[1200px] w-[90%] md:w-[50%] shadow-2xl text-white'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 text-white'>

          <div className='div1 flex flex-col gap-1.5 w-full'>
            <label htmlFor='nume' className='text-sm font-medium text-white/90'>
              Numele
            </label>
            <input
              type='text'
              id='nume'
              name='nume'
              value={form.nume}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 ${error.numeErr ? "border-red-500/80 focus:border-red-500" : 'border-white/10 focus:border-white/30 focus:bg-white/10'} focus:outline-none transition-colors duration-300`}
            />
            {error.numeErr && <p className='text-red-400 text-sm mt-0.5'>{error.numeErr}</p>}
          </div>

          <div className="div2 flex flex-col gap-1.5 w-full">
            <label htmlFor="telefon" className='text-sm font-medium text-white/90'>
              Telefon
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={form.telefon}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 ${error.telefonErr ? "border-red-500/80 focus:border-red-500" : 'border-white/10 focus:border-white/30 focus:bg-white/10'} focus:outline-none transition-colors duration-300`}
            />
            {error.telefonErr && <p className='text-red-400 text-sm mt-0.5'>{error.telefonErr}</p>}
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="div3 flex flex-col gap-1.5 w-full">
              <label htmlFor="data" className='text-sm font-medium text-white/90'>
                Data
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={form.data}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 ${error.dataErr ? "border-red-500/80 focus:border-red-500" : 'border-white/10 focus:border-white/30 focus:bg-white/10'} focus:outline-none transition-colors duration-300`}
              />
              {error.dataErr && <p className='text-red-400 text-sm mt-0.5'>{error.dataErr}</p>}
            </div>

            <div className="div3 flex flex-col gap-1.5 w-full">
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
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 ${error.persoaneErr ? "border-red-500/80 focus:border-red-500" : 'border-white/10 focus:border-white/30 focus:bg-white/10'} focus:outline-none transition-colors duration-300`}
              />
              {error.persoaneErr && <p className='text-red-400 text-sm mt-0.5'>{error.persoaneErr}</p>}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="div4 flex flex-col gap-1.5 w-full">
              <label htmlFor="ora" className='text-sm font-medium text-white/90'>
                Ora
              </label>
              <select
                name="ora"
                id="ora"
                value={form.ora}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 ${error.oraErr ? "border-red-500/80 focus:border-red-500" : 'border-white/10 focus:border-white/30 focus:bg-white/10'} focus:outline-none transition-colors duration-300`}>
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Selectează ora
                </option>
                {timeOptions.map((time) => (
                  <option key={time} value={time} className="bg-slate-900 text-slate-400">
                    {time}
                  </option>
                ))}
              </select>
              {error.oraErr && <p className='text-red-400 text-sm mt-0.5'>{error.oraErr}</p>}
            </div>

            <div className="div4 flex flex-col gap-1.5 w-full">
              <label htmlFor="locatia" className='text-sm font-medium text-white/90'>
                Locația
              </label>
              <select
                name="locatia"
                id="locatia"
                value={form.locatia}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 ${error.locatiaErr ? "border-red-500/80 focus:border-red-500" : 'border-white/10 focus:border-white/30 focus:bg-white/10'} focus:outline-none transition-colors duration-300`}>
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Selectează locația
                </option>
                <option value="Înăuntru" className="bg-slate-900 text-slate-400">
                  Înăuntru
                </option>
                <option value="Afară" className="bg-slate-900 text-slate-400">
                  Afară
                </option>
              </select>
              {error.locatiaErr && <p className='text-red-400 text-sm mt-0.5'>{error.locatiaErr}</p>}
            </div>
          </div>

          {serverError && <p className='text-red-400 text-center text-sm font-medium'>{serverError}</p>}
          {successMsg && <p className='text-green-400 text-center text-sm font-medium'>{successMsg}</p>}

          <button
            type='submit'
            disabled={isSubmitting}
            className='buton flex justify-center items-center mt-2 w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
          >
            {isSubmitting ? 'Se trimite...' : 'Trimite Programarea'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Programari;