import Image from 'next/image'
import React from 'react'
import borderLine from "@/app/utility/images/BottomBorderLine.png"
 import logo from "@/app/utility/images/Logo.png";
import fbIcon from "@/app/utility/images/FacebookIcon.png";
import instaIcon from "@/app/utility/images/InstaIcon.png";
import twitterIcon from "@/app/utility/images/TwiiterIcon.png";
import ytIcon from "@/app/utility/images/YoutubeIcon.png";
import bottomBg from "@/app/utility/images/BottomBarBg.png";
import maskBg from "@/app/utility/images/MaskBg.png";
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
  return (
    <>
       
        
        <div
          style={{
            backgroundImage: `url(${bottomBg.src}), url(${maskBg.src})`,
             backgroundRepeat:'round' 
           }}
          className='grid grid-cols-12 p-[3%] relative'>
             
          <Image
            src={borderLine}
            className='w-full absolute bottom-[10%]'
            alt='border-line'
          />
        
          <div className='max-sm:col-span-12 max-md:col-span-4 max-lg:col-span-4 col-span-4'>
            <div>
              <Image
                src={logo}
                className='max-sm:w-[35%] max-md:w-[35%] max-lg:w-[35%]  w-[35%] mb-[5%]'
                alt='border-line'

              />
              <p className='w-[80%] text-justify text-white text-lg font-poppins font-normal tracking-[1.82px] leading-normal'>lOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
            </div>

          </div>

          <div className='xs:col-span-12 max-sm:col-span-12 max-md:col-span-4 max-lg:col-span-4 col-span-4'>
            <h2 className='text-center mb-[5%] font-poppins text-2xl bg-button-bg  text-transparent bg-clip-text font-bold'>USEFUL LINKS</h2>
            <ul className='text-center'>
              {
                listData.map((item, ind) => (
                  <React.Fragment key={ind}>
                    <li className='my-[2%] text-[#D4C9C9] font-poppins font-normal font-[400] uppercase'>{item?.text}</li>
                  </React.Fragment>
                ))
              }

            </ul>
          </div>
          <div className='xs:col-span-12 max-sm:col-span-12 max-md:col-span-4 max-lg:col-span-4 col-span-4 text-center'>
            <h2 className='text-[#fff] font-poppins font-normal font-bolder text-2xl tracking-[2.5px]'>FOLLOW US ON</h2>
            <div className='flex w-full justify-center my-[5%]'>
              {
                socialMediaIcon.map((item, ind) => (
                  <React.Fragment key={ind}>
                    <Image
                      src={item.imgUrl}
                      alt={item.name}
                      className='w-[50px] h-[40px] mx-[2%]'
                    />
                  </React.Fragment>
                ))
              }
            </div>
          </div>
           
        </div>
      
      <div className='w-full bg-[#380D41]'>
        <p className='text-white text-center font-poppins text-[17px] tracking-[1.87px] font-[400] leading-[116px]'>COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
      </div>
    </>
  )
}

export default Bottombar