import React from 'react'

type Props = {
  image: string,
  title: string,
  tagline?: string,
  button?: string
}

const TitleBar = ({ image, title, tagline, button }: Props) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'round',

        }}
        className='w-[100%] min-h-[300px] max-h-full flex justify-center relative'>
        <div className='flex flex-col items-center justify-center bg-[#0005] absolute top-0 left-0 w-[100%] h-[100%]'>
          <p className='text-[#F903AA] text-center text-[40px] font-routhem'>{title}</p>
          {tagline && <p className='text-white text-center text-[20px] font-[400] font-routhem'>The techies you love</p>}
          {button && <p className='text-white text-center text-[18px] font-[400] font-routhem'>View All Products</p>}
        </div>
      </div>
    </>
  )
}

export default TitleBar