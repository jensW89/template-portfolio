import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Project = ({
  name,
  link,
  image
}) => {
    return(
        <a 
            className="project-links" 
            href={link} 
            target='_blank' 
            rel="noopener noreferrer"
        >
            <div className="project-container"> 
                <div style={{
                        width: '250px',
                        height: '250px',
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                }}/>
                <div className="project-description">   
                    <div>
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
        </a>
    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}; 

export default Project;