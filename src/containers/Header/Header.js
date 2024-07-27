import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_text">
        <p>Find your perfect product Togethr</p>
        <a href="#home">Learn More</a>
      </div>
      <div className="close-icon">
        <img src="img/icons/close-icon.png" alt="close" />
      </div>
    </div>
  )
}



export default Header