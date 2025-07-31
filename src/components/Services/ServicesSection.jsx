import React from "react";
import ServicesCard from "./ServicesCard";

const services = [
  {
    title: "Extintores",
    image: "/images/services/serviceCard1.webp",
    description: "Instalación y mantenimiento de extintores.",
  },
  {
    title: "Dictamen",
    image: "/images/services/serviceCard2.webp",
    description: "Evaluaciones técnicas y reportes profesionales.",
  },
  {
    title: "Protección Civil",
    image: "/images/services/serviceCard3.webp",
    description: "Planes y simulacros de emergencia.",
  },
];

function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">NUESTROS SERVICIOS</h1>
        <p className="text-gray-600 mt-2">
          Ofrecemos una amplia variedad de Servicios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((svc) => (
          <ServicesCard
            key={svc.title}
            image={svc.image}
            title={svc.title}
            description={svc.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
