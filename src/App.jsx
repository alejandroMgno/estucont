import React, { useState } from "react";
import LayoutHeader from "./components/LayoutHeader";
import PageInicio from "./components/PageInicio";
import PageNosotros from "./components/PageNosotros";
import PageProductos from "./components/PageProductos";
import PageContacto from "./components/PageContacto";
import PegaBlancoPremium from "./components/productos/PbpDetalle";
import EstucoBlancoExterioreInterior from "./components/productos/EbeiDetalle";
import EstucoAntiSalitre from "./components/productos/EAS";
import EstucoFibratado3000 from "./components/productos/EF3";
import PegaAzulejoBlanco from "./components/productos/PAB";
import Resina from "./components/productos/Resina";
import BOQUILLA from "./components/productos/BQA";

function App() {
  const [currentPage, setCurrentPage] = useState("inicio");

  const renderPage = () => {
    switch (currentPage) {
      case "inicio":
        return <PageInicio setCurrentPage={setCurrentPage} />;
      case "nosotros":
        return <PageNosotros />;
      case "productos":
        return <PageProductos setCurrentPage={setCurrentPage} />;
      case "contacto":
        return <PageContacto />;
      case "pbp":
        return <PegaBlancoPremium setCurrentPage={setCurrentPage} />;
      case "ebei":
        return (
          <EstucoBlancoExterioreInterior setCurrentPage={setCurrentPage} />
        );
      case "PAB":
        return <PegaAzulejoBlanco setCurrentPage={setCurrentPage} />;
      case "EAS":
        return <EstucoAntiSalitre setCurrentPage={setCurrentPage} />;
      case "EF3":
        return <EstucoFibratado3000 setCurrentPage={setCurrentPage} />;

      case "boquilla":
        return <BOQUILLA setCurrentPage={setCurrentPage} />;

      case "resina":
        return <Resina setCurrentPage={setCurrentPage} />;

      default:
        return <PageInicio setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <LayoutHeader setCurrentPage={setCurrentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <footer className="bg-black text-white p-6 text-center text-sm">
        <div className="container mx-auto">
          <p>
            &copy; {new Date().getFullYear()} Estucont. Todos los derechos
            reservados 2025.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
