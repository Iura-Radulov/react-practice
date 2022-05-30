
import './App.css';
import React from "react";
import Product from './products';


function App() {
  return (
    <div>
      <h1>Best selling products</h1>
      <Product
        imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="Tacos With Lime"
        price={10.99}
        quantity={10}
      />
      <Product
      imageUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      name="Fries and Burger"
        price={14.29}
        quantity={30}
    />
    </div>
  );
}


export default App;
