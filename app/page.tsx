'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TitleBar from './component/Titlebar';
import ProductCard from './component/ProductCard';
import { ProductInterface } from './component/Product.types';
import Homebanner from "@/app/utility/images/HomePageBanner.png"; 
import ProductCarousel from './component/ProductCarousel';


export default function Home() {
  const [productData, setProductData] = useState<ProductInterface[]>([]);
  const [LoadingData, setLoadingData] = useState<Boolean>(false);
  const fetchApi =async () => {
    setLoadingData(true);
    try {
      const fetchData = await fetch("https://dummyjson.com/products");
      const response = await fetchData.json();
      setProductData(response?.products);
      setLoadingData(false);
    } catch (error) {
      setLoadingData(false);
      console.log(error);
    }finally{
      setLoadingData(false);
    }
  }
  
  useEffect(()=>{
    fetchApi()
  },[]);
   return (  
     <>
     <div className='relative'>
     {/* <ProductCarousel /> */}
     <TitleBar image={Homebanner.src} title='Logo Electronics' tagline='The techies you love' button='View All Products' bannerHeight={550}/>
      
     </div>
      
     <ProductCard data={productData} loading={LoadingData}/>
      </>
  )
}
