import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';

import Skill from '../Skill/Skill'

const Skills = ({
  skillSet
}) => {
    const skillComponents = skillSet.map(skill => (
        <Skill
            key={skill.disciplin}
            disciplin={skill.disciplin}
            description={skill.description}
        />
    ))
    return(
        <div className="skills-container">
            {skillComponents}
        </div>
    )
}

Skills.propTypes = {
    skillSet: PropTypes.arrayOf(
        PropTypes.shape({
            disciplin: PropTypes.string,
            description: PropTypes.string
        })
    ),
}; 

export default Skills;