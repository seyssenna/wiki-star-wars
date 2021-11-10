import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Users from './pages/Users'
import Characters from './pages/Characters'
import Ships from './pages/Ships'
import Planets from './pages/Planet'

function App() {


  return (
   <div className="App">
    <Router>
        <Header/>
        <Navigation />

        <Routes>
          <Route path='/' exact element={<Users />}/>
          <Route path='/Characters' exact element={<Characters />}/>
          <Route path='/Ships' exact element={<Ships />}/>
          <Route path='/Planets' exact element={<Planets />}/>
        </Routes>
          
    </Router>
   </div>
  )
}

export default App
