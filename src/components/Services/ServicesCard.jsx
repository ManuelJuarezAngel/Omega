import React from "react";

function ServicesCard({ image, title, description }) {
  return (
    <div className="relative group w-full h-[50vh] rounded-xl overflow-hidden shadow-xl">
      {/* Imagen de fondo */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Degradado fijo */}
      <div className="absolute inset-0 z-10 bg-gradient-custom"></div>

      {/* Título que se eleva en hover para dejar espacio */}
      <div className="absolute bottom-4 left-4 z-30 flex items-center space-x-3 text-white transition-transform duration-300 group-hover:translate-y-[-60px]">
        <i className="fas fa-fire-extinguisher text-2xl"></i>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* Descripción aparece donde estaba el título */}
      <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm mb-2">{description}</p>
        <button className="inline-flex flex items-center gap-2 text-sm font-semibold hover:underline cursor-pointer">
          Saber más <i className="fas fa-arrow-right relative top-[1px] transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </div>
    </div>
  );
}






export default ServicesCard;
