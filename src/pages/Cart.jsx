import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '20px', textAlign: 'right', fontWeight: 'bold' }}>
            <h3>Total: ${getTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
