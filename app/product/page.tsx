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
      <div className='grid grid-cols-12 bg-[#380D41] px-[5%] mt-[3%]'>
        <div className='col-span-6'>
          <h2 className='font-routhem text-[24px] font-[400] text-white p-[3%]'>ALL PRODUCT</h2>
        </div>
        <div className='col-span-6 flex items-end flex-col mr-[5%]'>
          <div className='w-[30%] rounded-[15px] p-[3%]'>
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