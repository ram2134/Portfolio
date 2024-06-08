import "./App.scss";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";
import particles from "./utils/particles";

function App() {
  const location = useLocation();

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticlesJsInHomePage && (
        <Particles id="particles" options={particles} />
      )}
      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="App_main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
