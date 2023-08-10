import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header name="header" />
      <About name="about" />
      <Skills name="skills" />
      <Projects name="projects" />
      <Contact name="contact" />
      <Footer />
    </div>
  );
}

export default App;
