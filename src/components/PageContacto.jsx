import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function PageContacto() {
  const [formEnviado, setFormEnviado] = useState(false);

  const neonAnimation = {
    boxShadow: [
      "0 0 5px #84cc16, 0 0 10px #84cc16, 0 0 20px #84cc16, 0 0 30px #84cc16",
      "0 0 10px #b4f800, 0 0 20px #b4f800, 0 0 30px #b4f800, 0 0 40px #b4f800",
      "0 0 5px #84cc16, 0 0 10px #84cc16, 0 0 20px #84cc16, 0 0 30px #84cc16",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <Helmet>
        <title>Contáctanos | Estucont</title>
        <meta
          name="description"
          content="¿Buscas estuco o pega piso de calidad? Contáctanos hoy mismo en Estucont. Te ayudamos con tu proyecto residencial, comercial o industrial."
        />
        <meta
          name="keywords"
          content="Estucont, contacto, estuco, pega piso, Torreón, cotización, construcción"
        />
        <meta name="author" content="Estucont" />
        <html lang="es" />
      </Helmet>

      <section className="bg-black text-white min-h-screen py-16 px-4 sm:py-20 flex items-center justify-center">
        <div className="container mx-auto max-w-full px-4 sm:max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-lime-400 text-center sm:text-4xl">
            <motion.span
              className="inline-block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              ¡Contáctanos!
            </motion.span>
          </h1>
          <p className="text-base mb-6 text-center sm:text-lg">
            ¿Tienes un proyecto en mente o necesitas una cotización? Estamos listos para ayudarte.
          </p>

          {!formEnviado ? (
            <motion.div
              className="relative p-6 sm:p-8 rounded-xl bg-gray-900 overflow-hidden"
              initial={{ boxShadow: "0 0 5px #84cc16, 0 0 5px #84cc16" }}
              animate={neonAnimation}
              style={{
                borderStyle: "solid",
                borderWidth: "0 0 4px 4px",
                borderColor: "#84cc16",
              }}
            >
              {/* Puntero animado decorativo */}
              <motion.div
                className="absolute w-2 h-2 bg-lime-400 rounded-full"
                initial={{ top: 0, left: 0 }}
                animate={{
                  top: ["0%", "0%", "100%", "100%", "0%"],
                  left: ["0%", "100%", "100%", "0%", "0%"],
                  opacity: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Formulario */}
              <form
                action="https://formspree.io/f/xrbkwvjb"
                method="POST"
                onSubmit={() => setFormEnviado(true)}
                className="relative z-10"
              >
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="name" className="block text-base font-medium mb-2 sm:text-lg">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 text-sm sm:px-4 sm:py-3"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="email" className="block text-base font-medium mb-2 sm:text-lg">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 text-sm sm:px-4 sm:py-3"
                    placeholder="alejandro.rub.men@gmail.com"
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-base font-medium mb-2 sm:text-lg">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 text-white resize-none text-sm sm:px-4 sm:py-3"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-500 text-black font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 sm:py-3 sm:px-6 sm:text-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          ) : (
            <div className="bg-green-600 p-6 rounded-xl text-white text-center shadow-xl">
              <h3 className="text-xl font-semibold mb-2">¡Gracias por tu mensaje!</h3>
              <p className="text-base">Nos pondremos en contacto contigo muy pronto.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default PageContacto;
