import React from "react";
import { motion } from "framer-motion";

function EstucoFibratado3000
({ setCurrentPage }) {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-lime-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Estuco Fibratado 3000

        </motion.h2>

        <motion.p
          className="text-lg text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Revestimiento de alto rendimiento con fibras incorporadas que mejoran su resistencia y durabilidad. Pasta blanca fina, ideal para interiores, muros y pisos de baja absorción. Proporciona un acabado liso, resistente a fisuras y con excelente adherencia, ideal para proyectos que requieren mayor durabilidad y acabado profesional.
        </motion.p>

        {/* Imágenes */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 items-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {["/ef.webp", ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Imagen producto"
              className={`w-full object-contain ${
                i === 1 ? "rounded-xl shadow" : ""
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
            />
          ))}
        </motion.div>

        {/* Ficha técnica */}
        <motion.div
          className="flex justify-end mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* <a
            href="/especificacion.jpg"
            download
            className="inline-block bg-lime-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-lime-600 transition duration-300"
          >
            Descargar ficha técnica
          </a> */}
        </motion.div>

        {/* Beneficios, Especificaciones, Recomendaciones, Modo de Empleo */}
        {[
          {
            title: "Beneficios de elegir Estucont",
            items: [
              "Más de 10 años de experiencia en la región.",
              "Productos desarrollados con laboratorios de la más alta calidad.",
              "Mayor rendimiento y fácil aplicación.",
              "Asesoría personalizada para tu proyecto.",
            ],
          },
          {
            title: "Especificaciones Técnicas",
            items: [
              "Presentación: saco de 20 kg",
              "Color: blanco",
              "Rendimiento aproximado: 5 a 7 m² por saco (depende del tipo de loseta y llana)",
              "Tiempo abierto: 20 minutos",
              "Tiempo de ajuste: 30 minutos",
            ],
          },
          {
            title: "Recomendaciones",
            items: [
              "Aplicar sobre superficies limpias, niveladas y libres de polvo.",
              "No aplicar bajo lluvia o en superficies congeladas.",
              "Evitar usar en zonas con humedad extrema sin impermeabilizar.",
            ],
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-lime-600 mb-4">
              {section.title}
            </h3>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Modo de Empleo */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
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
        </motion.div>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}

export default EstucoFibratado3000;
