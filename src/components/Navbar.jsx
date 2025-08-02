import React, { useState, useEffect } from 'react';

export default function Navbar({ setTheme, theme }) {

    const [isScrolled, setIsScrolled] = useState(false);

    // Detecta el scroll y actualiza el estado
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Clases dinámicas para el navbar
    const navbarClasses = isScrolled
        ? "bg-white text-black"
        : "bg-transparent text-white";

    return (
        <header className={`navbar fixed w-full transition-all duration-300 ease-in-out flex justify-center items-center flex-col z-50 p-0 ${navbarClasses}`}>
            <div className='w-full bg-gradient-custom-blue h-9 top-0 flex justify-center items-center'>
                <div className='max-w-7xl w-[100%] h-full flex justify-between items-center p-1'>
                    <div className='flex items-center justify-center text-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-envelope text-white" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <a className='text-white text-sm p-0 m-0'>correo@dominio</a>
                    </div>
                    <div className='flex justify-center align-center gap-3'>
                        <div className='hidden justify-center align-center pb-1 md:flex'>
                            <p className='font-bold text-white text-center text-sm m-0'>Horarios de atencion | 09:00 am - 06:00 pm |</p>
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook text-white" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram text-white" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp text-white" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`navbar-start w-[99%] lg:w-[90%] max-w-7xl transition-all duration-300 ease-in-out flex justify-between items-center px-4 rounded ${navbarClasses}`}>

                <div className="dropdown lg:hidden block py-3">
                    <div tabIndex={0} role="button" className="hover:bg-neutral-800 hover:text-white p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded z-1 mt-3 w-55 p-2 bg-white text-black shadow-lg">
                        <li><a href='#hero'>Home</a></li>
                        <li><details>
                            <summary className="flex justify-between items-center cursor-pointer">
                                Servicios
                            </summary>
                            <ul className="pl-4 mt-2 space-y-1">
                                <li><a href="#sub1">Subservicio 1</a></li>
                                <li><a href="#sub2">Subservicio 2</a></li>
                                <li><a href="#sub3">Subservicio 3</a></li>
                            </ul>
                        </details></li>
                        <li><a href='#nosotros'>Nosotros</a></li>
                        <li><a href='#proyectos'>Blog</a></li>
                        <li><a href='#contacto'>Contacto</a></li>
                    </ul>
                </div>

                <div className='' id='logo'>
                    <span className='font-bold'>LOGO</span>
                </div>

                <nav className="hidden lg:flex lg:space-x-6">
                    <ul className="flex justify-center items-center space-x-4">
                        <li>
                            <a
                                href="#hero"
                                className="cursor-pointer px-2 py-5 transition-all duration-100 ease-in-out border-b-3 border-b-transparent hover:border-b-primary"
                            >
                                Home
                            </a>
                        </li>

                        {/* Servicios con submenú */}
                        <li className="relative group">
                            <a
                                href="#servicios"
                                className="cursor-pointer px-2 py-5 flex items-center gap-1 transition-all duration-100 ease-in-out border-b-3 border-b-transparent hover:border-b-primary"
                            >
                                Servicios
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            {/* Submenú */}
                            <div className="absolute z-50 hidden group-hover:flex bg-white shadow-md rounded-md w-100 p-3 text-sm text-gray-800">
                                <ul>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Programas de Proteccion Civil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Dictamenes
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Normas STPS
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='block px-4 py-2 hover:bg-gray-100'>
                                            Alertamiento Sismico
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='block px-4 py-2 hover:bg-gray-100'>
                                            Señalizaciones y Equipo
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Trámites y Gestoría
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='block px-4 py-2 hover:bg-gray-100'>
                                            Extintores
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='block px-4 py-2 hover:bg-gray-100'>
                                            Capacitaciones
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a
                                href="#nosotros"
                                className="cursor-pointer px-2 py-5 transition-all duration-100 ease-in-out border-b-3 border-b-transparent hover:border-b-primary"
                            >
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a
                                href="#proyectos"
                                className="cursor-pointer px-2 py-5 transition-all duration-100 ease-in-out border-b-3 border-b-transparent hover:border-b-primary"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contacto"
                                className="cursor-pointer px-2 py-5 transition-all duration-100 ease-in-out border-b-3 border-b-transparent hover:border-b-primary"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>


                <div className='flex justify-center items-center gap-2'>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='text-xs'>+52 55 5555 5555</p>
                        <p className='text-xs'>+52 55 5555 5555</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
