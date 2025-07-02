import { useEffect } from "react";
import Card from "../components/Card";
import hero from "../assets/hero.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero con imagen de fondo */}
      <section
        className="relative h-[400px] md:h-[500px] text-white flex items-center justify-center text-center px-4 overflow-hidden"
        data-aos="fade-down"
      >
        <img
          src={hero}
          alt="Alumno estudiando"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-opacity-50 mix-blend-multiply" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-primary">
            Bienvenido a <span className="text-secondary">Saberes</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-black">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos educativos en un entorno único, seguro y personalizado.
          </p>
          <a
            href="/contacto"
            className="md:text-xl inline-block bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow hover:brightness-110 transition"
          >
            Solicita información
          </a>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 mt-16 space-y-12">
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          <Card
            title="Nuestra Filosofía"
            text="Estamos especializados en el refuerzo educativo para primaria y secundaria. La atención individualizada y la calidad educativa son la base de nuestro modelo pedagógico, por ello nuestros grupos lo forman como máximo 7 alumnos."
          />
          <Card
            title="Desarrollo Personal"
            text="Nos enfocamos en el refuerzo académico y en el desarrollo personal de nuestros alumnos. Fomentamos la confianza y la autoestima."
          />
          <Card
            title="Un Ambiente Seguro"
            text="Todo esto ocurre en un entorno seguro, donde los estudiantes pueden ser auténticos, crear vínculos de amistad y construir una verdadera comunidad."
          />
        </div>
      </section>

      {/* Clases */}
      <section className="mt-20 text-center px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Descubre todo lo que tenemos para ti
        </h2>
        <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
          <p>
            <strong className="text-primary">Nuestras Clases:</strong> ofrecemos clases de refuerzo educativo para todas las asignaturas, desde primaria hasta 1º de bachillerato. Adaptamos las clases a las necesidades de cada momento.
          </p>
          <p>
            Hacemos un{" "}
            <span className="font-semibold" style={{ color: "#D4B400" }}>
              seguimiento global
            </span>
            , estamos pendientes de la evolución de todas las asignaturas, priorizando aquellas en las que el alumno tiene dificultades, siempre con la vista puesta en aprovechar al máximo el tiempo para que los resultados en los exámenes sean satisfactorios para todos.
          </p>
        </div>
      </section>
    </div>
  );
}
