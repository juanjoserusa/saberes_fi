import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Navegación */}
        <div>
          <h5 className="text-xl font-bold mb-4 text-secondary">Navegación</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/quienes-somos" className="hover:underline">Quiénes Somos</Link></li>
            <li><Link to="/donde-estamos" className="hover:underline">Dónde Estamos</Link></li>
            <li><Link to="/cursos-tarifas" className="hover:underline">Clases y Talleres</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* Información legal */}
        <div>
          <h5 className="text-xl font-bold mb-4 text-secondary">Información Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:underline">Política de Cookies</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
       {/* Redes sociales */}
<div>
  <h5 className="text-xl font-bold mb-4 text-secondary">Redes Sociales</h5>
  <div className="flex space-x-4 text-white text-3xl">
    {[
      { href: "https://facebook.com", icon: "fab fa-facebook-f" },
      { href: "https://instagram.com", icon: "fab fa-instagram" },
      { href: "https://twitter.com", icon: "fab fa-twitter" },
      { href: "https://linkedin.com", icon: "fab fa-linkedin-in" },
    ].map(({ href, icon }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:scale-110 hover:text-secondary duration-300"
      >
        <i className={icon}></i>
      </a>
    ))}
  </div>
</div>

      </div>

      {/* Footer final */}
      <div className="text-center text-sm text-white mt-10 px-6">
        © {new Date().getFullYear()} Saberes. Todos los derechos reservados.
      </div>
    </footer>
  );
}
