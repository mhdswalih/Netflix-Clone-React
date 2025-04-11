import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Player from './components/Pages/Player/Player'
import AuthHandler from './AuthHandler'

function App() {
  return (
    <Router>
      <AuthHandler />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </Router>
  )
}

export default App
