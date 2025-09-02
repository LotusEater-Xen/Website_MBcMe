import React, { useState } from 'react';
//the react-router-dom class is important for linking pages in react
import { Link } from 'react-router-dom';
import testimage from'../sources/testimage.jpg';

//Lukas Comment: Here I Imported the modules that I chose to put on the page
import Navbar from '../Module/home/navbar';
import Hero from '../Module/home/hero';
import Overview from '../Module/home/overview';
import Diashow from '../Module/home/diashow';
import Footer from '../Module/home/footer';
import '../css/style.css'; // Import the CSS for this component


const HomePage = () => {

//Lukas Tip: You can change the theming, try swapping the data-theme for light/dark !
//Lukas Workflow: Create a folder for each page, copy the modules that you need and adjust the blueprint. 
//Lukas Result: Pages that are somewhat easy to maintain and not as cluttered :D
  return (
    <div data-theme="light" className='Seite  bg-base-100'>
      
      <Navbar />
      <Diashow />
      
      <Overview />
    
     
      <Footer />
    </div>
  );
};

export default HomePage;
