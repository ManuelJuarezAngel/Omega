export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral-800 text-white p-10">
            <aside>
                <img src="/img/logo.webp" alt="logo" className="max-w-25" />
                <p>
                    <span className="font-bold">Copyright © 2025 - All right reserved</span>
                    <br />
                    Especialistas en infraestructura crítica, soluciones tecnológicas y soporte a centros de datos.
                </p>
            </aside>

            <div>
                <h6 className="footer-title">Especialidades</h6>
                <p className="text-sm">Mantenimiento de centros de datos</p>
                <p className="text-sm">Sistemas de respaldo energético: UPS y Plantas de Emergencia</p>
                <p className="text-sm">Cableado estructurado y soluciones de CCTV</p>
                <p className="text-sm">Control de accesos y sistemas contra incendios</p>
            </div>

            <div>
                <h6 className="footer-title">Tecnologías</h6>
                <p className="text-sm">Infraestructura de TI</p>
                <p className="text-sm">Automatización industrial</p>
                <p className="text-sm">Redes seguras y conectividad empresarial</p>
                <p className="text-sm">Eficiencia energética y sistemas inteligentes</p>
            </div>

            <div>
                <h6 className="footer-title">Zonas de Servicio</h6>
                <p className="text-sm">Cobertura nacional en México</p>
                <p className="text-sm">Soporte técnico 24/7</p>
                <p className="text-sm">Atención a empresas, industrias y sector público</p>
                <p className="text-sm">Proyectos personalizados según tus necesidades</p>
            </div>
        </footer>
    )
}
