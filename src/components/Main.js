import React from 'react';
import canva from "./assets/canva-of-myself.png";
import project from "./assets/project-num.png";
import island from "./assets/island-num.png";
import balloon from "./assets/balloon-num.png";

function Main() {
  return (
    <main className="main">
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I am Yaraili Albino, based in North Carolina. As a Web Designer, 
          I enjoy designing websites. I have designed many websites using HTML, CSS and JavaScript.
          I have an extensive experience for over 2 years on web design and graphic design.
        </p>
      </section>
      <div className="image-projects-container">
        <img src={canva} alt="Profile" style={{ width: '300px', height: '500px' }} />
        <div className="projects">
          <h2>Projects</h2>
          <div className="project-images">
            <img src={project} alt="Project 1" style={{ width: '300px', height: '300px' }} />
            <img src={island} alt="Project 2" style={{ width: '300px', height: '300px' }} />
            <img src={balloon} alt="Project 3" style={{ width: '300px', height: '300px' }} />
          </div>
        </div>
      </div>
      <section className="skills">
        {/* Skills section content */}
      </section>
      <section className="experience">
        {/* Experience section content */}
      </section>
    </main>
  );
}

export default Main;
