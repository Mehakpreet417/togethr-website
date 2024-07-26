import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import './OtherOptions.css';

const OtherOptions = () => {
  return (
    <div className="other-options">
      <div className="section-heading">
        <h3>Other suitable options</h3>
      </div>
      <div  className="other-product-cards">
        <ProductCard
          image="img/laptops/laptop5.png"
          title="Dell G5 15"
          description="Ideal for work-play balance with Intel i5 11th gen, NVIDIA GTX 1660 Ti, efficient cooling, and sleek design.
"
          price="73,500"
        />
        <ProductCard
          image="img/laptops/laptop6.png"
          title="HP Omen 15"
          description="Performance-focused with AMD Ryzen 5, NVIDIA GTX 1660 Ti, high refresh rate display, and customizable lighting."
          price="72,000"
        />
        <ProductCard
          image="img/laptops/laptop7.png"
          title="Acer Predator Helios"
          description="A great balance between power & affordability. Intel i5 12th gen, fast display, aggressive design, and RGB keyboard."
          price="77,000"
        />
      </div>
      <div className="other-products-pagination">
        <div className="pagination-pages">
          <p><span>01</span> of 02</p>
        </div>
        <div className="pagination-arrows">
          <img className="pagination-arrow pagination-arrow-left" src="img/icons/left-button-icon.png" alt="arrow-left" />
          <img className="pagination-arrow pagination-arrow-right" src="img/icons/right-button-icon.png" alt="arrow-right" />
        </div>
      </div>
    </div>
  )
}

export default OtherOptions