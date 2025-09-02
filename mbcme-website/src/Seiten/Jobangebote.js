import React from 'react';

import FAQ from '../Module/career/faq';
import Footer from '../Module/career/footer';
import Navbar from '../Module/career/navbar';
//import './ContactPage.css'; // You can create a separate CSS for ContactPage

const Karriere = () => {
  return (
    <div>
    <div className="h-screen">
      <Navbar/>
      <FAQ/>
      </div>
      <Footer/>

    </div>
  );
};

export default Karriere;
