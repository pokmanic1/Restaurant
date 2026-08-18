import { BlueButon, WhiteButon } from "@/components/Buton";

export default function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center md:justify-between p-6 sm:p-10 md:p-14 w-full min-h-[95dvh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/restaurants 1.png')" }}
    >
      <div className="line1 hidden md:block absolute top-10 left-10 w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] border-l border-t border-gray-200/60 pointer-events-none"></div>
      <div className="line2 hidden md:block absolute bottom-10 left-10 w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] border-l border-b border-gray-200/60 pointer-events-none"></div>

      <div className="md:m-auto text-center z-10 ">
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-serif-inria tracking-wide drop-shadow-md">
          Loughi
        </h1>
      </div>


          
      <div className="w-full hidden md:flex flex-col md:flex-row items-center md:items-end md:justify-between gap-8 z-10 mt-auto">

        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm md:max-w-xs lg:max-w-sm">
          <h2 className="font-serif-playfair text-white text-lg sm:text-xl lg:text-2xl mb-3 drop-shadow">
            Transformăm masa într-o experiență de neuitat.
          </h2>
          <BlueButon link="/meniu" continut='Vezi meniu'> </BlueButon>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-sm md:max-w-xs lg:max-w-sm md:ml-auto">
          <h3 className="font-serif-playfair text-white text-lg sm:text-xl lg:text-2xl mb-3 drop-shadow">
            Servim mai mult decât simplă mâncare
          </h3>
          <WhiteButon link="/programari" continut='Programează-te' />
        </div>

      </div>


      <div className="w-full md:hidden flex flex-col md:flex-row items-center md:items-end md:justify-between gap-8 z-10 mt-5 ">

        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm md:max-w-xs lg:max-w-sm">
          <h2 className="font-serif-playfair text-white text-lg sm:text-md lg:text-xl mb-3 drop-shadow">
            Transformăm masa într-o experiență de neuitat.
          </h2>
          <div className="flex-center gap-5">
            <BlueButon link="/meniu" continut='Vezi meniu'> </BlueButon>
            <WhiteButon link="/programari" continut='Programează-te' />
          </div>
        </div>



      </div>






    </section>
  );
}