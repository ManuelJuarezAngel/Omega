import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos"
import 'aos/dist/aos.css'
import HeaderIndex from "./components/Header/HeaderSection.jsx";
import ServicesSection from "./components/Services/ServicesSection.jsx";
import ServiceStructuredData from "./components/ServiceStructuredData.jsx";



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
      <Navbar />
      <HeaderIndex />
      <ServicesSection />
      <ServiceStructuredData/>
      <Footer />
    </div>
  );
}

export default App;