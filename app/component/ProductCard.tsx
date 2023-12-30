'use client'
import Image from 'next/image';
import * as React from 'react';
import headPhone from "@/app/utility/images/Headphone.png"
import { ProductInterface } from './Product.types';
import Link from 'next/link';
 
interface ProductType {
  data: Array<ProductInterface>
  loading: Boolean
}


const ProductCard =({data, loading}: ProductType) =>{

  return (
    <div className="grid grid-cols-12 bg-[#380D41] p-[5%]">
      {loading  ? 
      <h1 className='text-[40px]'>Loading......</h1>
      :
      data.map((item,ind)=>(
        <React.Fragment key={ind}> 
        <div className='min-h-[550px] xs:col-span-6 max-sm:col-span-6 max-md:col-span-4 max-lg:col-span-4 col-span-4 width-[90%] m-[5%] bg-[#FFFFFF] rounded-[15px] p-[3%] relative'>
            <div className='flex flex-row pb-[15px]'>
              <p className='w-[75%] text-left bg-golden-bg text-transparent bg-clip-text'>{item?.brand}</p>
              <p className='w-[25%] text-right'>K</p>
            </div>
            <div className='w-full flex justify-center'>
            <Image 
            src={item?.thumbnail}
            height={200}
            width={300}
            alt="Picture of the author"
            className='object-contain	w-[100%] h-[300px]'
            />
            </div>
            <p className='grow-1 w-full text-center font-poppins font-normal color-[#000]  max-sm:text-l	 max-md:text-2xl text-3xl my-[1.6rem]'>{item?.title}</p>
            <div
            className='z-10 flex flex-row bg-pink-900 rounded-3xl py-[15px] bg-button-bg absolute w-[94%] bottom-[2%]'>
              <Link 
                    href={`/product-detail/${item.id}`}

              className='w-full text-center font-poppins font-normal color-[#000] max-sm:text-md	 max-md:text-xl text-xl'>View</Link>
            </div>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProductCard;