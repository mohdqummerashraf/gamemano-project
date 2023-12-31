import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
 import Image from 'next/image'
import { ProductInterface } from '../model/Product.types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Goldenstar from "@/app/utility/images/GoldenStar.png"


interface ProductType {
  data: Array<ProductInterface>
  loading: Boolean
}

const ProductSlider = ({ data, loading }: ProductType) => {
   const sliderRef = useRef<Slider>(null);

  const [screenSize, setScreenSize] = useState({
    width: undefined || 1035,
     
  });

 
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 
   
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window?.innerWidth,
         
      });
    };

    window?.addEventListener('resize', handleResize);

     return () => {
      window?.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <div className='grid grid-cols-12 absolute bottom-[-35%]'>
        <div
          className={screenSize.width<1030 ? 'hidden' : 'lg:col-span-3 xl:col-span-3 2xl:col-span-3 flex relative justify-end items-center top-[15px]'}>

          <svg
            onClick={() => sliderRef.current?.slickNext()}
            xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M23.6212 33.0694L14.1728 23.621L23.6212 14.1726L26.9282 17.4795L23.1488 21.2589H33.0696V25.9831H23.1488L26.9282 29.7624L23.6212 33.0694ZM23.6212 47.2419C26.8888 47.2419 29.9595 46.6215 32.8334 45.3806C35.7073 44.1397 38.2072 42.4571 40.3331 40.3328C42.4589 38.2069 44.1415 35.707 45.3809 32.8331C46.6202 29.9593 47.2406 26.8885 47.2422 23.621C47.2422 20.3534 46.6217 17.2827 45.3809 14.4088C44.14 11.5349 42.4574 9.03502 40.3331 6.90913C38.2072 4.78325 35.7073 3.10065 32.8334 1.86133C29.9595 0.622019 26.8888 0.00157473 23.6212 0C20.3537 0 17.2829 0.620444 14.409 1.86133C11.5352 3.10222 9.03527 4.78482 6.90939 6.90913C4.7835 9.03502 3.10012 11.5349 1.85923 14.4088C0.61834 17.2827 -0.00131989 20.3534 0.000255585 23.621C0.000255585 26.8885 0.620701 29.9593 1.86159 32.8331C3.10248 35.707 4.78508 38.2069 6.90939 40.3328C9.03527 42.4587 11.5352 44.1421 14.409 45.383C17.2829 46.6238 20.3537 47.2435 23.6212 47.2419ZM23.6212 42.5177C18.3459 42.5177 13.8776 40.6871 10.2163 37.0259C6.55508 33.3646 4.72445 28.8963 4.72445 23.621C4.72445 18.3456 6.55508 13.8773 10.2163 10.2161C13.8776 6.55482 18.3459 4.72419 23.6212 4.72419C28.8966 4.72419 33.3649 6.55482 37.0261 10.2161C40.6874 13.8773 42.518 18.3456 42.518 23.621C42.518 28.8963 40.6874 33.3646 37.0261 37.0259C33.3649 40.6871 28.8966 42.5177 23.6212 42.5177Z" fill="url(#paint0_linear_2409_1071)" />
            <defs>
              <linearGradient id="paint0_linear_2409_1071" x1="47.2422" y1="23.62" x2="0.000645984" y2="23.62" gradientUnits="userSpaceOnUse">
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


        </div>
        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-9'>
          <div className=''>
            <div className='mt-10'>
              <Slider {...settings} ref={sliderRef}>
                {data.map((item, ind) => (
                  <div
                  key={ind}
                  className='w-[90%] bg-[#E4E4E4] border-4 border-[#A8620A] m-auto p-[4%]'>
                    <div className='w-full flex justify-center'>
                      <Image
                        src={item.thumbnail}
                        height={150}
                        width={200}
                        alt="Picture of the author"
                        loading='lazy'
                        className='w-full h-[150px] object-contain'
                      />
                    </div>
                    <p className='text-[23px] font-poppins text-[#0A0A0A] font-[700]'>{item.category}</p>
                    <p className='text-[20px] font-poppins text-[#0A0A0A] font-[400]'>{item.title}</p>
                    <p className='text-[20px] font-poppins text-[#0A0A0A] font-[700]'>{item?.price || 0}</p>
                    <div className='flex'>
                      {new Array(Math.round(item?.rating || 0)).fill(0).map((item, ind) => (
                        <React.Fragment key={ind}>
                          <Image
                            src={Goldenstar}
                            width={20}
                            height={20}
                            alt='golden star'
                            loading='lazy'
                          />
                        </React.Fragment>
                      ))}
                      <p className='flex justify-center items-center mt-[6px] ml-[6px]'>({Math.round(item?.rating || 0)})</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#380D41] w-full absolute bottom-[-50%]  xs:col-span-12 sm:col-span-12 md:col-span-12 lg:hidden flex justify-center items-center'>
        <div>
          <svg
            onClick={() => sliderRef.current?.slickPrev()}
            xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M23.621 33.0694L14.1726 23.621L23.621 14.1726L26.9279 17.4795L23.1486 21.2589H33.0694V25.9831H23.1486L26.9279 29.7624L23.621 33.0694ZM23.621 47.2419C26.8885 47.2419 29.9593 46.6215 32.8332 45.3806C35.707 44.1397 38.2069 42.4571 40.3328 40.3328C42.4587 38.2069 44.1413 35.707 45.3806 32.8331C46.6199 29.9593 47.2404 26.8885 47.2419 23.621C47.2419 20.3534 46.6215 17.2827 45.3806 14.4088C44.1397 11.5349 42.4571 9.03502 40.3328 6.90913C38.2069 4.78325 35.707 3.10065 32.8332 1.86133C29.9593 0.622019 26.8885 0.00157473 23.621 0C20.3534 0 17.2827 0.620444 14.4088 1.86133C11.5349 3.10222 9.03503 4.78482 6.90914 6.90913C4.78326 9.03502 3.09987 11.5349 1.85898 14.4088C0.618095 17.2827 -0.00156403 20.3534 1.14441e-05 23.621C1.14441e-05 26.8885 0.620457 29.9593 1.86134 32.8331C3.10223 35.707 4.78483 38.2069 6.90914 40.3328C9.03503 42.4587 11.5349 44.1421 14.4088 45.383C17.2827 46.6238 20.3534 47.2435 23.621 47.2419ZM23.621 42.5177C18.3456 42.5177 13.8773 40.6871 10.2161 37.0259C6.55483 33.3646 4.72421 28.8963 4.72421 23.621C4.72421 18.3456 6.55483 13.8773 10.2161 10.2161C13.8773 6.55482 18.3456 4.72419 23.621 4.72419C28.8963 4.72419 33.3646 6.55482 37.0259 10.2161C40.6871 13.8773 42.5178 18.3456 42.5178 23.621C42.5178 28.8963 40.6871 33.3646 37.0259 37.0259C33.3646 40.6871 28.8963 42.5177 23.621 42.5177Z" fill="url(#paint1_linear_38_1863)" />
            <defs>
              <linearGradient id="paint0_linear_38_1863" x1="87" y1="23.62" x2="134.242" y2="23.62" gradientUnits="userSpaceOnUse">
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
        </div>
        <div>
          <svg
            onClick={() => sliderRef.current?.slickNext()}
            xmlns="http://www.w3.org/2000/svg" width="135" height="48" viewBox="0 0 135 48" fill="none">
            <path d="M110.621 33.0694L120.069 23.621L110.621 14.1726L107.314 17.4795L111.093 21.2589H101.173V25.9831H111.093L107.314 29.7624L110.621 33.0694ZM110.621 47.2419C107.353 47.2419 104.283 46.6215 101.409 45.3806C98.5349 44.1397 96.035 42.4571 93.9091 40.3328C91.7832 38.2069 90.1006 35.707 88.8613 32.8331C87.622 29.9593 87.0016 26.8885 87 23.621C87 20.3534 87.6204 17.2827 88.8613 14.4088C90.1022 11.5349 91.7848 9.03502 93.9091 6.90913C96.035 4.78325 98.5349 3.10065 101.409 1.86133C104.283 0.622019 107.353 0.00157473 110.621 0C113.889 0 116.959 0.620444 119.833 1.86133C122.707 3.10222 125.207 4.78482 127.333 6.90913C129.459 9.03502 131.142 11.5349 132.383 14.4088C133.624 17.2827 134.244 20.3534 134.242 23.621C134.242 26.8885 133.621 29.9593 132.381 32.8331C131.14 35.707 129.457 38.2069 127.333 40.3328C125.207 42.4587 122.707 44.1421 119.833 45.383C116.959 46.6238 113.889 47.2435 110.621 47.2419ZM110.621 42.5177C115.896 42.5177 120.365 40.6871 124.026 37.0259C127.687 33.3646 129.518 28.8963 129.518 23.621C129.518 18.3456 127.687 13.8773 124.026 10.2161C120.365 6.55482 115.896 4.72419 110.621 4.72419C105.346 4.72419 100.877 6.55482 97.2161 10.2161C93.5548 13.8773 91.7242 18.3456 91.7242 23.621C91.7242 28.8963 93.5548 33.3646 97.2161 37.0259C100.877 40.6871 105.346 42.5177 110.621 42.5177Z" fill="url(#paint0_linear_38_1863)" />

            <defs>
              <linearGradient id="paint1_linear_38_1863" x1="47.2419" y1="23.62" x2="0.000401844" y2="23.62" gradientUnits="userSpaceOnUse">
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
        </div>

      </div>
    </>
  )
}

export default ProductSlider