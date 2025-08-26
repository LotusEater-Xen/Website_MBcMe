// src={testimage}omePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import testimage from'../quellen/testimage.jpg';

//Module für die Seite
import Navbar from '../Module/home/navbar';
import Diashow from '../Module/home/diashow';
import Hero from '../Module/home/hero';
import Overview from '../Module/home/overview';
import '../css/style.css'; // Import the CSS for this component


const HomePage = () => {
  //const [message, setMessage] = useState('Welcome to the HomePage!');

  const handleClick = () => {
    //setMessage('You clicked the button!');
  };

  return (
    <body data-theme="cupcake" className='Seite  bg-base-100'>
      <Navbar />
      <Hero />
      <Overview />
      <Diashow />
    </body>
  );
};

export default HomePage;
