
export default function Home() {
  return (
    <section className="relative col-center p-[50px] w-full min-h-[95dvh] "
      style={{ backgroundImage: "url('/restaurants 1.png')" }}>

      <div className="line1 hidden md:block absolute top-15 left-10 w-[150px] h-[150px] border-l border-t border-gray-200"></div>
      <div className="line2 hidden md:block absolute bottom-10 left-10  w-[150px] h-[150px] border-l border-b border-gray-200"></div>

      <div className="w-full h- flex flex-col">


        <h1 className="text-center text-white text-[80px] font-serif-inria my-auto ">Loughi </h1>
        <div className="text-white flex items-center justify-around mt-auto">


          <div>
            <h2>Transformăm masa într-o experiență de neuitat.</h2>

          </div>


          <div>
            <h3>Servim mai mult decât simplă mâncare</h3>

          </div>


        </div>


      </div>

    </section>
  );
}
