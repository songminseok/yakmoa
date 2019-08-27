import React from 'react'
import './App.css'
import Topbar from './Topbar'
import Main from './Main'
import Footer from './Footer'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Topbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
