import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

const Portfolio = ({
  name,
  favouriteSkill,
  education,
  socialSkill,
  skillSet,
  githubUrl,
  linkedInUrl,
  twitterUrl,
  mail,
}) => (
  <div className="portfolio">
    <Header 
      githubUrl={githubUrl}
    />
    <div className="portfolio-main">
      <Banner 
        name={name}
        favouriteSkill={favouriteSkill}
        education={education}
        socialSkill={socialSkill}
      />
      <Skills
        skillSet={skillSet}
      />
      <Projects />
      <Contact 
        linkedInUrl={linkedInUrl}
        twitterUrl={twitterUrl}
        mail={mail}
      />
    </div>
  </div>
  )

Portfolio.propTypes = {
  name: PropTypes.string,
  favovriteSkill: PropTypes.string,
  education: PropTypes.string,
  socialSkill: PropTypes.string,
  linkedInUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  mail: PropTypes.string,
  githubUrl: PropTypes.string,
  skillSet: PropTypes.arrayOf(
    PropTypes.shape({
      disciplin: PropTypes.string,
      description: PropTypes.string
    })
  )
}; 

export default Portfolio;