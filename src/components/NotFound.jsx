// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      {/* Logo */}
      <img src={logo} alt="Logo Saberes" className="h-24 mb-6" />

      {/* Texto */}
      <h1 className="text-5xl font-extrabold text-primary mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Uy... parece que esta página no existe.
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow hover:brightness-110 transition"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
