import React from 'react'
 
type Props = {}

const TitleBar = (props: Props) => {
  return (
    <>
    <div className='bg-white'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-[#F903AA] text-center text-[40px] font-routhem'>Logo Electronics</p>
        <p>The techies you love</p>
        <p>View All Products</p>
      </div>
    </div>
    </>
  )
}

export default TitleBar