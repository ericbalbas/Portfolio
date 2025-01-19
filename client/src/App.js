
import './App.css';
import { Banner } from './components/Banner';
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticleBackground from './components/Particle';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  const contactRef = useRef(null);
  return (
    <div className="App">
      <ParticleBackground />
      <NavBar contactRef={contactRef} />
      <Banner contactRef={contactRef}/>
      <Skills />
      <Project />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
