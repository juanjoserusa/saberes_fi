import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 <nav className="bg-white shadow-md px-6 py-2 md:py-1 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
  src={logo}
  alt="Logo Saberes"
  className="h-24 md:h-28 -mb-4 md:-mb-6 transition-transform duration-300"
/>

        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-primary font-medium">
          <Link to="/quienes-somos" className="hover:text-secondary transition">Quiénes Somos</Link>
          <Link to="/donde-estamos" className="hover:text-secondary transition">Dónde Estamos</Link>
          <Link to="/cursos-tarifas" className="hover:text-secondary transition">Cursos y Tarifas</Link>
          <Link to="/contacto" className="hover:text-secondary transition">Contacto</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
  <div className="md:hidden mt-4 flex flex-col space-y-2 text-primary font-medium px-4 text-center">
    <Link to="/quienes-somos" className="hover:text-secondary transition">Quiénes Somos</Link>
    <Link to="/donde-estamos" className="hover:text-secondary transition">Dónde Estamos</Link>
    <Link to="/cursos-tarifas" className="hover:text-secondary transition">Cursos y Tarifas</Link>
    <Link to="/contacto" className="hover:text-secondary transition">Contacto</Link>
  </div>
)}
    </nav>
  );
}
