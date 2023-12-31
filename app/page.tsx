'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TitleBar from './component/Titlebar';
import ProductCard from './component/ProductCard';
import { ProductInterface } from './component/Product.types';
import Homebanner from "@/app/utility/images/HomePageBanner.png";
import ProductSlider from './component/ProductSlider';
import Link from 'next/link';


export default function Home() {
  const [productData, setProductData] = useState<ProductInterface[]>([]);
  const [LoadingData, setLoadingData] = useState<Boolean>(false);
  const fetchApi = async () => {
    setLoadingData(true);
    try {
      const fetchData = await fetch("https://dummyjson.com/products");
      const response = await fetchData.json();
      setProductData(response?.products);
      setLoadingData(false);
    } catch (error) {
      setLoadingData(false);
      console.log(error);
    } finally {
      setLoadingData(false);
    }
  }

  useEffect(() => {
    fetchApi()
  }, []);
  return (
    <>
      {LoadingData ?
        <h2>Loading...</h2>
        :
        <>
          <div className='relative'>
            <TitleBar image={Homebanner.src} title='Logo Electronics' tagline='The techies you love' button='View All Products' bannerHeight={550} />
            <ProductSlider data={productData.slice(0,10)} loading={LoadingData} />
          </div>
          <p className='max-xs:text-[30px] max-sm:text-[30px]  text-[#F903AA] bg-[#380D41] text-center text-[40px] font-routhem  max-sm:pt-[85%] md:pt-[40%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[15%]'>{'Products'}</p>

          <ProductCard data={productData.slice(0, 15)} loading={LoadingData} />
          <div className='bg-[#380D41] w-full pb-[10%]'>
            <div className='w-[80%] sm:[30%] md:w-[30%] lg:w-[25%] xl:w-[25%] mx-auto py-[5%]'>
              <Link className='flex border-[3px] border-[#920AA8] rounded-[40px] px-[20px] py-[15px] mr-[3%]'
                href='/product'
              >
                <p className='text-white text-center text-[18px] font-[400] font-routhem flex justify-center items-center mr-[10px]'>View All Products</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M14.1572 23.7068C14.1572 24.3722 14.3827 24.9303 14.8336 25.3812C15.2829 25.8306 15.8403 26.0552 16.5057 26.0552L24.0207 26.0552L21.9071 28.1688C21.4766 28.5994 21.2613 29.1474 21.2613 29.8128C21.2613 30.4782 21.4766 31.0261 21.9071 31.4567C22.3377 31.8872 22.8856 32.1025 23.551 32.1025C24.2164 32.1025 24.7644 31.8872 25.195 31.4567L31.301 25.3507C31.5358 25.1158 31.7025 24.8614 31.8012 24.5874C31.8983 24.3135 31.9468 24.0199 31.9468 23.7068C31.9468 23.3936 31.8983 23.1001 31.8012 22.8261C31.7025 22.5521 31.5358 22.2977 31.301 22.0629L25.195 15.9569C24.7644 15.5263 24.2164 15.311 23.551 15.311C22.8856 15.311 22.3377 15.5263 21.9071 15.9569C21.4766 16.3874 21.2613 16.9354 21.2613 17.6008C21.2613 18.2662 21.4766 18.8141 21.9071 19.2447L24.0207 21.3583L16.5057 21.3583C15.8403 21.3583 15.2829 21.5838 14.8336 22.0347C14.3827 22.484 14.1572 23.0414 14.1572 23.7068ZM0.0664396 23.7068C0.0664397 20.4581 0.683303 17.4051 1.91703 14.5478C3.14918 11.6905 4.82207 9.20503 6.93568 7.09141C9.0493 4.9778 11.5348 3.30491 14.392 2.07275C17.2493 0.839029 20.3023 0.222167 23.551 0.222167C26.7997 0.222167 29.8527 0.83903 32.71 2.07275C35.5673 3.30491 38.0528 4.9778 40.1664 7.09142C42.28 9.20503 43.9537 11.6905 45.1874 14.5478C46.4196 17.4051 47.0356 20.4581 47.0356 23.7068C47.0356 26.9555 46.4196 30.0085 45.1874 32.8658C43.9537 35.7231 42.28 38.2085 40.1664 40.3221C38.0528 42.4357 35.5673 44.1086 32.71 45.3408C29.8527 46.5745 26.7997 47.1914 23.551 47.1914C20.3023 47.1914 17.2493 46.5745 14.392 45.3408C11.5348 44.1086 9.0493 42.4357 6.93568 40.3221C4.82207 38.2085 3.14918 35.7231 1.91703 32.8658C0.683303 30.0085 0.0664394 26.9555 0.0664396 23.7068ZM4.76336 23.7068C4.76336 28.9125 6.59281 33.3456 10.2517 37.0061C13.9122 40.665 18.3453 42.4945 23.551 42.4945C28.7568 42.4945 33.1899 40.665 36.8504 37.0061C40.5093 33.3456 42.3387 28.9125 42.3387 23.7068C42.3387 18.501 40.5093 14.0687 36.8504 10.4098C33.1899 6.74932 28.7568 4.91909 23.551 4.91909C18.3453 4.91909 13.9122 6.74932 10.2517 10.4098C6.59281 14.0687 4.76336 18.501 4.76336 23.7068Z" fill="url(#paint0_linear_2409_483)" />
                  <defs>
                    <linearGradient id="paint0_linear_2409_483" x1="23.552" y1="0.222167" x2="23.552" y2="47.191" gradientUnits="userSpaceOnUse">
                      <stop offset="0.02" stop-color="#920AA8" />
                      <stop offset="0.2" stop-color="#E019CC" />
                      <stop offset="0.48" stop-color="#FF81E3" />
                      <stop offset="0.52" stop-color="#FC75D6" />
                      <stop offset="0.6" stop-color="#DF55F6" />
                      <stop offset="0.71" stop-color="#E822EC" />
                      <stop offset="0.75" stop-color="#E80F91" />
                      <stop offset="0.8125" stop-color="#EE19D8" />
                      <stop offset="1" stop-color="#FE3873" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>

          </div>
        </>
      }
    </>
  )
}
