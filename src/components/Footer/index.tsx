import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './styles.css'

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <div className="Footer">
      <p>
        Made with <FontAwesomeIcon icon={solid('heart')} className="heart-icon" /> by{' '}
        <a href="https://jorgeruvalcaba.dev/">Jorge Ruvalcaba</a>
      </p>
      <p>© {`${new Date().getFullYear()}`} Jorge Ruvalcaba</p>
    </div>
  )
}

export default Footer
