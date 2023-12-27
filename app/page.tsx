'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ProductCard } from './component/ProductCard';

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
     <ProductCard />
     <h1 className="text-3xl font-bold underline">Hello</h1>
     </>
  )
}
