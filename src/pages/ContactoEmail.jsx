import { useState } from "react";

export default function Contacto() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/saberes.aprender.conectando@gmail.com", {
      method: "POST",
      body: data,
    });

    setShowModal(true);

    // Cierra el modal y redirige a home después de 2 segundos
    setTimeout(() => {
      setShowModal(false);
      window.location.href = "/";
    }, 2000);
  };

  return (
    <section className="bg-gray-50 py-16 px-6" id="contacto">
      <div className="max-w-4xl mx-auto space-y-12" data-aos="fade-down" data-aos-duration="800">
        <h2 className="text-4xl font-extrabold text-primary text-center">
          Contacta con nosotros
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-xl mx-auto">
          Puedes enviarnos un mensaje directo o contactar por WhatsApp. Estaremos encantados de ayudarte.
        </p>

        {/* Formulario con envío manual */}
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 space-y-6">
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-secondary text-primary font-semibold px-8 py-3 rounded-full shadow hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
            >
              Enviar mensaje
            </button>
          </div>
        </form>

        {/* Botón WhatsApp */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/34610854449"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-opacity-90 transition-all duration-300 ease-in-out"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg px-8 py-6 text-center max-w-sm mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-2">¡Gracias!</h3>
            <p className="text-gray-700">Tu mensaje se ha enviado correctamente.</p>
          </div>
        </div>
      )}
    </section>
  );
}
