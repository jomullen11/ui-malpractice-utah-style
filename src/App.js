import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navigation/Nav'
import Routes from './Navigation/Routes'

const App = () => {

  return(
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes/>
      </Router>
    </div>
  )
}

export default App;
