import { useState } from "react";
import { Navbar } from "./components/NavBar";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"
    }`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="relative z-10 w-full">
        
        <section id="About" className="min-h-screen homeSect flex items-center pt-32 md:pt-0">
          <Home isDarkMode={isDarkMode} />
        </section>

        <section id="Skill" className="min-h-screen mt-10 md:mt-0">
          <Skill isDarkMode={isDarkMode}/>
        </section>

        <section id="Project" className="min-h-screen mt-10 md:mt-0">
          <Project isDarkMode={isDarkMode}/>
        </section>

        <section id="Experience" className="min-h-screen mt-10 md:mt-0">
          <Experience isDarkMode={isDarkMode}/>
        </section>

        <section id="Contact" className="min-h-screen mt-10 md:mt-0">
          <Contact isDarkMode={isDarkMode}/>
        </section>
      </main>
    </div>
  );
}

export default App;