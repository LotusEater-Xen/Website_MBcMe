// src/HomePage.js
import React, { useState } from 'react';
//import './HomePage.css'; // Import the CSS for this component

const HomePage = () => {
  const [message, setMessage] = useState('Welcome to the HomePage!');

  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">{message}</h1>
      <button className="homepage-button" onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default HomePage;
