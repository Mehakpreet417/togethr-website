import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import './StretchBudget.css';

const StretchBudget = () => {
  return (
    <div className="budget-options">
      <div className="section-heading">
        <h3>If you stretch budget to ₹1,00,000</h3>
      </div>
      <div  className="budget-product-cards">
        <ProductCard
          image="img/laptops/laptop10.png"
          title="MSI GS66 Stealth"
          description="Tailored for power users with its Intel Core i9 processor and NVIDIA RTX 2070 Super. Boasts a stealthy, robust design and a high refresh rate display for ultimate gaming.
"
          price="98,000"
        />
        <ProductCard
          image="img/laptops/laptop12.png"
          title="ASUS ROG Zephyrus G14"
          description="A compact powerhouse with AMD Ryzen 9 and NVIDIA RTX 2060. Known for its exceptional battery life & innovative AniMe Matrix display on the lid for personalization."
          price="99,500"
        />
        <ProductCard
          image="img/laptops/laptop11.png"
          title="Alienware M15 R3"
          description="Offers top-tier performance with Intel Core i7, NVIDIA RTX 2070, and a fast OLED. Distinguished by its iconic Alienware design and customizable RGB lighting."
          price="97,500"
        />
      </div>
    </div>
  )
}

export default StretchBudget