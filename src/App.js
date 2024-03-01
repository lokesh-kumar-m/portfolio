import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Skills from "./components/skills/skills"
import Projects from "./components/projects/projects"
import './App.css';

function App() {
  return (
     <>
     <Header />
     <main className="main">
      <Home />
      <About />
      <Skills />
      <Projects />
     </main>
     </>
  );
}

export default App;