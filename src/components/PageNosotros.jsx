import React from "react";
import { Helmet } from "react-helmet";

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

      <section className="bg-white text-gray-800 py-16 px-4 text-center sm:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold mb-6 text-black sm:text-4xl">
            Sobre <span className="text-lime-500">Nosotros</span>
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed">
            En <strong>Estucont</strong>, somos una empresa orgullosamente originaria de{" "}
            <strong>Torreón, Coahuila</strong>, con más de una década de experiencia en el
            sector de acabados para la construcción. Nos especializamos en la fabricación y
            distribución de <strong>estuco</strong> y <strong>pega piso de alto rendimiento</strong>,
            desarrollados en colaboración con laboratorios certificados que garantizan la más alta calidad.
            <br /><br />
            Nuestro compromiso es ofrecer <strong>productos confiables, duraderos y fáciles de aplicar</strong>,
            adaptables a cualquier tipo de proyecto: residencial, comercial o industrial. Cada solución que ofrecemos refleja nuestra pasión por transformar espacios con{" "}
            <strong>calidad, estilo y confianza</strong>.
            <br /><br />
            En Estucont, <span className="text-lime-500 font-semibold">la excelencia no es una meta, es nuestro estándar diario.</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default PageNosotros;
