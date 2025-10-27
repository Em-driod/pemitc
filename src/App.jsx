import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import CardList from './components/props';
import Footer from './components/footer';
import Home from './pages/home';
import ServicePage from './pages/servicePage';
const App = () => {
  return (
    
      <Router>
        
       <div>
        <Nav />
        <Routes>
          <Route path='/card' element={<CardList />} />
          <Route path='/' element={<Home />} />
          <Route  path='/service' element={<ServicePage />} /> 
        </Routes>
       </div>
       <Footer />
      </Router>

    
  )
}

export default App