import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function PageInicio({ setCurrentPage }) {
  return (
    <>
      {/* Etiquetas SEO en <head> */}
      <Helmet>
        <title>Estucont | Soluciones en Estuco y Pega Piso</title>
        <meta
          name="description"
          content="Estucont ofrece estuco y pega piso de alta calidad para transformar tus espacios con acabados duraderos y estilo profesional."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <section
        className="bg-white text-gray-800 py-16 px-4 text-center sm:py-20"
        role="main"
        aria-label="Página de inicio Estucont"
      >
        <div className="container mx-auto max-w-full px-4">
          {/* Título animado */}
          <motion.h1
            className="text-4xl font-extrabold mb-4 text-black sm:text-5xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Transformamos tus espacios con{' '}
            <motion.span
              className="text-lime-500 text-[#41921c] inline-block"
              animate={{
                y: [0, -8, 0], // sube, baja
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              calidad y estilo
            </motion.span>
          </motion.h1>

          {/* Párrafo animado */}
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            En Estucont, somos expertos en estuco y pega piso, ofreciendo
            soluciones duraderas y acabados impecables para tus proyectos.
          </motion.p>

          {/* Imagen animada */}
          <motion.img
            src="/gestucont.png"
            alt="Aplicación profesional de estuco en muro interior"
            className="mx-auto mb-8 rounded-lg max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            loading="lazy"
          />

          {/* Botón animado */}
          <motion.button
            onClick={() => setCurrentPage('productos')}
            className="bg-lime-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            aria-label="Conoce nuestros productos de estuco y pega piso"
          >
            Conoce nuestros productos
          </motion.button>
        </div>
      </section>
    </>
  );
}

export default PageInicio;
