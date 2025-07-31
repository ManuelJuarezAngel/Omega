import { useState, useEffect } from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import AOS from "aos"
import 'aos/dist/aos.css'
import ServiceStructuredData from "./components/ServiceStructuredData";



function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    AOS.init({
      duration: 700
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de 2 segundos (puedes cambiar el tiempo)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-base-200">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen ${theme === "business" ? "text-white bg-gray-900" : "bg-base-200"}`}>
      <ServiceStructuredData />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;