'use client'
import Image from 'next/image';
import * as React from 'react';
import headPhone from "@/app/utility/images/Headphone.png"

export interface IAppProps {
}

export function ProductCard (props: IAppProps) {
  return (
    <div className="grid grid-cols-12 bg-[#380D41] p-[5%]">
      {[1,2,3,4].map((item,ind)=>(
        <React.Fragment key={ind}> 
        <div className='xs:col-span-6 max-sm:col-span-6 max-md:col-span-4 max-lg:col-span-4 col-span-4 width-[90%] m-[5%] bg-[#FFFFFF] rounded-[15px] p-[3%]'>
            <div className='flex flex-row'>
              <p className='w-2/4 text-left'>RUBI-128K</p>
              <p className='w-2/4 text-right'>K</p>
            </div>
            <div className='w-full flex justify-center'>
            <Image 
            src={headPhone}
            height={200}
            alt="Picture of the author"
            className='w-full	'
            />
            </div>
            <p className='w-full text-center font-poppins font-normal color-[#000]  max-sm:text-l	 max-md:text-2xl text-3xl my-[1.6rem]'>Headphone-128K</p>
            <div className='flex flex-row bg-pink-900 rounded-3xl py-[15px] bg-button-bg'>
              <p className='w-full text-center font-poppins font-normal color-[#000] max-sm:text-md	 max-md:text-xl text-xl'>View</p>

            </div>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
}
