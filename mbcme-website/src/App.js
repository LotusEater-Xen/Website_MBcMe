// src/App.js
import React, {useEffect, useRef} from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';
import Home from './Seiten/Home';
import Contact from './Seiten/Kontakt';
import './App.css';


function App() {
  return (
     <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
  );
}

export default App;
