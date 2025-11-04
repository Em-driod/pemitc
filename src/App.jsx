import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './pages/home';
import ServicePage from './pages/servicePage';
import Cart from './pages/Cart';
import Contact from './pages/contact'; // Corrected path
import About from './pages/about';
import ProductsPage from './pages/ProductsPage'; // Import the new page
import { ThemeContext } from './ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 transition-colors duration-300`}>
        <Nav />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<ProductsPage />} /> {/* Add the new route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;