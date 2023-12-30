'use client'
import TitleBar from '@/app/component/Titlebar'
import React, { useEffect, useState } from 'react'
import headPhone from "@/app/utility/images/Headphone.png"
import Image from 'next/image'
import { useParams } from 'next/navigation'
import ImageLoader from '@/app/component/ImageLoader'
import ProductDetailBanner from "@/app/utility/images/ProductDetailBanner.png"


type detailProps = {
    brand: string
    description: string
    discountPercentage: Number
    id: Number,
    price: Number
    rating: Number
    thumbnail: String
    title: String
    images: []
}

const page = () => {
    const params = useParams<{ productid: string; }>();
    const { productid } = params;

    const [productDetails, setProdcutDetails] = useState<detailProps | null>(null);
    const [LoadingData, setLoadingData] = useState<Boolean>(false);

    const fetchProductDetail = async () => {
        setLoadingData(true);
        try {
            const fetchData = await fetch(`https://dummyjson.com/products/${productid}`);
            const response = await fetchData.json();
            setProdcutDetails(response);
            setLoadingData(false);
        } catch (error) {
            setLoadingData(false);
            console.log(error);
        } finally {
            setLoadingData(false);
        }
    }

    useEffect(() => {
        if (productid) {
            fetchProductDetail()
        }
    }, [productid]);


    return (
        <>
            <TitleBar image={ProductDetailBanner.src} title="Products Details" />
            <div className="grid grid-cols-12 bg-[#380D41] p-[5%]">
                <p className='col-span-12 width-full text-center text-white text-[28px] capitalize mb-[2rem]'>{productDetails?.title}</p>
                <div className='col-span-12'>
                    <div className='max-xs:w-[90%] max-sm:w-[90%] max-md:w-[70%] w-[60%] bg-[#E4E4E4] border-2 rounded-[20px] border-[#A8620A] m-auto'>
                        <div className="grid grid-cols-12">
                            <div className='max-xs:col-span-12 max-sm:col-span-12 col-span-4  flex justify-center item-center'>
                                <div className='max-xs:my-[4%] max-sm:my-[4%] w-[90%] bg-[#E4E4E4] border-2 border-[#A8620A] m-auto'>
                                    <div className='w-full flex justify-center item-center'>
                                        <Image
                                            src={productDetails?.thumbnail || <ImageLoader width={200} height={200}/>}
                                            alt="Picture of the author"
                                            className='w-[380px]'
                                            height={400}
                                            width={300}
                                            // loading = {<ImageLoader />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='max-xs:col-span-12 max-xs:px-[15%] max-sm:col-span-12 max-sm:px-[15%] col-span-8 p-[7%]'>
                                <div className='flex flex-col justify-center item-center text-justify'>
                                    <p className='text-black text-[24px] font-poppins'>{productDetails?.title}</p>
                                    <div className='flex'>
                                        <p>Rating</p>
                                        <p>(12)</p>
                                    </div>
                                    <p className='text-[#131313] text-[16px] font-poppins tracking-[1px] my-[20px]'>{productDetails?.description}</p>
                                    <p className='text-[#000] text-[20px] font-poppins font-[400]'>{`Price: Rs ${productDetails?.price}`}</p>
                                    <p className='text-[#000] text-[20px] font-poppins font-[400]'>{`Discount: ${productDetails?.discountPercentage}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {productDetails?.images.map((item, ind) => (
                    <div className='col-span-3 my-[20%]'>
                        <div className='w-[90%] bg-[#E4E4E4] border-4 border-[#A8620A] m-auto'>
                            <div className='w-full flex justify-center'>
                                <Image
                                    src={item}
                                    height={400}
                                    width={400}
                                    alt="Picture of the author"
                                    className='w-full'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default page