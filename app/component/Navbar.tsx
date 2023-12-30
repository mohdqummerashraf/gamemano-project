import Image from 'next/image'
import React from 'react'
import logo from '@/app/utility/images/LOGO.png';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='grid grid-cols-12 bg-[#380D41] p-[14px]'>
      <div className='col-span-4 flex justify-center'>
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className='col-span-8 flex justify-center text-white	items-end'>
        
        <p className='rounded-full border-2	border-inherit border-[buttonBorder]-900 bg-button-bg text-transparent bg-clip-text mr-[3%] px-[8px]'>Home</p>
        <p className='border-5 border-white-900 bg-button-bg text-transparent bg-clip-text'>Products</p>
      </div>

    </div>
  )
}

export default Navbar