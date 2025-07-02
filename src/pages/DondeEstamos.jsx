import { MapPin } from "react-feather"; // Necesitas instalar react-feather si no lo tienes

export default function DondeEstamos() {
  return (
    <section className="bg-gray-50 py-16 px-6 ">
      <div className="max-w-4xl mx-auto space-y-10 text-center md:text-left">
        {/* Icono + Título */}
        <div className="flex flex-col items-center md:items-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center md:text-left">
            ¿Dónde estamos?
          </h2>
        </div>

        {/* Dirección */}
        <div className="space-y-4 flex flex-col items-center md:items-center">
          <p className="text-base md:text-lg text-gray-700 text-center md:text-left">
            Nos encontramos en la siguiente dirección:
          </p>
          <p className="text-lg font-semibold text-primary text-center md:text-center">
            C/ Albaicín, nº 2ª, oficina 2 <br /> Bormujos (Sevilla)
          </p>
          <p className="text-sm text-gray-600 text-center md:text-left">
            (Edificio de la NOTARÍA, junto a SUPERMERCADO MAS)
          </p>
        </div>

        {/* Mapa */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.4598680280385!2d-6.081173396599333!3d37.368076028904696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12133af5ea8481%3A0xbe6093406c7ced7f!2sC.%20Albaic%C3%ADn%2C%202A%2C%20Oficina%202%2C%2041930%20Bormujos%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1733647146779!5m2!1ses!2ses"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa ubicación"
          ></iframe>
        </div>

        {/* Botón CTA */}
        <div className="text-center mt-6" data-aos="fade-down" data-aos-duration="800">
          <a
            href="https://www.google.com/maps?q=37.36811889360275,-6.080111149167616"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow hover:brightness-110 transition"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}
