import React from "react";

function BOQUILLA
({ setCurrentPage }) {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-[#41921c] text-center text-lime-600">
         Junta Sin Arena / Boquilla


        </h2>
        <p className="text-lg text-center mb-10">
          Material de alto rendimiento para rellenar juntas en porcelanatos y cerámicos de gran formato. Pasta fina y resistente, ideal para interiores, 
          muros y pisos de baja absorción, que garantiza acabados duraderos y estéticos.
        </p>

        {/* Imágenes */}
        <div className="grid gap-8 sm:grid-cols-2 items-center mb-12">
          <img
            src="/boquilla.webp"
            alt="Producto"
            className="w-full object-contain "
          />
          {/* <img
            src="/especificacion.jpg"
            alt="Especificaciones técnicas"
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
            Beneficios de elegir Estucont
          </h3>
          <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
            <li>Más de 10 años de experiencia en la región.</li>
            <li>
              Productos desarrollados con laboratorios de la más alta calidad.
            </li>
            <li>Mayor rendimiento y fácil aplicación.</li>
            <li>Asesoría personalizada para tu proyecto.</li>
          </ul>
        </div>

        {/* Especificaciones */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">
            Especificaciones Técnicas
          </h3>
          <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
            <li>Presentación: saco de 5 kg</li>
            <li>Color: blanco</li>
            <li>
              Rendimiento aproximado: 5 a 7 m² por saco (depende del tipo de
              loseta y llana)
            </li>
            <li>Tiempo abierto: 20 minutos</li>
            <li>Tiempo de ajuste: 30 minutos</li>
          </ul>
        </div>

        {/* Recomendaciones */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">
            Recomendaciones
          </h3>
          <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
            <li>
              Aplicar sobre superficies limpias, niveladas y libres de polvo.
            </li>
            <li>No aplicar bajo lluvia o en superficies congeladas.</li>
            <li>
              Evitar usar en zonas con humedad extrema sin impermeabilizar.
            </li>
          </ul>
        </div>

        {/* Modo de empleo */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">
            Modo de Empleo
          </h3>
          <ol className="list-decimal list-inside text-base text-gray-700 space-y-2">
            <li>
              Verter el contenido del saco en agua limpia (aproximadamente 5.5 L
              por saco).
            </li>
            <li>
              Mezclar con batidor eléctrico hasta obtener una pasta homogénea.
            </li>
            <li>Dejar reposar 5 minutos y volver a mezclar.</li>
            <li>Aplicar con llana dentada sobre la superficie.</li>
            <li>
              Colocar la pieza presionando ligeramente para asegurar adherencia.
            </li>
          </ol>
        </div>

        {/* Botones */}
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

export default BOQUILLA
;
