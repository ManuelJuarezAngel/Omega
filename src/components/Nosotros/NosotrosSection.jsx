import React from "react";

const backgroundImageUrl = `${
  import.meta.env.BASE_URL
}images/nosotros/nosotros_back.webp`;

const infoBlocks = [
  {
    title: "¿Quiénes Somos?",
    description:
      "Somos una empresa mexicana especializada en soluciones integrales para la gestión de riesgos en Protección Civil, Seguridad e Higiene Laboral, Medio Ambiente y cumplimiento normativo.",
    image: `${import.meta.env.BASE_URL}images/nosotros/nosotros1.svg`,
  },
  {
    title: "¿Qué Hacemos?",
    description:
      "Brindamos soluciones integrales en Protección Civil, Seguridad e Higiene Laboral, Regulación Gubernamental y Medio Ambiente. Ayudamos a las empresas a cumplir con la normativa, prevenir riesgos, proteger a su personal, instalaciones y operación.",
    image: `${import.meta.env.BASE_URL}images/nosotros/nosotros2.svg`,
  },
];

function IndexNosotrosSection() {
  return (
    <section
      className="relative w-full flex justify-center bg-base-200 bg-cover bg-center overflow-hidden p-3"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      {/* Gradiente inferior */}
      <div className="absolute inset-0 z-10 bg-gradient-custom-horizontal-nosotros mix-blend-hard-light"></div>

      {/* Contenido principal con z-20 para que quede encima */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center gap-4 my-10 text-white mx-auto">
        {/* Encabezado */}
        <div className="w-full flex flex-col items-start">
          <h2 className="text-xs font-bold text-[#FFB380] mb-0">Conócenos</h2>
          <div className="max-w-80">
            <h2 className="text-3xl font-bold mt-0 leading-tight">
              Nuestra Identidad y Lo Que Ofrecemos a Tu Empresa
            </h2>
          </div>
        </div>

        {/* Bloques informativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
          {infoBlocks.map(({ title, description, image }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-6"
            >
              <img
                src={image}
                alt={title}
                className="w-24 h-24 md:w-32 md:h-32 object-contain" // ← Sin fondo, tamaño grande y adaptable
                loading="lazy"
              />
              <h4 className="text-2xl font-semibold text-white">{title}</h4>
              <p className="max-w-sm text-white">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndexNosotrosSection;
