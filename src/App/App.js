import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Topbar from './Topbar'
import Intro from './Intro'
import Login from './Login'
import Signup from './Signup'
import Footer from './Footer'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Router>
        <Topbar />
        <Route path='/' exact component={Intro} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Router>
      <Footer />
    </div>
  )
}

export default App
