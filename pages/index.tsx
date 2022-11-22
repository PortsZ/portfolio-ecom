import type { NextPage } from "next";
import Head from "next/head";
import { Navbar, Hero, Stats, MyWork, Cta, Footer } from "../src/components";



const Home: NextPage = () => {

  return (

    <div className="flex min-h-screen flex-col items-center w-full bg-primary  py-2">
      <Head>
        <title>PortsZFolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}

      <div className="bg-primary w-full overflow-hidden text-white">
        <div className=" sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1600px] w-full">
            <Navbar />
          </div>
        </div>
      </div>

      {/* NAVBAR */}

      {/* HERO SECTION */}

      <div
        id="home"
        className="bg-discount-gradient  transition-colors 
                  duration-[500ms] ease-out hover:ease-in 
                  border-solid border-2 border-[#00040f] hover:border-sky-200 
                  w-11/12 rounded-3xl px-8 m-6"
      >
        <main className="flex w-full items-center  justify-center text-center">
          <Hero />
        </main>
      </div>
      {/* HERO SECTION */}

      <div
        id="Projects"
        className="bg-gray-gradient border- w-11/12 rounded-3xl p-16 m-6 
                  transition-colors duration-[500ms] ease-out hover:ease-in 
                  border-solid border-2 border-[#00040f] hover:border-sky-200 
      "
      >
        <main
          className="flex w-full flex-1 flex-col items-center justify-center 
        xl:px-4 md:px-3 sm:px-1 text-center"
        >
          <h1 className=" text-white ">
            <MyWork />
            <Cta />
          </h1>
        </main>
      </div>

      <div className="bg-gray-gradient  w-11/12 rounded-3xl px-16 py-14 m-6 
                     transition-colors duration-[500ms] ease-out hover:ease-in 
                     border-solid border-2 border-[#00040f] hover:border-sky-200
      ">
        <main className="flex w-full flex-1 flex-col text-center">
          <h1 className="text-6xl text-white font-bold">
            {/* <Stats /> */}
            <Footer />
          </h1>
        </main>
      </div>

      {/* End of DOM */}
    </div>
  );
};

export default Home;
