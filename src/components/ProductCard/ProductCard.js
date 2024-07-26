import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, description, price }) {
  return (
    <div className="product-card">
      <div className="card-product-img"><img src={image} alt={title} className="product-image" /></div>
      <div className="card-product-info">
        <div className="card-product-text">
          <h3 className="product-name">{title}</h3>
          <div className="product-des"><p className="card-product-des">{description}</p></div>
        </div>
        <div className="card-product-price-button">
          <div className="card-product-price">
            <p>Price</p>
            <span >₹{price}</span>
          </div>
          <div className="product-view"><button >View product</button></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
