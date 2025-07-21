import React from "react";

function EstucoAntiSalitre({ setCurrentPage }) {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-lime-600">
          Estuco Anti-Salitre Estucont
        </h2>
        <p className="text-lg text-center mb-10">
          Solución profesional para prevenir y eliminar la formación de salitre en muros. Este estuco de alto desempeño ofrece un acabado liso, resistente y duradero, ideal para interiores y exteriores en zonas con alta humedad o problemas de eflorescencia.
        </p>

        {/* Imágenes */}
        <div className="grid gap-8 sm:grid-cols-2 items-center mb-12">
          <img
            src="/EAS.webp"
            alt="Producto Estuco Anti-Salitre Estucont"
            className="w-full object-contain"
          />
          {/* <img
            src="/especificacion.jpg"
            alt="Ficha técnica del Estuco Anti-Salitre Estucont"
            className="w-full object-contain rounded-xl shadow"
          /> */}
        </div>

        <div className="flex justify-end mt-6">
          <a
            href="/especificacion.jpg"
            download
            className="inline-block bg-lime-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-lime-600 transition duration-300"
          >
            Descargar ficha técnica
          </a>
        </div>

        {/* Beneficios */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">
            ¿Por qué elegir Estucont?
          </h3>
          <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
            <li>Previene eficazmente el salitre en muros y superficies porosas.</li>
            <li>Fórmula desarrollada con tecnología antihumedad de alta resistencia.</li>
            <li>Acabado fino, liso y de alta adherencia en muros interiores y exteriores.</li>
            <li>Fácil de aplicar y compatible con pinturas o acabados decorativos.</li>
            <li>Soporte técnico y asesoría especializada en cada etapa del proyecto.</li>
          </ul>
        </div>

        {/* Especificaciones Técnicas */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">
            Especificaciones Técnicas
          </h3>
          <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
            <li>Presentación: saco de 40 kg</li>
            <li>Color: blanco</li>
            <li>Rendimiento aproximado: 4 a 6 m² por saco (dependiendo del grosor de aplicación)</li>
            <li>Espesor recomendado: 2 a 5 mm</li>
            <li>Tiempo de secado al tacto: 60 minutos</li>
            <li>Listo para pintar en: 24 a 48 horas</li>
          </ul>
        </div>

        {/* Recomendaciones */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">
            Recomendaciones de Aplicación
          </h3>
          <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
            <li>Aplicar sobre superficies limpias, niveladas y libres de polvo o salitre suelto.</li>
            <li>No aplicar bajo lluvia, en muros mojados o en condiciones de congelamiento.</li>
            <li>Para muros con humedad constante, se recomienda impermeabilizar previamente.</li>
          </ul>
        </div>

        {/* Modo de empleo */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">
            Modo de Empleo
          </h3>
          <ol className="list-decimal list-inside text-base text-gray-700 space-y-2">
            <li>Verter el contenido del saco en un recipiente con agua limpia (aproximadamente 5.5 L por saco).</li>
            <li>Mezclar con batidor eléctrico hasta obtener una pasta homogénea y sin grumos.</li>
            <li>Dejar reposar la mezcla durante 5 minutos y volver a mezclar antes de aplicar.</li>
            <li>Aplicar con llana metálica o espátula sobre el área a tratar.</li>
            <li>Dejar secar y aplicar una segunda capa si es necesario. Lijar suavemente antes de pintar.</li>
          </ol>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => setCurrentPage("productos")}
            className="bg-gray-200 text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300 text-base"
          >
            Volver a productos
          </button>
          <button
            onClick={() => setCurrentPage("contacto")}
            className="bg-lime-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition duration-300 transform hover:scale-105 text-base"
          >
            Cotizar producto
          </button>
        </div>
      </div>
    </section>
  );
}

export default EstucoAntiSalitre;
