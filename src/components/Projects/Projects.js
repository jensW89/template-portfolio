import React from 'react';
import './Projects.css';

import Project from '../Project/Project';
import TuringMachine from './images/turing-machine.jpg';
import AwesomeApp from './images/awesome-app.png';

const Projects = () => (
  <div className="projects-container">
      <h1 className="projects-headline">
Projects
</h1>
      <div className="projects-overview-container">
          <Project
              name="Turing Machine"
              link="https://en.wikipedia.org/wiki/Turing_machine"
              image={TuringMachine}
            />
          <Project
              name="Awesome App"
              link="https://500px.com/martinlulu"
              image={AwesomeApp}
            />
        </div>
    </div>
);

export default Projects;
