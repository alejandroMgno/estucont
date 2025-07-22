import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LayoutHeader({ setCurrentPage, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const navLinks = ["inicio", "nosotros", "productos", "contacto"];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-28 shadow-lg relative z-20 bg-white"
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <motion.img
          src="/ESTUCONT.png"
          alt="Estucont Logo"
          className="h-[90px] object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Menú escritorio */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((page) => (
            <motion.button
              key={page}
              onClick={() => handleNavigation(page)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`text-lg font-medium transition-colors ${
                currentPage === page
                  ? "text-lime-600 underline underline-offset-4"
                  : "text-black hover:text-lime-500"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </motion.button>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-black focus:outline-none z-30"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 z-10"
          >
            <ul className="flex flex-col items-center space-y-4">
              {navLinks.map((page) => (
                <motion.li key={page} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => handleNavigation(page)}
                    className={`text-lg py-2 w-full text-center transition-colors ${
                      currentPage === page
                        ? "text-lime-600 font-semibold"
                        : "text-black hover:text-lime-500"
                    }`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default LayoutHeader;
