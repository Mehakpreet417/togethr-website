import React from 'react'
import './ProductListing.css'

const ProductListing = () => {
  return (
    <div className="product_listing">
      <div className="product">
        <div className="product-img">
          <img src="img/laptops/laptop1.png" alt="laptop-img" />
        </div>
        <div className="product-info">
          <img className="heart" src="img/icons/heartheart-icon.png" alt="heart-img" />
          <div className="product-intro">
          <h3 className="product-name">Lenovo Ideapad Gaming 3i</h3>
          <h4>₹ 75,000</h4>
          <div className="product-features">
            <div className="product-feature">
              <p>High Performance</p> 
            </div>
            <div className="product-feature">
              <p>Military-grade build</p>
            </div>
          </div>
          <div className="product-choice">
            <p>Top Choice for you</p>
          </div>
          </div>
          <div className="product-details">
          <div className="product-des">
            <p>Recommended for : The Lenovo IdeaPad Gaming 3i is a budget gaming laptop great for first-time gamers, casual gamers, and other power users. It has a sleek design, an ergonomic keyboard, and a high-quality display.
            </p>
          </div>
          <div className="product-btns">
            <div className="product-learn_more">
             <a href="#">Learn More</a>
             <img src="img/icons/arrow-right.png" alt="laptop-img" />
            </div>
            <div className="product-view">
              <button>View product</button>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="product">
        <div className="product-img">
          <img src="img/laptops/laptop2.png" alt="laptop-img" />
        </div>
        <div className="product-info">
          <img className="heart" src="img/icons/heartheart-icon.png" alt="heart-img" />
          <div className="product-intro">
          <h3 className="product-name">Asus ROG Strix G15</h3>
          <h4>₹ 75,000</h4>
          <div className="product-features">
            <div className="product-feature">
              <p>Class-leading battery</p>
            </div>
          </div>
          </div>
          <div className="product-details">
          <div className="product-des">
            <p>Recommended for : The Asus ROG Strix G15 is a gaming laptop optimized for demanding games. It has class-leading display refresh rate. RGB backlit keyboard.</p>
          </div>
          <div className="product-btns">
            <div className="product-learn_more">
             <a href="#">Learn More</a>
             <img src="img/icons/arrow-right.png" alt="laptop-img" />
            </div>
            <div className="product-view">
              <button>View product</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing