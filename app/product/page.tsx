'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { ProductInterface } from '../component/Product.types';
import TitleBar from '../component/Titlebar';
import ProductPageBanner from "@/app/utility/images/ProductPageBanner.png";
 
 
function page() {

  const [categoryList, setCategoryList] = useState<[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [productData, setProductData] = useState<ProductInterface[]>([]);
  const [LoadingData, setLoadingData] = useState<Boolean>(false);

  function selectCategory(value: string) {
    setSelectedCategory(value)
  }

  const fetchCategory =async () => {
    // setLoadingData(true);
    try {
      const fetchData = await fetch("https://dummyjson.com/products/categories");
      const response = await fetchData.json();
      setCategoryList(response);
      // setLoadingData(false);
    } catch (error) {
      // setLoadingData(false);
      console.log(error);
    }finally{
      // setLoadingData(false);
    }
  }

  const fetchSelectedProduct =async () => {
    setProductData([]);
    setLoadingData(true);
     try {
      const fetchData = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`);
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

  const fetchAllProduct =async () => {
    setProductData([]);
    setLoadingData(true);
    try {
      const fetchData = await fetch(`https://dummyjson.com/products`);
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
    if(selectedCategory){
      fetchSelectedProduct()
    }else{
      fetchAllProduct()
    }     
  },[selectedCategory]);

  useEffect(()=>{
    fetchCategory();
  },[])
  

  return (
    <>
    <TitleBar image={ProductPageBanner.src} title="Products" />
      <div className='grid grid-cols-12 bg-[#380D41] px-[5%]'>
        <div className='max-xs:col-span-12  max-xs:mx-auto max-sm:col-span-12 max-sm:mx-auto max-md:col-span-12 max-md:mx-auto  col-span-6'>
          <p className='font-routhem text-[24px] font-[400] text-white p-[3%] w-max	'>{">> "}{selectedCategory || 'All Products'}</p>
        </div>
        <div className='max-xs:col-span-12 max-xs:mx-auto max-sm:col-span-12 max-sm:mx-auto max-md:col-span-12 max-md:mx-auto col-span-6 flex items-end flex-col'>
          <div className='max-xs:w-[90%] max-xs:m-[5%] max-xs:p-[0]  max-sm:w-[90%] max-sm:m-[5%] max-sm:p-[0] max-md:w-[90%] max-md:m-[5%] max-md:p-[0] w-[50%] rounded-[15px] p-[3%]'>
            <select 
            value={selectedCategory}
            defaultValue={'All Products'}
            onChange={(e)=>selectCategory(e.target.value)}
            className='rounded-xl p-[5px] font-poppins font-[600] font-[20px] text-[#ED19D8]'
            >
              {
                categoryList.map((item, ind)=>(
                  <React.Fragment key={ind}>
                     <option value={item} 
                     className='font-poppins font-[600] font-[20px] text-[#ED19D8]'
                     >{item}</option>    
                  </React.Fragment>
                ))
              }
            </select>
          </div>
        </div>
      </div>
      <ProductCard data={productData} loading={LoadingData}/>

    </>
  )
}

export default page