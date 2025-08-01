import React from "react";
import ServicesCard from "./ServicesCard";

const services = [
  {
    title: "Extintores",
    image: `${import.meta.env.BASE_URL}images/services/serviceCard1.webp`,
    description: "Instalación y mantenimiento de extintores.",
  },
  {
    title: "Dictamen",
    image: `${import.meta.env.BASE_URL}images/services/serviceCard2.webp`,
    description: "Evaluaciones técnicas y reportes profesionales.",
  },
  {
    title: "Protección Civil",
    image: `${import.meta.env.BASE_URL}images/services/serviceCard3.webp`,
    description: "Planes y simulacros de emergencia.",
  },
];


function ServicesSection() {
  return (

    <section className="w-full flex justify-center bg-base-200 p-3">
      <div className="max-w-7xl w-[100%] flex justify-start items-center gap-4 flex-col my-10">

        <div className="w-[100%] flex justify-start items-start flex-col">
          <h2 className="text-xs font-bold text-[#FF6700] mb-0">NUESTROS SERVICIOS</h2>
          <div className="max-w-80">
            <h2 className="text-3xl font-bold text-[#0C152B] mt-0 leading-tight">Ofrecemos una amplia variedad de Servicios</h2>
          </div>
          
        </div>

        <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ServicesCard
              key={svc.title}
              image={svc.image}
              title={svc.title}
              description={svc.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
