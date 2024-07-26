import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import './PopularProducts.css';

const PopularProducts = () => {
  return (
    <div className="popular-options">
      <div className="section-heading">
        <h3>Most popular products in this budget range</h3>
      </div>
      <div  className="popular-product-cards">
        <ProductCard
          image="img/laptops/laptop13.png"
          title="Dell XPS 15"
          description="A favorite for its stunning 4K display and powerful performance with Intel Core i5 and NVIDIA GTX 1650 Ti. Ideal for creatives and professionals alike due to its exceptional build quality and design.
"
          price="73,000"
        />
        <ProductCard
          image="img/laptops/laptop14.png"
          title="Lenovo Legion 5 Pro"
          description="Stands out with its AMD Ryzen 5 processor and NVIDIA RTX 3070, offering superb gaming performance. Praised for its 16-inch QHD display with a 165Hz refresh rate, making it a hit among gamers.
"
          price="77,000"
        />
        <ProductCard
          image="img/laptops/laptop15.png"
          title="HP Spectre x360"
          description="Renowned for its sleek, convertible design and OLED touch display. Equipped with Intel Core i5 10th gen and integrated Intel graphics, it's perfect for productivity, entertainment, and light gaming."
          price="75,000" 
        />
      </div>
    </div>
  )
}

export default PopularProducts