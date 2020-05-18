import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <div className="Footer">
      <p>
        Made with <FontAwesomeIcon className="heart-icon" icon={faHeart} /> by{' '}
        <a href="https://jorgeruvalcaba.dev/">Jorge Ruvalcaba</a>
      </p>
      <p>© {`${new Date().getFullYear()}`} Jorge Ruvalcaba</p>
    </div>
  );
};

export default Footer;
