import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function PageNosotros() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Estucont</title>
        <meta
          name="description"
          content="Conoce a Estucont, empresa líder en Torreón en fabricación y distribución de estuco y pega piso de alto rendimiento. Calidad, estilo y confianza para tus proyectos."
        />
        <meta
          name="keywords"
          content="Estucont, Torreón, estuco, pega piso, acabados, construcción, calidad, empresa de construcción"
        />
        <meta name="author" content="Estucont" />
        <html lang="es" />
      </Helmet>

      {/* Sección principal */}
      <section className="bg-white text-gray-800 py-16 px-4 text-center sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.h1 className="text-3xl font-bold mb-6 text-black sm:text-4xl">
            Sobre{" "}
            <motion.span
              className="inline-block"
              style={{ color: "#84cc16" }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Nosotros
            </motion.span>
          </motion.h1>

          <p className="text-lg sm:text-xl leading-relaxed mb-12 text-justify">
            En <strong>Estucont</strong>, somos una empresa orgullosamente
            originaria de <strong>Torreón, Coahuila</strong>, con más de una
            década de experiencia en el sector de acabados para la construcción.
            Nos especializamos en la fabricación y distribución de{" "}
            <strong>estuco</strong> y{" "}
            <strong>pega piso de alto rendimiento</strong>, desarrollados en
            colaboración con laboratorios certificados que garantizan la más
            alta calidad.
            <br />
            <br />
            Nuestro compromiso es ofrecer{" "}
            <strong>
              productos confiables, duraderos y fáciles de aplicar
            </strong>
            , adaptables a cualquier tipo de proyecto: residencial, comercial o
            industrial. Cada solución que ofrecemos refleja nuestra pasión por
            transformar espacios con{" "}
            <strong>calidad, estilo y confianza</strong>.
            <br />
            <br />
            En Estucont,{" "}
            <span className="font-semibold" style={{ color: "#84cc16" }}>
              la excelencia no es una meta, es nuestro estándar diario.
            </span>
          </p>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Misión, Visión y Valores en formato visual */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Misión */}
        <div className="bg-white text-black flex flex-col justify-center items-center p-10 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#84cc16" }}>
            MISIÓN
          </h2>
          <p className="text-lg font-light max-w-xl">
            Apoyar a nuestros clientes en sus proyectos ofreciendo productos de
            la más alta calidad en estuco y pega piso, así como asistencia
            especializada para su correcta aplicación.
          </p>
        </div>
        <div
          className="bg-cover bg-center h-64 md:h-auto"
          style={{ backgroundImage: "url('/images/mision.jpg')" }}
        ></div>

        {/* Visión */}
        <div
          className="bg-cover bg-center h-64 md:h-auto order-2 md:order-none"
          style={{ backgroundImage: "url('/images/vision.jpg')" }}
        ></div>
        <div className="bg-gray-900 text-white flex flex-col justify-center items-center p-10 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#84cc16" }}>
            VISIÓN
          </h2>
          <p className="text-lg font-light max-w-xl text-gray-300">
            Ser una empresa altamente innovadora y competitiva, reconocida por
            la calidad de nuestros productos y por satisfacer las cambiantes
            necesidades del mercado nacional e internacional.
          </p>
        </div>

        {/* Valores */}
        <div className="bg-gray-900 text-white flex flex-col justify-center items-center p-10 text-center col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#84cc16" }}>
            VALORES
          </h2>
          <ul className="text-lg font-light space-y-2 text-gray-300">
            <li>✔ Calidad</li>
            <li>✔ Honestidad</li>
            <li>✔ Innovación</li>
            <li>✔ Responsabilidad</li>
            <li>✔ Trabajo en equipo</li>
            <li>✔ Compromiso con el cliente</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default PageNosotros;
