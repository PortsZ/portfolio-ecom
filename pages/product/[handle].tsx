import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../../src/components";
import ProductDescription from "../../src/components/ProductDescription";
import products from "../../src/data/productsApi";
import { useRouter, } from "next/router";
import ImageSlider from "../../src/components/ImageSlider";



function Loading(){
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const handleStart = (url: any) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: any) => (url === router.asPath) && setTimeout(()=>{setLoading(false)},100);
    
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
    router.events.off('routeChangeComplete', handleComplete)
    router.events.off('routeChangeError', handleComplete)
    }
  })
  return  (
    <div className="flex min-h-screen flex-col items-center w-full bg-primary  py-2 ">
        <div className="flex min-h-screen flex-col items-center w-full bg-primary  py-2"></div>
        <span className="text-orange-500">SHIT FUCK</span>
    </div>
  )
}



function getRouterId() {
  const router = useRouter();
  const { id } = router.query;
  return id as string;
}

const productPage = () => {

  const router = useRouter();
  if (!router.isReady) return (<><Loading/></>)
  const id = getRouterId();
  const idIndex = parseInt(id);
  const item = products[idIndex];
  const image1 = item.image1Src;
  const image2 = item.image2Src;
  const image3 = item.image3Src;

  const images = [
    image1, image2, image3
  ]
  
  return (
    <section
      className="text-gray-100 flex min-h-screen flex-col items-center w-full 
    bg-primary xl:px-16 md:px-16 py-2 body-font "
    >
      

      {/* NAVBARprod */}

      <div className="bg-primary w-full overflow-hidden text-white">
        <div className=" sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1600px] w-full">
            <Navbar />
          </div>
        </div>
      </div>

      {/* NAVBARprod */}

      <div className=" px-4 w-full xl:max-w-[1600px] py-24 mx-auto">
        <div className="w-full flex xl:flex-row md:flex-row  flex-col">
          <ImageSlider image={images}/>
          
          

          <div className="lg:w-1/3 xl:w-1/3 3xl:text-4xl md:ml-5 lg:py-6 mt-6 lg:mt-0 ">
            <div className="bg-orange-gradient p-4 rounded-3xl">
              <ProductDescription product={item} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-gradient w-full rounded-3xl p-10 m-6 
                      transition-colors duration-[500ms] ease-out hover:ease-in 
                      border-solid border-2 border-[#00040f] hover:border-sky-200">

        <main className="flex w-full flex-1 flex-col items-center justify-center  text-center">
          <h1 className="text-6xl text-white font-bold">
            <Footer />
          </h1>
        </main>
      </div>
      
    </section>
  );
};

export default productPage;
