import React from 'react';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-6"> {/* Push content below fixed navbar */}
        <section id="about">
          <About />
        </section>

        <section id="skill">
          <Skill />
        </section>

        <section id="project">
          <Project />
        </section>

        <section id="contact">
          <Contact/>
        </section>
        
      </main>
    </>
  );
};

export default App;
