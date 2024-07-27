import React from 'react';
import './Comparison.css';
import ComparisonFeatures from '../../components/ComparisonFeatures/ComparisonFeatures';

const Comparison = () => {
  return (
    <div className="comparison">
      <div className="section-heading">
        <h3>Comparison and review</h3>
      </div>
      <div className="comparison-products">
      <div className="comparison-product-details">
        <div className="comparison-product">
          <div className="comparison-product-img">
            <img src="img/laptops/laptop8.png" alt="laptop-img" />
          </div>
          <div className="comparison-product-info">
            <h3 className="product-name">Lenovo Ideapad Gaming 3i</h3>
            <div className="comparison-product-price">
              <p>Price</p>
              <span >₹ 75,000</span>
            </div>
            <div className="comparison-stars">
              <div className="comparison-stars-box">
                <img src="img/icons/pink-star.png" alt="star" />
                <img src="img/icons/pink-star.png" alt="star" />
                <img src="img/icons/pink-star.png" alt="star" />
                <img src="img/icons/star.png" alt="star" />
                <img src="img/icons/star.png" alt="star" />
              </div>
            </div>
          </div>
        </div>
        <div className="comparison-pros-cons">
          <div className="comparison-pros">
            <div className="comparison-heading">
              <img src="img/icons/pros-icon.png" alt="pros" />
              <p>Pros</p>
            </div>
            <div className="comparison-points">
              <li>Affordable entry into gaming with great performance.</li>
              <li>Compact design, easy to carry.</li>
            </div>
          </div>
          <div className="separator"></div>
          <div className="comparison-cons">
            <div className="comparison-heading">
              <img src="img/icons/cons-icon.png" alt="cons" />
              <p>Cons</p>
            </div>
            <div className="comparison-points">
              <li>Battery life could be better.</li>
              <li>Screen brightness is suboptimal in daylight.</li>
            </div>
          </div>
        </div>
        <div className="comparison-features-container">
           <div className="comparision-featues">
            <ComparisonFeatures title="Battery Life" image="img/icons/battery-icon.png" value="6 hrs" />
            <ComparisonFeatures title="Processor" image="img/icons/processor-icon.png" value="AMD Ryzen 5 5900HX" />
            <ComparisonFeatures title="Front Camera" image="img/icons/camera-icon.png" value="12 MP" />
            <ComparisonFeatures title="RAM" image="img/icons/ram-icon.png" value="16GB DDR4 RAM" />
            <ComparisonFeatures title="Fast Charging" image="img/icons/charging-icon.png" value="1 hr" />
            <ComparisonFeatures title="Storage Capacity" image="img/icons/storage-icon.png" value="1TB NVMe SSD" />
            </div>
        </div>        
      </div>
      <div className="comparison-product-details">
        <div className="comparison-product">
          <div className="comparison-product-img">
            <img src="img/laptops/laptop9.png" alt="laptop-img" />
          </div>
          <div className="comparison-product-info">
            <h3 className="product-name">Asus ROG Strix G15</h3>
            <div className="comparison-product-price">
              <p>Price</p>
              <span >₹ 78,000</span>
            </div>
            <div className="comparison-stars">
              <div className="comparison-stars-box">
                <img src="img/icons/pink-star.png" alt="star" />
                <img src="img/icons/pink-star.png" alt="star" />
                <img src="img/icons/pink-star.png" alt="star" />
                <img src="img/icons/star.png" alt="star" />
                <img src="img/icons/star.png" alt="star" />
              </div>
            </div>
          </div>
        </div>
        <div className="comparison-pros-cons">
          <div className="comparison-pros">
            <div className="comparison-heading">
              <img src="img/icons/pros-icon.png" alt="pros" />
              <p>Pros</p>
            </div>
            <div className="comparison-points">
              <li>High refresh rate display for smooth gameplay.</li>
              <li>Advanced cooling system keeps performance steady.</li>
            </div>
          </div>
          <div className="separator"></div>
          <div className="comparison-cons">
            <div className="comparison-heading">
              <img src="img/icons/cons-icon.png" alt="cons" />
              <p>Cons</p>
            </div>
            <div className="comparison-points">
              <li>Heavier, less portable than some rivals.</li>
              <li>Users reported occasional service issues.</li>
            </div>
          </div>
        </div>
        <div className="comparison-features-container">
           <div className="comparision-featues">
            <ComparisonFeatures title="Battery Life" image="img/icons/battery-icon.png" value="7 hrs" />
            <ComparisonFeatures title="Processor" image="img/icons/processor-icon.png" value="Intel i5 11th gen" />
            <ComparisonFeatures title="Front Camera" image="img/icons/camera-icon.png" value="12 MP" />
            <ComparisonFeatures title="RAM" image="img/icons/ram-icon.png" value="16GB DDR4 RAM" />
            <ComparisonFeatures title="Fast Charging" image="img/icons/charging-icon.png" value="1 hr" />
            <ComparisonFeatures title="Storage Capacity" image="img/icons/storage-icon.png" value="1TB NVMe SSD" />
            </div>
        </div>        
      </div>
      </div>
    </div>
  )
}

export default Comparison