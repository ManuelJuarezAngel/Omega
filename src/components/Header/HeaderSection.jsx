import HeaderSlider from "./HeaderSlider";

const slides = [
    {
        src: "/images/slider/slider1.webp",
        subtitle: "Growth Your Business",
        title: "From Idea to Products",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis orci nec lectus auctor venenatis.",
        buttonText: "Más información",
    },
    {
        src: "/images/slider/slider2.webp",
        subtitle: "Innovación y Tecnología",
        title: "Impulsa tu desarrollo",
        description:
            "Descubre cómo nuestros servicios pueden ayudarte a lograr tus objetivos con soluciones inteligentes.",
        buttonText: "Ver servicios",
    },
    {
        src: "/images/slider/slider3.webp",
        subtitle: "Seguridad y Confianza",
        title: "Protege tu inversión",
        description:
            "Asesoría especializada para mantener seguros tus procesos y cumplir la normativa vigente.",
        buttonText: "Contáctanos",
    },
];

export default function HeaderSection() {
    return (
        <div className="w-full top-0">
            <HeaderSlider slides={slides} />
        </div>
    )
}
