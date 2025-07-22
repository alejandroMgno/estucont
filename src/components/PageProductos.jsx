import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function PageProductos({ setCurrentPage }) {
  const products = [
    {
      name: "Pega Azulejo Blanco Premium",
      description:
        "Adhesivo de alto rendimiento para porcelanatos y cerámicos de gran formato.",
      image: "/pbp.webp",
      pageKey: "pbp",
    },
    {
      name: "Estuco Blanco Exterior e Interior",
      description:
        "Acabado liso y duradero para interiores y exteriores, resistente a la humedad",
      image: "/EB.webp",
      pageKey: "ebei",
    },
    {
      name: "Pega Azulejo Blanco",
      description: "Adhesivo para porcelanatos y cerámicos de gran formato.",
      image: "/PAB.webp",
      pageKey: "PAB",
    },
    {
      name: "Estuco Anti-Salitre",
      description:
        "Protección duradera contra la humedad y el salitre. Ideal para muros interiores y exteriores.",
      image: "/EAS.webp",
      pageKey: "EAS",
    },
    {
      name: "Estuco Fibratado 3000",
      description:
        "Estuco reforzado con fibras para mayor resistencia.  Ideal para muros interiores y exteriores.",
      image: "/ef.webp",
      pageKey: "EF3",
    },
    {
      name: "Junta Sin Arena / Boquilla",
      description:
        "Ideal para juntas en porcelanatos y cerámicos, ofrece acabado duradero y uniforme.",
      image: "/boquilla.webp",
      pageKey: "boquilla",
    },
    {
      name: "Resina",
      description:
        "Protección duradera contra la humedad y el salitre. Ideal para muros interiores y exteriores.",
      image: "/resina.webp",
      pageKey: "resina",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:py-20">
      <Helmet>
        <title>Productos | Estucont - Estucos, pegamentos y acabados</title>
        <meta
          name="description"
          content="Descubre nuestra gama de productos: estucos, pegamentos, resinas y boquillas de alta calidad para construcción y acabados. Estucont, expertos en soluciones duraderas."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Productos | Estucont" />
        <meta
          property="og:description"
          content="Explora nuestra línea de productos para construcción: estucos, pega piso, resinas, boquillas y más. Calidad garantizada."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto max-w-full px-4">
        {/* Título con animación */}
        <motion.h2
          className="text-3xl font-bold mb-8 text-black text-center sm:text-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros{" "}
          <motion.span
            className="text-lime-500 inline-block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            Productos
          </motion.span>
        </motion.h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain bg-white p-2 sm:h-56"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-black mb-2 sm:text-2xl">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed sm:text-base">
                  {product.description}
                </p>
                <button
                  onClick={() => setCurrentPage(product.pageKey)}
                  className="mt-4 bg-lime-500 text-black font-bold py-2 px-5 rounded-lg hover:bg-lime-600 transition-colors text-sm sm:text-base"
                >
                  Ver detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PageProductos;
