import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Rose Bouquet", price: 500 },
    { id: 2, name: "Lily Bouquet", price: 700 },
    { id: 3, name: "Tulip Bouquet", price: 900 }
  ];

  return (
    <div className="container">
      <h1 className="title">Flower Shop</h1>

      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>

            <QuantityHandler />
          </div>
        ))}
      </div>
    </div>
  );
}

function QuantityHandler() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-box">
      <button className="btn" onClick={decrement}>-</button>
      <span className="quantity">{quantity}</span>
      <button className="btn" onClick={increment}>+</button>
    </div>
  );
}

export default App;