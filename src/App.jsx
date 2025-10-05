import { useState } from "react";
import "./App.css";
import Loading from "./components/shared/Loading";
import Navbar from "./components/navbar/Navbar";
import MobileMenu from "./components/navbar/MobileMenu";
// import Home from "./components/sections/Home/Home";
import About from "./components/sections/About/About";
import Project from "./components/sections/projects/Project";
import Contact from "./components/sections/contact/Contact";
import Home from "./components/sections/home/Home";

function App() {
  const [onComplete, setOnComplete] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!onComplete && <Loading onComplete={() => setOnComplete(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${onComplete ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
        <Home />
        <About />
        <Project />
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
