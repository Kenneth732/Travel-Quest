import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './Components/assets/logo.png';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <header className='header'>
          <nav>
            <div className='Nav__Bar'>
              <div className='Nav__Logo'>
                <img src={Logo} alt='logo' className='Logo' />
              </div>

              <ul className='Nav__Links'>
                <li className='link'><Link className='links' to="/">HOME</Link></li>
                <li className='link'><Link className='links' to="/about">ABOUT</Link></li>
                <li className='link'><Link className='links' to="/contact">CONTACT</Link></li>
                <li className='link search'>
                  <span>
                    <i className="bi bi-search"></i>
                  </span>
                </li>
              </ul>
            </div>
          </nav>

          <div className="section__container header__container">
            <h1>Embark on a Journey Beyond: Explore with Travel Quest</h1>
            <h4>Unveil the Marvels of Our World and Beyond with Travel Quest</h4>
            <button className="btn">
              Explore More <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




