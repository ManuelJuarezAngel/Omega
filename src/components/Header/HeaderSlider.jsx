import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function HeaderSlider({ slides }) {
    const [opacities, setOpacities] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: slides.length,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
        },
    })

    return (
        <div className="relative w-full h-lvh md:max-h-screen overflow-hidden">
            <div ref={sliderRef} className="keen-slider w-full h-full">
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="keen-slider__slide w-full h-full relative"
                        style={{ opacity: opacities[idx] || 1 }}
                    >
                        <img
                            src={slide.src}
                            alt={`slide-${idx}`}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 flex flex-col justify-center items-start mx-auto my-auto px-12 text-left text-white z-20 max-w-7xl">
                            {slide.subtitle && (
                                <p className="text-xs md:text-sm uppercase text-yellow-400 mb-1">
                                    {slide.subtitle}
                                </p>
                            )}
                            <h2 className="text-xl md:text-5xl font-bold leading-tight">
                                {slide.title}
                            </h2>
                            {slide.description && (
                                <p className="mt-4 text-sm text-gray-200">
                                    {slide.description}
                                </p>
                            )}
                            {slide.buttonText && (
                                <button className="mt-6 bg-blue-700 hover:bg-blue-800 px-3 py-1 md:px-6 md:py-2 rounded text-white font-semibold">
                                    {slide.buttonText}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {loaded && instanceRef.current && (
                <>
                    <Arrow left onClick={() => instanceRef.current?.prev()} />
                    <Arrow onClick={() => instanceRef.current?.next()} />
                </>
            )}
        </div>
    )
}

function Arrow({ left, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 transform cursor-pointer -translate-y-1/2 z-10 p-2 bg-transparent transition-all duration-200 ease-in-out rounded-full ${left ? "left-4" : "right-4"}`}
            aria-label={left ? "Anterior" : "Siguiente"}
        >
            {left ? (
                // Flecha izquierda
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-left-fill text-white" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
            ) : (
                // Flecha derecha
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-right-fill text-white" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
            )}
        </button>
    )
}

