import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './Components/assets/logo.png'
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div className='Nav__Bar'>
            <div className='Nav__Logo'>
              <img src={Logo} alt='logo' className='Logo' />
              {/* <a href='/'>Travel Quest</a> */}
            </div>

            <ul className='Nav__Links'>
              <li className='link'><Link className='links' to="/">HOME</Link></li>
              <li className='link'><Link className='links' to="/">ANOUT</Link></li>
              <li className='link'><Link className='links' to="/">CONTACT</Link></li>
              {/* <li className='link'><Link className='links' to="/">HOME</Link></li> */}
              <li className='link search'>
                <span>
                <i class="bi bi-search"></i>
                </span>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
           <Route path='/' elem={<Home />} />
           <Route path='/' elem={<About />} />
           <Route path='/' elem={<Contact />} />
           </Routes>
      </Router>
    </div>
  );
}

export default App;
