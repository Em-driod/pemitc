import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const products = [
  { id: 1, name: 'Classic Brown T-Shirt', price: 25.00 },
  { id: 2, name: 'White Casual Shoes', price: 95.00 },
  { id: 3, name: 'Brown Leather Wallet', price: 45.00 },
  { id: 4, name: 'White Cotton Socks', price: 12.50 },
];

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
