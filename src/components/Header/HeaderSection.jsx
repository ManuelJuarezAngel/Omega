import HeaderSlider from "./HeaderSlider";

const images = [
    "/images/slider/slider1.webp",
    "/images/slider/slider2.webp",
    "/images/slider/slider3.webp",
]

export default function HeaderSection() {
    return (
        <div className='w-full top-0'>
            <HeaderSlider images={images} />
        </div>
    )
}
