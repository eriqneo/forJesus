import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import Jcc from './Pages/Jcc';




function App() {
//Go to Top of page after Loading
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    
    <>
      
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/jcc' element={<Jcc />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      </Router>
    </>
    
  );
}

export default App;
