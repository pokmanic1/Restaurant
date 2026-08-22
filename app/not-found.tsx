'use client';

import React from 'react';
import Link from 'next/link';

const NotFound = () => {


  return (
    <section className='col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[15px] py-[50px] flex flex-col items-center justify-center text-white'>
      
      <h1 className='error-title text-center text-[80px] sm:text-[100px] md:text-[120px] font-serif-inria font-bold leading-none tracking-tight mb-2'>
        404
      </h1>

      <div className='error-card w-full max-w-[600px] rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 md:p-10 shadow-2xl flex flex-col items-center text-center'>
        
        <h2 className='text-2xl sm:text-3xl font-semibold text-white/90 mb-3'>
          Pagina nu a fost găsită
        </h2>
        
        <p className='text-slate-300 text-sm sm:text-base max-w-[420px] mb-8 leading-relaxed'>
          Ne pare rău, dar pagina pe care o cauți nu există, a fost mutată sau numele a fost schimbat.
        </p>

        <div className='error-btn'>
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-medium text-sm transition-all duration-300 hover:bg-white hover:text-slate-950 hover:shadow-lg active:scale-95"
          >
            Înapoi la pagina principală
          </Link>
        </div>

      </div>

    </section>
  );
};

export default NotFound;