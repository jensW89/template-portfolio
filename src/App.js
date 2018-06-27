import React, { Component } from 'react';

import Portfolio from './components/Portfolio/Portfolio'
class App extends Component {
  render() {
    return (
        <Portfolio 
          name="John Doe"
          favouriteSkill="Full stack developer"
          education="Engineer (M.Sc.)"
          socialSkill="Agile team player"
          githubUrl="https://github.com/"
          linkedInUrl="https://linkedin.com"
          twitterUrl="https://twitter.com/"
          mail="mailto:martiluax@gmail.com"
          skillSet={[
            {
                disciplin:"FRONTEND",
                description: "HTML5, ES6, SASS, React, Redux, Storybook, Jest"
            },
            {
                disciplin:"BACKEND",
                description: "Node.js, Java Spring, MongoDB"
            },
            {
                disciplin:"METHODOLOGIES",
                description: "Agile, Lean, DevOps, Continuous Delivery, Test-Driven Development"
            },
          ]}
        />
    );
  }
}

export default App;
