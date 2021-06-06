import React from 'react';
import './Navbar.css';
const Navbar = (props) => {


  const handleButtonRoute = (e) => {
    e.target.classList.add('withBorder')
    switch (e.target.id) {
      case 'home':
        window.location.pathname = '/';

        break;
      case 'play':
        window.location.pathname = '/play';
        break;
      case 'contact':
        window.location.pathname = '/contact';
        break;
      default:
        window.location.pathname = '/';
        break;
    }
  };


  return (
    <div className="navbar" id="navbar">
      <span className="navItem" onClick={(e) => handleButtonRoute(e)} id="home">
        Home
      </span>
      <span className="navItem" onClick={(e) => handleButtonRoute(e)} id="play">
        Play
      </span>
      <span className="navItem" onClick={(e) => handleButtonRoute(e)} id="contact">
        Contact
      </span>
    </div>
  );
};

export default Navbar;
