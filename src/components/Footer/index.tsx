import React from 'react';

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <div className="Footer">
      <p>
        Made with love by <a href="https://jorgeruvalcaba.dev/">Jorge Ruvalcaba</a>
      </p>
      <p>© {`${new Date().getFullYear()}`} Jorge Ruvalcaba</p>
    </div>
  );
};

export default Footer;
