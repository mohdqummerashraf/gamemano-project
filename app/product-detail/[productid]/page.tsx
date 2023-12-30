import TitleBar from '@/app/component/Titlebar'
import React from 'react'
import headPhone from "@/app/utility/images/Headphone.png"
import Image from 'next/image'


type Props = {}

const page = (props: Props) => {
    return (
        <>
            <TitleBar />
            <div className="grid grid-cols-12 bg-[#380D41] p-[5%]">
                <p className='col-span-12 width-full text-center text-white text-[28px] capitalize'>Headphone-128k</p>
                <div className='col-span-12'>
                    <div className='w-[60%] bg-[#E4E4E4] border-2 rounded-[20px] border-[#A8620A] m-auto'>
                        <div className="grid grid-cols-12">
                            <div className='col-span-4  flex justify-center item-center'>
                                <div className='w-[90%] bg-[#E4E4E4] border-2 border-[#A8620A] m-auto'>
                                    <div className='w-full flex justify-center item-center'>
                                        <Image
                                            src={headPhone}
                                            alt="Picture of the author"
                                            className='w-[380px]'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-8 p-[7%]'>
                                <div className='flex flex-col justify-center item-center text-justify'>
                                    <p className='text-black text-[24px] font-poppins'>Headphone-128K</p>
                                    <div className='flex'>
                                        <p>Rating</p>
                                        <p>(12)</p>
                                    </div>
                                    <p className='text-[#131313] text-[16px] font-poppins tracking-[1px] my-[20px]'>Headphone is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                    <p>Price: Rs 750</p>
                                    <p>Discount: 10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {[1, 2, 3, 4].map((item, ind) => (
                    <div className='col-span-3 my-[20%]'>
                        <div className='w-[90%] bg-[#E4E4E4] border-4 border-[#A8620A] m-auto'>
                            <div className='w-full flex justify-center'>
                                <Image
                                    src={headPhone}
                                    height={400}
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