import React, { useState, useEffect } from 'react';

export default function Navbar({ setTheme, theme }) {

    const toggleTheme = () => {
        setTheme(theme === "winter" ? "business" : "winter");
    };

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
        ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        : "bg-transparent";
    const topNavbar = isScrolled ? "md:top-5" : "top-0 md:top-25";
    const themeState = localStorage.getItem("theme")
    
    return (
        <header className={`navbar fixed w-full transition-all duration-300 ease-in-out flex justify-center items-center z-50 ${topNavbar}`}>
            <div className={`navbar-start w-[99%] lg:w-[90%] max-w-7xl transition-all duration-300 ease-in-out flex justify-between items-center py-2 px-4 rounded ${navbarClasses}`}>

                <div className="dropdown lg:hidden block">
                    <div tabIndex={0} role="button" className="hover:bg-neutral-800 hover:text-white p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded z-1 mt-3 w-52 p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                        <li><a href='#hero'>Home</a></li>
                        <li><a href='#servicios'>Servicios</a></li>
                        <li><a href='#nosotros'>Nosotros</a></li>
                        <li><a href='#proyectos'>Proyectos</a></li>
                        <li><a href='#contacto'>Contacto</a></li>
                    </ul>
                </div>

                <div className='' id='logo'>
                    <span className='font-bold'></span>
                </div>

                <nav className='hidden lg:space-x-6 lg:flex'>
                    <a className='cursor-pointer p-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white rounded' href='#hero'>Home</a>
                    <a className='cursor-pointer p-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white rounded' href='#servicios'>Servicios</a>
                    <a className='cursor-pointer p-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white rounded' href='#nosotros'>Nosotros</a>
                    <a className='cursor-pointer p-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white rounded' href='#proyectos'>Proyectos</a>
                    <a className='cursor-pointer p-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white rounded' href='#contacto'>Contacto</a>
                </nav>

                <div>
                    <a className="tooltip" data-tip="Tema">
                        <label className="swap swap-rotate">

                            <input type="checkbox" className="theme-controller" value={theme === 'business'} onChange={toggleTheme} />


                            <svg
                                className="swap-off h-5 w-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>


                            <svg
                                className="swap-on h-5 w-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </a>
                </div>
            </div>
        </header>
    )
}
