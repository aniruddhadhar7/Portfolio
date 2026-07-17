import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Skills from "./components/pages/Skills.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contact from "./components/pages/Contact.jsx";
import Chatbot from "./components/Chatbot.jsx";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light-theme");
    } else {
      root.classList.remove("light-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const particlesOptions = {
    fpsLimit: 60,
    background: {
      color: "transparent",
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      color: {
        value: theme === "dark" ? "#00f0ff" : "#0284c7",
      },
      links: {
        color: theme === "dark" ? "#00f0ff" : "#0284c7",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.8,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {init && (
        <Particles
          key={theme}
          id="tsparticles"
          options={particlesOptions}
        />
      )}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Chatbot />
    </>
  );
}

export default App;
