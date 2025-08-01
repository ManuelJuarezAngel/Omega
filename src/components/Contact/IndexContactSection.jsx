import React from "react";
import FormField from "./FormField.jsx";

const backgroundImageUrl = `${
  import.meta.env.BASE_URL
}images/contact/contact1.webp`;

const formFields = [
  {
    name: "nombre",
    type: "text",
    placeholder: "Nombre",
    icon: "user",
  },
  {
    name: "email",
    type: "email",
    placeholder: "mail@site.com",
    icon: "mail",
  },
  {
    name: "asunto",
    type: "text",
    placeholder: "Asunto",
    icon: "subject",
  },
];

function IndexContactSection() {
  return (
    <section
      className="relative w-full flex justify-center bg-base-200 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 z-10 bg-gradient-custom-horizontal mix-blend-hard-light"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 py-12 min-h-screen w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-xl font-semibold text-[#FF6700] mb-6">
            Formulario
          </h2>
          <form className="space-y-4">
            {formFields.map((field) => (
              <FormField key={field.name} field={field} />
            ))}
            <textarea
              className="textarea w-full"
              placeholder="Mensaje"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-[#FF6700] text-white rounded-md hover:bg-[#e45f00] focus:ring-2 focus:ring-[#FF6700] transition-colors cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold mb-4">CONTACT</h2>
          <p className="text-sm text-gray-300 mb-2">Lorem ipsum simply dummy</p>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndexContactSection;
