import React from 'react';
import './RecommendationPanel.css';

function RecommendationPanel({ isPanelOpen, togglePanel }) {
  console.log("RecommendationPanel render. isPanelOpen:", isPanelOpen);
  return (
    <div className={`recommendation-panel slide-bottom ${isPanelOpen ? 'open' : 'hide-on-small'}`}>
      <div className="overlay__close " onClick={togglePanel}>
        <img src="img/icons/close-icon.png" alt="Close" />
      </div>
      <div className="progress-section">
        <img className="loader" src="img/icons/loader-icon.png" alt="loader-img" />
        <div className="progress-text">
          <h3>5 steps completed</h3>
          <img className="arrow-down" src="img/icons/arrow-down.png" alt="arrow-down" />
        </div>
      </div>
      <div className="recommendation-message">
        <div className="logo-icon"><img src="img/pink-logo-icon.png" alt="logo" /></div>
        <p>
          Based on what you have shared, your requirements for performance should be fulfilled by an i5 11th gen and above, and a graphics card similar to GTX 3050. Below are my recommendations, please let me know if you have any questions!
        </p>
      </div>
      <div className="sources-section">
        <div className="sources">
          <img src="img/icons/codesources-icon.png" alt="sources" />
          <h3>Sources</h3>
        </div>
        <img className="arrow-down" src="img/icons/arrow-down.png" alt="arrow-down" />
      </div>
      <div className="panel-product-cards">
        <div className="panel-product-card">
        <div className="panel-product-image"><img src="img/laptops/laptop3.png" alt="laptop"  /></div>
          <div className="panel-product-info">
            <div className="panel-product-text">
              <h3 className="product-name">HP Omen 15</h3>
              <div className="product-des"><p className="panel-product-des">Performance-focused with AMD Ryzen 5, NVIDIA GTX 1660 Ti, high refresh rate display, and customizable lighting.
              </p></div>
            </div>
            <div className="panel-product-price-button">
              <div className="panel-product-price">
                <p>Price:</p>
                <span>₹72,000</span>
              </div>
              <div className="panel-product-view"><button >View product</button></div>
            </div>
          </div>
        </div>
        <div className="panel-product-card">
          <div className="panel-product-image"><img src="img/laptops/laptop4.png" alt="laptop"  /></div>
          <div className="panel-product-info">
            <div className="panel-product-text">
              <h3 className="product-name">Dell G5 15</h3>
              <div className="product-des"><p className="panel-product-des">Ideal for work-play balance with Intel i5 11th gen, NVIDIA GTX 1660 Ti, efficient cooling, and sleek design.
              </p></div>
            </div>
            <div className="panel-product-price-button">
              <div className="panel-product-price">
                <p>Price:</p>
                <span>₹73,500</span>
              </div>
              <div className="panel-product-view"><button className="panel-product-view">View product</button></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="actions-section">
        <button className="action-button">
          <img src="img/icons/search-icon.png" alt="sources" />
          show me more
        </button>
        <button className="action-button">
          <img src="img/icons/pen-tool.png" alt="sources" />
          Help me narrow down
        </button>
      </div>
      <div className="search-section">
        <div className="input-wrapper">
          <input type="text" placeholder="Find your Product" />
          <img className="icon bulb-icon" src="img/icons/bulb-icon.png" alt="bulb" />
          <img className="icon arrow-icon" src="img/icons/arrow-right-button.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default RecommendationPanel;
