import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import CardList from './components/props';
import Footer from './components/footer';
import Home from './pages/home';
import ServicePage from './pages/servicePage';
import Profile from './pages/profile';
import Cart from './pages/Cart';
const App = () => {
  return (
    
      <Router>
        
       <div>
        <Nav />
        <Routes>
          <Route path='/card' element={<CardList />} />
          <Route path='/' element={<Home />} />
          <Route  path='/service' element={<ServicePage />} /> 
                    <Route path='/profile/:name' element={<Profile />} />
                    <Route path='/cart' element={<Cart />} />
                  </Routes>
       </div>
       <Footer />
      </Router>

    
  )
}

export default App