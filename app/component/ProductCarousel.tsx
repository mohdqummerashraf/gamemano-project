import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
type Props = {}

const ProductCarousel = (props: Props) => {
    return (
        <>
            <Carousel 
            centerMode={true}
            centerSlidePercentage={25}
            showIndicators={false}
            showThumbs={false}
            // width={'75%'}
            showArrows={true}
            className='ml-[15%]'
            >
                {[1, 2, 3, 4, 5, 6].map((item, ind) => (
                    <React.Fragment key={ind}>
                        <div className='w-[300px] h-[200px] border-4 border-red-900'>
                             <h2>Hello{ind+1}</h2>
                        </div>
                    </React.Fragment>
                ))}


            </Carousel>
        </>
    )
}

export default ProductCarousel