import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation/Nav'
import Routes from './Navigation/Routes'

const App = () => {

  return(
    <div>
      <Router>
        <Navigation />
        <Routes/>
      </Router>
    </div>
  )
}

export default App;
