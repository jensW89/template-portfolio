import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import FaGitHub from 'react-icons/lib/fa/github';

const Header = ({
    githubUrl
}) => (
    <header className="app-header">
        <a 
            className="header-links" 
            href={githubUrl} 
            target='_blank' 
            rel="noopener noreferrer"
        >
            <FaGitHub className="header-icons" />
        </a>
    </header>
  )

Header.propTypes = {
    githubUrl: PropTypes.string
};   

export default Header;