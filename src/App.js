import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Skills from "./components/skills/skills"
import Projects from "./components/projects/projects"
import Qualifications from "./components/qualification/qualifications"
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
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
      <Qualifications />
      <Contact/>
      <Footer/>
     </main>
     </>
  );
}

export default App;
