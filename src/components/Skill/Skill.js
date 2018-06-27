import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css';

import GoDatabase from 'react-icons/lib/go/database';
import GoBrowser from 'react-icons/lib/go/browser';
import FaPiedPiperAlt from 'react-icons/lib/fa/pied-piper-alt';

const Skill = ({
  disciplin,
  description
}) => {
    let icon
    switch(disciplin) {
        case "FRONTEND":
            icon = <GoBrowser className="skill-icon" />
            break;
        case "BACKEND":
            icon = <GoDatabase className="skill-icon" />;
            break;
        case "METHODOLOGIES":
            icon = <FaPiedPiperAlt className="skill-icon" />;
            break;
        default:
            icon = "";
    }
    return(
        <div className="skill-container">
            <div className="skill-icon-disciplin">
                {icon}
            </div>    
            <div className="skill-description">
                <h2 className="skill-headline-disciplin">{disciplin}</h2>
                <p className="skill-description-text">{description}</p>
            </div>
        </div>
    )
}

Skill.propTypes = {
    disciplin: PropTypes.string.isRequired,
    description: PropTypes.string,
}; 

export default Skill;