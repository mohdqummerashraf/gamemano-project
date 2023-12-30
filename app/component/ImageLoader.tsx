import Image from "next/image"
import Loader from "@/app/utility/images/LoaderImage.png"
type propsInterface ={
    
    width: Number 
    height: Number
}

export default function ImageLoader({ width, height }: propsInterface) {
    return (
    <Image 
    src={Loader}
    width={100}
    height={100}
    alt="loader"
    />)
}