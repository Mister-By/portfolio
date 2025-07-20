import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#080c24] text-white px-6 py-5 flex items-center top-0 justify-between fixed w-full z-50 shadow-md">
      <a href="#" className="text-2xl font-bold">Portfolio</a>

      {/* Burger menu button */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {(!isOpen)? (
            <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </div>
        ):
        (
            <div className="space-y-1">
            <span className >×</span>
            </div>
        )}

      </button>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:block mr-4 w-[500px]">
        <ul className="flex gap-6 text-lg justify-evenly items-center">
          <li><a href="#" className="hover:text-blue-100">Accueil</a></li>
          <li><a href="#p" className="hover:text-blue-100">Parcours</a></li>
          <li><a href="#" className="hover:text-blue-100">Expérience</a></li>
          <li><a href="#" className="hover:text-blue-100">Contact</a></li>
        </ul>
      </nav>

      {/* Navigation (Mobile off-canvas) */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a0f2c] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col mt-20 ml-6 gap-6 text-lg">
          <li><a href="#" onClick={() => setIsOpen(false)}>Accueil</a></li>
          <li><a href="#p" onClick={() => setIsOpen(false)}>Parcours</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Expérience</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Background overlay when menu is open */}
      {/* {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )} */}
    </header>
  );
}
