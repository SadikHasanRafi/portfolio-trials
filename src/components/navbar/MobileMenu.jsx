export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed z-50 top-0 w-full bg-[rgb(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button className="absolute top-6 right-6 focus:outline-none cursor-pointer text-white text-3xl" onClick={() => setMenuOpen((prev) => !prev)}>
        &times;
      </button>

      <a onClick={() => setMenuOpen(false)} href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translation-y-5" }`}>
        Home
      </a>

      <a onClick={() => setMenuOpen(false)} href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translation-y-5" }`}>
        About
      </a>

      <a onClick={() => setMenuOpen(false)} href="#projects" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translation-y-5" }`}>
        Projects
      </a>

      <a onClick={() => setMenuOpen(false)} href="#contact" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translation-y-5" }`}>
        Contact
      </a>
    </div>
  );
}
