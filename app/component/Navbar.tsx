'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../utility/images/Logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Closemenu from "@/app/utility/images/CloseMenu.png";

type Props = {
  openMobileNav: Boolean,
  setOpenMenu: (value: Boolean) => void;
}

const Navbar = ({openMobileNav, setOpenMenu}: Props) => {
  const pathname = usePathname()

  const MobileNav = () => {
    return (
      <div className={openMobileNav ? 'bg-[#26072C] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full' :'hidden'}>
        <Image
          src={Closemenu}
          width={100}
          height={100}
          alt='open'
          className='w-[50px] h-[30px] absolute top-[5%] right-[10%]'
          onClick={()=>setOpenMenu(false)}
          loading='lazy'
          
        />
        <div className='flex flex-col h-[100%] items-center relative top-[30%]'>
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Picture of the author"
            className='relative top-[-10%]'
            loading='lazy'
          />


          <Link
            href='/'
            className={pathname === '/product' ? 'text-[28px] border-5 border-white-900 bg-button-bg text-transparent bg-clip-text my-[3%]' : 'text-[28px] rounded-full border-2	border-inherit border-[buttonBorder]-900 bg-button-bg text-transparent bg-clip-text my-[3%] px-[8px]'}>Home</Link>
          <Link
            href='/product'
            className={pathname === '/product' ? 'text-[28px] rounded-full border-2	border-inherit border-[buttonBorder]-900 bg-button-bg text-transparent bg-clip-text  px-[8px]' : 'text-[28px] border-5 border-white-900 bg-button-bg text-transparent bg-clip-text'}>Products</Link>
        </div>
      </div>

    )
  }

  return (

    <>
      <div className='hidden lg:grid xl:grid grid grid-cols-12 bg-[#380D41] p-[14px]'>
        <div className='col-span-4 flex justify-center'>
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className='col-span-8 flex justify-center text-white	items-end'>

          <Link
            href='/'
            className={pathname === '/product' ? 'border-5 border-white-900 bg-button-bg text-transparent bg-clip-text mr-[3%]' : 'rounded-full border-2	border-inherit border-[buttonBorder]-900 bg-button-bg text-transparent bg-clip-text mr-[3%] px-[8px]'}>Home</Link>
          <Link
            href='/product'
            className={pathname === '/product' ? 'rounded-full border-2	border-inherit border-[buttonBorder]-900 bg-button-bg text-transparent bg-clip-text  px-[8px]' : 'border-5 border-white-900 bg-button-bg text-transparent bg-clip-text'}>Products</Link>
        </div>
      </div>
      <MobileNav />
    </>
  )
}

export default Navbar