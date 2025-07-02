import Card from "../components/Card";

export default function CursosTarifas() {
  return (
    <section className="bg-gray-50 py-16 px-6 space-y-24">
      {/* Horarios */}
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-extrabold text-primary text-center">
          Nuestro Horario
        </h2>

        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
          Ofrecemos la posibilidad de elegir el horario que mejor se adapte a sus necesidades, facilitando así la conciliación familiar.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Primaria"
            text="De 16:00 a 17:00 y de 17:00 a 18:00"
          />
          <Card
            title="Secundaria y Bachillerato"
            text="De 18:00 a 19:30 y de 19:30 a 21:00. También disponible 3 días por semana: de 18:00 a 19:00, 19:00 a 20:00 y 20:00 a 21:00."
          />
        </div>

        <div className="text-center mt-4">
          <p className="text-md text-gray-700">
            <strong className="text-primary">De lunes a viernes:</strong> 16:00 a 21:00
          </p>
        </div>
      </div>

      {/* Tarifas */}
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-extrabold text-primary text-center">
          Nuestras Tarifas
        </h2>

        <div className="overflow-x-auto rounded-xl shadow">
          <table className="min-w-full bg-white text-center text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3">Refuerzo Educativo</th>
                <th className="px-4 py-3">2 horas</th>
                <th className="px-4 py-3">3 horas</th>
                <th className="px-4 py-3">4 horas</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-b">
                <td className="py-3 font-semibold">Primaria</td>
                <td>45 €</td>
                <td>55 €</td>
                <td>65 €</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Secundaria</td>
                <td>55 €</td>
                <td>65 €</td>
                <td>75 €</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Bachillerato</td>
                <td>--</td>
                <td>65 €</td>
                <td>75 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Promociones */}
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl font-extrabold text-primary text-center">
          Descuentos y Promociones
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Familias numerosas"
            text="50% de descuento en la matrícula."
          />
          <Card
            title="Hermanos inscritos"
            text="5% de descuento en el total de las mensualidades."
          />
          <Card
            title="Socios de AMPAs"
            text="50% en matrícula y 5% en mensualidad."
          />
        </div>

        <div className="max-w-xl mx-auto">
          <Card
            title="¡Trae un amigo!"
            text="Por cada amigo que inscribas en la academia, obtendrás 15 € de descuento en la siguiente mensualidad."
          />

   <div className="text-center mt-10" data-aos="fade-down" data-aos-duration="800">
  <a
    href="/contacto"
    className="inline-block bg-secondary text-primary font-semibold px-8 py-4 rounded-full shadow hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out text-lg"
  >
    Solicita información
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
