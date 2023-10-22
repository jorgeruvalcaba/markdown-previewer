import React from 'react'

import Footer from '../Footer'
import Previewer from '../Previewer'

import './styles.css'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <Previewer />
      <Footer />
    </div>
  )
}

export default App
