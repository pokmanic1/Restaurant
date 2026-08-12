import React from 'react'

const Programari = () => {
  return (
    <section className='flex flex-col items-center justify-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[5px] '>
      <h1 className='text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria mb-6 '>
        Programari
      </h1>

      <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 max-w-[1200px] w-[90%] md:w-[50%] shadow-2xl text-white'>


        <form action="" className='w-full flex flex-col gap-5 text-white'>


          {/* nume */}
          <div className='flex flex-col gap-1.5 w-full'>
            <label htmlFor='nume' className='text-sm font-medium text-white/90'>
              Numele
            </label>
            <input
              type='text'
              id='nume'
              placeholder=''
              className={`w-full p-3 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-slate-400 focus:outline-none transition duration-300
                  }`} />
          </div>



          {/* telefon */}
          <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor="telefon" className='text-sm font-medium text-white'>Telefon</label>
            <input type="tel" name="" id="telefon"
              className='w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 focus:outline-none transition duration-300' />
          </div>



          <div className="grid w-full grid-cols-3 gap-5">

            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="data" className='text-sm font-medium text-white'>Data</label>
              <input type="date" name="" id="telefon"
                className='w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 focus:outline-none transition duration-300' />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="persoane" className='text-sm font-medium text-white'>Numar de persoane</label>
              <input type="number" name="" id="persoane" min={1} max={20}
                className='w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 focus:outline-none transition duration-300' />
            </div>


            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="ora" className='text-sm font-medium text-white'>Ora</label>
              <input type="text" name="" id="ora"
                className='w-full p-3 rounded-xl bg-white/5 border backdrop-blur-xl text-white placeholder-slate-400 focus:outline-none transition duration-300' />
            </div>


          </div>

          <button
            type='submit'

            className='flex-center mt-2 w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 cursor-pointer'
          >
            Trimite Recenzia
          </button>
        </form>


      </div>


    </section>)
}

export default Programari