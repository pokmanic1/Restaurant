import React from 'react';

const Loading = () => {
  return (
    <section className="col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[15px] py-[50px] flex flex-col items-center justify-center text-white">
      
      <div className="relative flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl">
        
        <div className="absolute w-24 h-24 bg-purple-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative w-14 h-14 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent " />
        </div>

        

      </div>

    </section>
  );
};

export default Loading;