import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './styles.css'

const Footer: React.FunctionComponent = () => {
  return (
    <div className="Footer">
      <p>
        © {`${new Date().getFullYear()}`} <a href="https://jorgearuv.dev/">Jorge Ruvalcaba</a>
      </p>
    </div>
  )
}

export default Footer
