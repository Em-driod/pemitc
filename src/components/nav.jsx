import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Nav = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-wider hover:scale-105 transition-transform duration-300"
        >
          starboy
        </Link>

        <div className="flex gap-6 items-center text-lg font-medium">
          <Link
            to="/Card"
            className="hover:text-yellow-300 hover:scale-105 transition-all duration-300"
          >
            wizkid
          </Link>

          <Link
            to="/service"
            className="hover:text-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Ibro omo iya
          </Link>

          <p className="hover:text-yellow-300 hover:scale-105 transition-all duration-300 cursor-pointer">
            davido
          </p>

          <Link
            to="/profile/Guest"
            className="hover:text-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Profile
          </Link>

          <Link
            to="/cart"
            className="hover:text-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
