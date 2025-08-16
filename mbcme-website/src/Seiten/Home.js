// src={testimage}omePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import testimage from'../quellen/testimage.jpg';

//Module für die Seite
import Diashow from '../Module/Diashow';
import MehrErfahren from '../Module/MehrErfahren';
import Kurzübersicht from '../Module/Kurzübersicht';
import '../css/style.css'; // Import the CSS for this component


const HomePage = () => {
  //const [message, setMessage] = useState('Welcome to the HomePage!');

  const handleClick = () => {
    //setMessage('You clicked the button!');
  };

  return (
    <div className='Seite'>
    <div className='Kurzübersicht'>
      <Kurzübersicht />
    </div>
    <div className='Links'>
      <MehrErfahren />
    </div>
    <div className='Scroller'>
    <Diashow />
    </div>
    </div>
  );
};

export default HomePage;
