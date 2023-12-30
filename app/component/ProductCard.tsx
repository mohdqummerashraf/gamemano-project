'use client'
import Image from 'next/image';
import * as React from 'react';
import headPhone from "@/app/utility/images/Headphone.png"
import { ProductInterface } from './Product.types';
import Link from 'next/link';
import FavTag from "@/app/utility/images/FavoriteTag.png"
import ViewAll from "@/app/utility/images/ViewAll.png"
 
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
        <div className='max-xs:col-span-12 max-xs:min-h-[350px] max-sm:col-span-12 max-sm:min-h-[400px] max-md:min-h-[400px] max-md:col-span-6 max-lg:col-span-4 max-lg:min-h-[550px] col-span-4 min-h-[550px] width-[90%] m-[5%] bg-[#FFFFFF] rounded-[15px] p-[3%] relative'>
            <div className='flex flex-row pb-[15px]'>
              <p className='w-[75%] text-left bg-golden-bg text-transparent bg-clip-text'>{item?.brand}</p>
              <div className='w-[25%] flex justify-end' >
              <Image 
               src={FavTag}
                alt='fav'
                width={25}
                height={25}
               />
              </div>
               
            </div>
            <div className='w-full flex justify-center'>
            <Image 
            src={item?.thumbnail}
            alt="Picture of the author"
            width={300}
            height={200}
            className='object-contain	w-[100%] h-[300px] max-xs:h-[100%] max-sm:h-[200px] max-md:h-[200px] max-lg:h-[250px]'
            />
            </div>
            <p className='grow-1 w-full text-center font-poppins font-normal color-[#000] max-xs:text[20px] max-sm:text-[20px]	max-md:text-xl text-3xl my-[1.6rem]'>{item?.title}</p>
            <div
            className=' max-xs:py-[10px] max-sm:py-[10px] py-[15px] z-10 flex flex-row bg-pink-900 rounded-3xl  bg-button-bg absolute w-[94%] bottom-[2%]'>
              <Link 
                href={`/product-detail/${item.id}`}
              className='w-[70%] text-center font-routhem font-[500] font-normal color-[#000] max-sm:text-md	max-md:text-xl text-xl'>
                 View 
                
              </Link>
              <div className='text-center w-[30%] flex justify-start'>
              <Image 
                src={ViewAll}
              width={30}
              height={30}
              alt='view all'
               
                />
              </div>
               
            </div>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProductCard;