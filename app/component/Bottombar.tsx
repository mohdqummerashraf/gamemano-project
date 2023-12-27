import Image from 'next/image'
import React from 'react'
import borderLine from "@/app/utility/images/BottomBorderLine.png"
import BottomBg from "@/app/utility/images/BottomBarBg.png"
 
type Props = {}

const Bottombar = (props: Props) => {
  return (
    <div className='w-full'>
          <div>
            <Image 
            src={borderLine}
            className='w-full'
            alt='border-line'
            />
          </div>
          <div className='bg-blue-800 grid grid-cols-12'>
           <div className='max-sm:col-span-12 max-md:col-span-4 max-lg:col-span-4 col-span-4'>
            <div>
              <h2>Logo</h2>
              <p>lOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
            </div>
            
           </div>
           <div className='xs:col-span-12 max-sm:col-span-12 max-md:col-span-4 max-lg:col-span-4 col-span-4'>
           <h2>USEFUL LINKS</h2>
           <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact Us</li>
           </ul>
           </div>
           <div className='xs:col-span-12 max-sm:col-span-12 max-md:col-span-4 max-lg:col-span-4 col-span-4'>
           <h2>Follow Us On</h2>
           </div>
          </div>
    </div>
    
  )
}

export default Bottombar