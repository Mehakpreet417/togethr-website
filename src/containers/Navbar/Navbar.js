import React,{useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const Navbar = ({ togglePanel }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='navbar'>
      <div className="logo">
        <img src="img/logo.png" alt="logo" />
        <h3>Togethr</h3>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
      <div className="history">
        <img src="img/icons/history-icon.png" alt="history" />
      </div>
      <button className="recommendation-button" onClick={() => {
        console.log("Recommendation button clicked.");
        togglePanel();
      }}>
        Recommendations
      </button>

      <div className="navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick ={() => setToggle(true)} />
      
      {/*if toggle is true, only then show this code*/}
      {toggle && (
      <div className="navbar-smallscreen_overlay navbar-flex__center slide-bottom">
        <div className="nav-close-button" onClick={() => setToggle(false)}>
           <img src="img/icons/close-icon.png" alt="Close" />
        </div>
        <ul className="nav-smallscreen_links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>
      )}

    </div>
    </div>
  );
}

export default Navbar;
