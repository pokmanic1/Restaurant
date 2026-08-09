'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    telefon: '',
    titlu: '',
    nota: '5',
    recenzie: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError]=useState('')
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ telefon: '', titlu: '', nota: '5', recenzie: '' });
      }
    } catch (error) {
      console.error('Eroare la trimiterea recenziei:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] py-[50px]'>
      <div className='col-center w-full'>
        <h1 className='text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria my-auto mb-6'>
          Recenzii
        </h1>
        <div className='col-center bg-[#161616] border border-gray-700 rounded-lg py-6 px-6 max-w-[1400px] w-full md:w-[50%] shadow-xl'>
          
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 text-white'>
            
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='telefon' className='text-sm font-medium text-gray-300'>
                Număr Telefon
              </label>
              <input
                type='tel'
                id='telefon'
                name='telefon'
                required
                placeholder='07xx xxx xxx'
                value={formData.telefon}
                onChange={handleChange}
                className='w-full p-3 rounded bg-[#222222] border border-gray-600 focus:border-white focus:outline-none transition'
              />
            </div>

            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='titlu' className='text-sm font-medium text-gray-300'>
                Titlu Recenzie
              </label>
              <input
                type='text'
                id='titlu'
                name='titlu'
                required
                placeholder='Ex: Servicii excelente!'
                value={formData.titlu}
                onChange={handleChange}
                className='w-full p-3 rounded bg-[#222222] border border-gray-600 focus:border-white focus:outline-none transition'
              />
            </div>

            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='nota' className='text-sm font-medium text-gray-300'>
                Notă (1 - 5)
              </label>
              <select
                id='nota'
                name='nota'
                value={formData.nota}
                onChange={handleChange}
                className='w-full p-3 rounded bg-[#222222] border border-gray-600 focus:border-white focus:outline-none transition cursor-pointer'
              >
                <option value='5'>5 ★ - Excelent</option>
                <option value='4'>4 ★ - Foarte bine</option>
                <option value='3'>3 ★ - Mediu</option>
                <option value='2'>2 ★ - Slab</option>
                <option value='1'>1 ★ - Foarte slab</option>
              </select>
            </div>

            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='recenzie' className='text-sm font-medium text-gray-300'>
                Recenzia ta
              </label>
              <textarea
                id='recenzie'
                name='recenzie'
                rows={4}
                required
                placeholder='Scrie părerea ta aici...'
                value={formData.recenzie}
                onChange={handleChange}
                className='w-full p-3 rounded bg-[#222222] border border-gray-600 focus:border-white focus:outline-none transition resize-none'
              />
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

export default Contact;