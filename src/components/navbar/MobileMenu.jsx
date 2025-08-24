export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 w-full bg-[rgb(10,10,10,0.8)] flex flex-col item-center justify-center transition-all duration-300 ease-in-out 
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button onClick={ ()=> setMenuOpen( (prev) => !prev ) } >
        &times;
      </button>
    </div>
  );
}
