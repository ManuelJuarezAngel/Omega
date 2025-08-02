import React from "react";

const clientes = [
  {
    nombre: "Cliente 1",
    logo: `${import.meta.env.BASE_URL}images/clientes/cliente1.svg`,
  },
  {
    nombre: "Cliente 2",
    logo: `${import.meta.env.BASE_URL}images/clientes/cliente2.svg`,
  },
  {
    nombre: "Cliente 3",
    logo: `${import.meta.env.BASE_URL}images/clientes/cliente3.svg`,
  },
  {
    nombre: "Cliente 4",
    logo: `${import.meta.env.BASE_URL}images/clientes/cliente4.svg`,
  },
  {
    nombre: "Cliente 5",
    logo: `${import.meta.env.BASE_URL}images/clientes/cliente5.svg`,
  },
];

const ClientsSection = () => {
  return (
    <section className="w-full flex justify-center bg-base-200 p-3">
      <div className="max-w-7xl w-full flex flex-col items-center gap-4 my-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Nuestros Clientes
        </h2>
        <p className="max-w-xl text-center text-gray-600 mb-6">
          Trabajamos con marcas que confían en nuestro enfoque visual y técnico.
        </p>

        <div className="w-full flex flex-wrap justify-center gap-20 py-6">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded overflow-hidden shadow-md hover:scale-105 transition"
            >
              <img
                src={cliente.logo}
                alt={cliente.nombre}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ClientsSection;
