import fatima from "../assets/fatima.jpg"; // Asegúrate de tener la foto aquí

export default function QuienesSomos() {
  return (
    <section className="bg-gray-50 py-16 px-6">
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
        {/* Imagen de Fátima */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={fatima}
            alt="Fátima - Profesora de Saberes"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Texto */}
        <div className="md:w-2/3 text-gray-800 space-y-6">
          <h1 className="text-4xl font-extrabold text-primary text-center md:text-left">Conócenos</h1>

          <p>
            ¡Hola! Soy <strong className=" text-primary px-1 rounded">
  Fátima Moreno Rivas
</strong>, la responsable y la profesora de SABERES.
          </p>
          <p>
            Mi trabajo es mi pasión. Con más de 10 años de experiencia, decidí dar un salto y abrir un espacio nuevo donde poder ayudar a cada alumno/a a mejorar en sus resultados académicos: <span className="font-medium">aprender a pensar, aprender a organizarse, aprender a estudiar</span>; pero también un lugar donde pueden evolucionar y crecer como persona: ser ellos mismos, crear lazos de amistad con otros alumnos y desarrollar su confianza y su autoestima.
          </p>

          {/* Frases destacadas */}
          <blockquote className="text-primary font-semibold border-l-4 border-secondary pl-6 italic">
            “Los límites sólo existen en tu cabeza”
          </blockquote>
          <blockquote className="text-primary font-semibold border-l-4 border-secondary pl-6 italic">
            “Aunque lo veas negro, alcanzarás la cima”
          </blockquote>

          <p>
            Hacerles ver que si se lo proponen, pueden; y que superar obstáculos es gratificante, aunque requiere de un esfuerzo por su parte; son dos de mis claves.
          </p>
          <p>
            Las demás las van poniendo ellos con su forma de ser: <span className="font-bold text-primary">cada uno aprende de una manera diferente, y nos adaptamos a ella</span>.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center " data-aos="fade-down" data-aos-duration="800">
  <a
    href="/contacto"
    className="inline-block bg-secondary text-primary font-semibold px-8 py-4 rounded-full shadow hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out text-lg"
  >
    Solicita información
  </a>
  <a
    href="/cursos-tarifas"
    className="inline-block bg-secondary text-primary font-semibold px-8 py-4 rounded-full shadow hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out text-lg"
  >
    Ver nuestras clases
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
