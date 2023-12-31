'use client'
import TitleBar from '@/app/component/Titlebar'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Slider from "react-slick";
import ProductDetailBanner from "@/app/utility/images/ProductDetailBanner.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Goldenstar from "@/app/utility/images/GoldenStar.png"

type detailProps = {
    brand: string
    description: string
    discountPercentage: number
    id: number,
    price: number
    rating?: number
    thumbnail?: string,
    stock?: number,
    title: string
    images: []
}





const page = () => {
    const params = useParams<{ productid: string; }>();
    const { productid } = params;
    const sliderRef = useRef<Slider>(null);

    const [productDetails, setProdcutDetails] = useState<detailProps | null>(null);
    const [LoadingData, setLoadingData] = useState<Boolean>(false);

    const imgSrc: string = productDetails?.thumbnail ?? '';

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    useEffect(() => {
        if (productid) {
            fetchProductDetail()
        }
    }, [productid]);

    const next = () => {
        sliderRef?.current?.slickNext();
    }

    const previous = () => {
        sliderRef?.current?.slickPrev();
    }

    return (
        <>
            <TitleBar image={ProductDetailBanner.src} title="Products Details" />
            <div className='bg-[#380D41] pb-[10%]'>
                {LoadingData ?
                    <h2>Loading........</h2>
                    :
                    <div className="grid grid-cols-12 bg-[#380D41] p-[5%]">
                        <p className='col-span-12 width-full text-center text-white text-[28px] capitalize mb-[2rem]'>{productDetails?.title}</p>
                        <div className='col-span-12'>
                            <div className='max-xs:w-[90%] max-sm:w-[90%] max-md:w-[70%] w-[60%] bg-[#E4E4E4] border-2 rounded-[20px] border-[#A8620A] m-auto'>
                                <div className="grid grid-cols-12">
                                    <div className='max-xs:col-span-12 max-sm:col-span-12 col-span-4  flex justify-center item-center'>
                                        <div className='max-xs:my-[4%] max-sm:my-[4%] w-[90%] bg-[#E4E4E4] border-2 border-[#A8620A] m-auto'>
                                            <div className='w-full flex justify-center item-center'>
                                                <Image
                                                    src={imgSrc}
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
                                                {new Array(Math.round(productDetails?.rating || 0)).fill(0).map((item, ind) => (
                                                    <React.Fragment key={ind}>
                                                        <Image
                                                            src={Goldenstar}
                                                            width={30}
                                                            height={30}
                                                            alt='golden star'
                                                        />
                                                    </React.Fragment>
                                                ))}
                                                <p className='flex justify-center items-center mt-[6px] ml-[6px]'>({Math.round(productDetails?.rating || 0)})</p>
                                            </div>
                                            <p className='text-[#131313] text-[16px] font-poppins tracking-[1px] my-[20px]'>{productDetails?.description}</p>
                                            <p className='text-[#000] text-[20px] font-poppins font-[400]'>{`Price: Rs ${productDetails?.price}`}</p>
                                            <p className='text-[#000] text-[20px] font-poppins font-[400]'>{`Discount: ${productDetails?.discountPercentage}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>}

                <div className='w-[80%] m-auto bg-[#380D41]'>
                    <div className='mt-10'>
                        <Slider {...settings} ref={sliderRef}>
                            {productDetails?.images.map((item, ind) => (


                                <div className='w-[90%] bg-[#E4E4E4] border-4 border-[#A8620A] m-auto'>
                                    <div className='w-full flex justify-center'>
                                        <Image
                                            src={item}
                                            height={200}
                                            width={200}
                                            alt="Picture of the author"
                                            className='w-full h-[200px] object-contain'
                                        />
                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
                <div className='w-full flex justify-center text-center mt-[5%]'>
                    <svg
                        onClick={previous}
                        xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M23.621 33.0694L14.1726 23.621L23.621 14.1726L26.9279 17.4795L23.1486 21.2589H33.0694V25.9831H23.1486L26.9279 29.7624L23.621 33.0694ZM23.621 47.2419C26.8885 47.2419 29.9593 46.6215 32.8332 45.3806C35.707 44.1397 38.2069 42.4571 40.3328 40.3328C42.4587 38.2069 44.1413 35.707 45.3806 32.8331C46.6199 29.9593 47.2404 26.8885 47.2419 23.621C47.2419 20.3534 46.6215 17.2827 45.3806 14.4088C44.1397 11.5349 42.4571 9.03502 40.3328 6.90913C38.2069 4.78325 35.707 3.10065 32.8332 1.86133C29.9593 0.622019 26.8885 0.00157473 23.621 0C20.3534 0 17.2827 0.620444 14.4088 1.86133C11.5349 3.10222 9.03503 4.78482 6.90914 6.90913C4.78326 9.03502 3.09987 11.5349 1.85898 14.4088C0.618095 17.2827 -0.00156403 20.3534 1.14441e-05 23.621C1.14441e-05 26.8885 0.620457 29.9593 1.86134 32.8331C3.10223 35.707 4.78483 38.2069 6.90914 40.3328C9.03503 42.4587 11.5349 44.1421 14.4088 45.383C17.2827 46.6238 20.3534 47.2435 23.621 47.2419ZM23.621 42.5177C18.3456 42.5177 13.8773 40.6871 10.2161 37.0259C6.55483 33.3646 4.72421 28.8963 4.72421 23.621C4.72421 18.3456 6.55483 13.8773 10.2161 10.2161C13.8773 6.55482 18.3456 4.72419 23.621 4.72419C28.8963 4.72419 33.3646 6.55482 37.0259 10.2161C40.6871 13.8773 42.5178 18.3456 42.5178 23.621C42.5178 28.8963 40.6871 33.3646 37.0259 37.0259C33.3646 40.6871 28.8963 42.5177 23.621 42.5177Z" fill="url(#paint1_linear_38_1863)" />
                        <defs>
                            <linearGradient id="paint0_linear_38_1863" x1="87" y1="23.62" x2="134.242" y2="23.62" gradientUnits="userSpaceOnUse">
                                <stop offset="0.02" stop-color="#920AA8" />
                                <stop offset="0.2" stop-color="#E019CC" />
                                <stop offset="0.48" stop-color="#FF81E3" />
                                <stop offset="0.52" stop-color="#FC75D6" />
                                <stop offset="0.6" stop-color="#DF55F6" />
                                <stop offset="0.71" stop-color="#E822EC" />
                                <stop offset="0.75" stop-color="#E80F91" />
                                <stop offset="0.8125" stop-color="#EE19D8" />
                                <stop offset="1" stop-color="#FE3873" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        onClick={next}
                        xmlns="http://www.w3.org/2000/svg" width="135" height="48" viewBox="0 0 135 48" fill="none">
                        <path d="M110.621 33.0694L120.069 23.621L110.621 14.1726L107.314 17.4795L111.093 21.2589H101.173V25.9831H111.093L107.314 29.7624L110.621 33.0694ZM110.621 47.2419C107.353 47.2419 104.283 46.6215 101.409 45.3806C98.5349 44.1397 96.035 42.4571 93.9091 40.3328C91.7832 38.2069 90.1006 35.707 88.8613 32.8331C87.622 29.9593 87.0016 26.8885 87 23.621C87 20.3534 87.6204 17.2827 88.8613 14.4088C90.1022 11.5349 91.7848 9.03502 93.9091 6.90913C96.035 4.78325 98.5349 3.10065 101.409 1.86133C104.283 0.622019 107.353 0.00157473 110.621 0C113.889 0 116.959 0.620444 119.833 1.86133C122.707 3.10222 125.207 4.78482 127.333 6.90913C129.459 9.03502 131.142 11.5349 132.383 14.4088C133.624 17.2827 134.244 20.3534 134.242 23.621C134.242 26.8885 133.621 29.9593 132.381 32.8331C131.14 35.707 129.457 38.2069 127.333 40.3328C125.207 42.4587 122.707 44.1421 119.833 45.383C116.959 46.6238 113.889 47.2435 110.621 47.2419ZM110.621 42.5177C115.896 42.5177 120.365 40.6871 124.026 37.0259C127.687 33.3646 129.518 28.8963 129.518 23.621C129.518 18.3456 127.687 13.8773 124.026 10.2161C120.365 6.55482 115.896 4.72419 110.621 4.72419C105.346 4.72419 100.877 6.55482 97.2161 10.2161C93.5548 13.8773 91.7242 18.3456 91.7242 23.621C91.7242 28.8963 93.5548 33.3646 97.2161 37.0259C100.877 40.6871 105.346 42.5177 110.621 42.5177Z" fill="url(#paint0_linear_38_1863)" />

                        <defs>
                            <linearGradient id="paint1_linear_38_1863" x1="47.2419" y1="23.62" x2="0.000401844" y2="23.62" gradientUnits="userSpaceOnUse">
                                <stop offset="0.02" stop-color="#920AA8" />
                                <stop offset="0.2" stop-color="#E019CC" />
                                <stop offset="0.48" stop-color="#FF81E3" />
                                <stop offset="0.52" stop-color="#FC75D6" />
                                <stop offset="0.6" stop-color="#DF55F6" />
                                <stop offset="0.71" stop-color="#E822EC" />
                                <stop offset="0.75" stop-color="#E80F91" />
                                <stop offset="0.8125" stop-color="#EE19D8" />
                                <stop offset="1" stop-color="#FE3873" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
            </div>
        </>
    )
}

export default page