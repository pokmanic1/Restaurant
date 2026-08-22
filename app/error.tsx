'use client';

import React from 'react';
import Link from 'next/link';

const Error = () => {
  return (
    <section className="col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[15px] py-[50px] flex flex-col items-center justify-center text-white">
      
      <div className="w-full max-w-[450px] rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
        
        <h1 className="text-3xl sm:text-4xl font-serif-inria font-bold text-white/90 mb-3">
          Ceva nu a mers bine!
        </h1>
        
        <p className="text-slate-300 text-sm sm:text-base mb-8">
          A apărut o eroare neașteptată.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-medium text-sm transition-all duration-300 hover:bg-white hover:text-slate-950 hover:shadow-lg active:scale-95"
        >
          Înapoi acasă
        </Link>

      </div>

    </section>
  );
};

export default Error;