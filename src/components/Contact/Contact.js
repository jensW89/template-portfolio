import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

import FaTwitter from 'react-icons/lib/fa/twitter';
import GoMail from 'react-icons/lib/go/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

const Contact = ({
    linkedInUrl,
    twitterUrl,
    mail
}) => (
    <div className="contact-container">
        <h2 className="contact-headline">Contact</h2>
        <div className="contact-icons">
            <a 
                className="contact-links" 
                href={mail}
                rel="noopener noreferrer"
            >
                <GoMail className="contact-icon"/>
            </a>
            <a 
                className="contact-links" 
                href={twitterUrl} 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <FaTwitter className="contact-icon"/>
            </a>
            <a 
                className="contact-links" 
                href={linkedInUrl}
                target='_blank' 
                rel="noopener noreferrer"
            >
                <FaLinkedin className="contact-icon"/>
            </a>           
        </div>
    </div>
  )

Contact.propTypes = {
    linkedInUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    mail: PropTypes.string
};   

export default Contact;