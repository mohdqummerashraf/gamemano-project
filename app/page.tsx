'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ProductCard } from './component/ProductCard';
import TitleBar from './component/Titlebar';

export default function Home() {
  const [productData, setProductData] = useState([])
  const fetchApi =async () => {
    try {
      const fetchData = await fetch("https://dummyjson.com/products");
      const response = await fetchData.json();
      setProductData(response);
    } catch (error) {
      console.log(error);
    } 
  }
  
  useEffect(()=>{
    fetchApi()
  },[]);
  return (  
     <>
     <TitleBar />
     <ProductCard />
      </>
  )
}
