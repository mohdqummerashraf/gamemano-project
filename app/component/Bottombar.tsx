'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
 import logo from "@/app/utility/images/Logo.png";
import fbIcon from "@/app/utility/images/FacebookIcon.png";
import instaIcon from "@/app/utility/images/InstaIcon.png";
import twitterIcon from "@/app/utility/images/TwiiterIcon.png";
import ytIcon from "@/app/utility/images/YoutubeIcon.png";
import bottomBg from "../../public/BottomBarBg.png";
import maskBg from "../../public/MaskBg.png";
import MobileMaskBg from "../utility/images/MobileBottomBg.png";
import BottomBgMobile from "../../public/BottomBgMobile.png";
import RocketLogo from "@/app/utility/images/RocketLogo.png"
 

 type Props = {}

const Bottombar = (props: Props) => {
  const listData = [{
    id: 1,
    text: 'Home'
  }, {
    id: 2,
    text: 'Product'
  }, {
    id: 3,
    text: 'About Us'
  }, {
    id: 4,
    text: 'Contact Us'
  }];

  const socialMediaIcon = [{
    id: 1,
    name: 'facebook',
    imgUrl: fbIcon
  },
  {
    id: 2,
    name: 'instagram',
    imgUrl: instaIcon
  },
  {
    id: 3,
    name: 'twitter',
    imgUrl: twitterIcon
  },
  {
    id: 4,
    name: 'youtube',
    imgUrl: ytIcon
  }
  ]

 
  const [screenSize, setScreenSize] = useState({
    width: undefined || 0,
     
  });

  
  useEffect(() => {
    if(typeof window !== 'undefined'){

    
    const handleResize = () => {
      setScreenSize({
        width: window?.innerWidth,
         
      });
    };

    window?.addEventListener('resize', handleResize);

     return () => {
      window?.removeEventListener('resize', handleResize);
    }
  }
  }, []);



   return (
    <>

      <div className='w-full bg-[#380D41] '>
        <div
          style={(screenSize.width)>768 ? {
            backgroundImage: `url(${bottomBg.src}), url(${maskBg.src})`,
            backgroundRepeat: 'round'
          } : {
            backgroundImage: `url(${BottomBgMobile.src}), url(${MobileMaskBg.src})`,
            backgroundRepeat: 'round', 
          }}
          className="grid grid-cols-12 px-[3%] relative lg:h-[550px] xl:h-[650px] py-[20%] bg-bottomBarBg bg-bottomBarMask bg-repeat-round">
          
          <Image
            src={RocketLogo}
            loading='lazy'
            alt='go-to-top'
            className='absolute top-[-6%] right-[12%] w-[60px] h-[90px] lg:w-[100px] lg:h-[100px] lg:top-[-8%] lg:right-[12%]'
          />

          <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
            <div className='w-full flex justify-center lg:justify-center'>
              <Image
                src={logo}
                loading='lazy'
                className='w-[35%] sm:w-[35%] md:w-[35%] lg:w-[35%] mb-[5%]'
                alt='border-line'

              />
            </div>
            <p className='mx-auto sm:mx-auto	md:mx-auto w-[80%] text-justify text-white text-lg font-poppins font-normal tracking-[1.82px] leading-normal'>lOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
          </div>
          <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4'>
            <h2 className='mt-[15%]	sm:mt-[15%]	md:mt-[5%] text-center mb-[5%] font-routhem text-2xl bg-button-bg  text-transparent bg-clip-text font-bold'>USEFUL LINKS</h2>
            <ul className='text-center'>
              {
                listData.map((item, ind) => (
                  <React.Fragment key={ind}>
                    <li className='my-[2%] text-[#D4C9C9] font-poppins font-normal font-[400] uppercase text-[23px]'>{item?.text}</li>
                  </React.Fragment>
                ))
              }

            </ul>
          </div>
          <div className='col-span-12 mt-[10%] sm:col-span-12 sm:mt-[10%] md:col-span-12 md:mt-[10%] lg:col-span-4 xl:col-span-4 text-center'>
            <h2 className='text-[#fff] font-routhem font-[500] font-normal font-bolder text-2xl tracking-[2.5px]'>FOLLOW US ON</h2>
            <div className='flex w-full justify-center my-[5%] justify-around	'>
              {
                socialMediaIcon.map((item, ind) => (
                  <React.Fragment key={ind}>
                    <Image
                      src={item.imgUrl}
                      alt={item.name}
                      className='w-[50px] h-[40px] mx-[2%]'
                      loading='lazy'
                    />
                  </React.Fragment>
                ))
              }
            </div>
          </div>

        </div>
      </div>
      <div className='w-full bg-[#380D41]'>
        <p className='max-xs:text-[12px]max-xs:tracking-[1px] max-xs:leading-[48px] max-sm:text-[12px] max-sm:tracking-[1px] max-sm:leading-[48px] text-[17px] tracking-[1.87px] leading-[118px] font-[400] text-white text-center font-poppins'>COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
      </div>
    </>
  )
}

export default Bottombar