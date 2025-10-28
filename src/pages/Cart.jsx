import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {cart.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />}
              <h3 style={{ marginTop: '10px' }}>{item.title}</h3>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
