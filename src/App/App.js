import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Topbar from './Topbar'
import Intro from './Intro'
import Login from './Login'
import Signup from './Signup'
import Footer from './Footer'

function App() {
  return (
    <div className='App'>
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
