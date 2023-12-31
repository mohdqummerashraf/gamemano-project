'use client'
import Image from 'next/image';
import * as React from 'react';
import { ProductInterface } from '../model/Product.types';
import Link from 'next/link';
import FavTag from "@/app/utility/images/FavoriteTag.png"
import ViewAll from "@/app/utility/images/ViewAll.png"
import Loading from './Loading';
 
interface ProductType {
  data: Array<ProductInterface>
  loading: Boolean
}


const ProductCard =({data, loading}: ProductType) =>{

  return (
    <div className="grid grid-cols-12 bg-[#380D41] px-[5%] pt-[5%] pb-[10%]">
      {loading  ? 
      <Loading />
      :
      data.map((item,ind)=>(
        <React.Fragment key={ind}> 
        <div className='col-span-12 min-h-[520px] sm:col-span-12 sm:min-h-[520px] md:min-h-[470px] md:col-span-6 lg:col-span-4 lg:min-h-[550px]   width-[90%] m-[5%] bg-[#FFFFFF] rounded-[15px] p-[3%] relative'>
            <div className='flex flex-row pb-[15px]'>
              <p className='w-[75%] text-left bg-golden-bg text-transparent bg-clip-text'>{item?.brand}</p>
              <div className='w-[25%] flex justify-end' >
              <Image 
               src={FavTag}
                alt='fav'
                width={25}
                height={25}
                loading='lazy'
               />
              </div>
               
            </div>
            <div className='w-full flex justify-center'>
            <Image 
            src={item?.thumbnail}
            alt="Picture of the author"
            width={300}
            height={200}
            loading='lazy'
            className='object-contain	w-auto h-[300px] h-[200px] sm:h-[200px] md:h-[200px] lg:h-[250px] xl:h-[250px]'
            />
            </div>
            <p className='grow-1 w-full text-center font-poppins font-normal text-[#000] max-xs:text[20px] max-sm:text-[20px]	max-md:text-xl text-3xl my-[1.6rem]'>{item?.title}</p>
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
              loading='lazy'
               
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