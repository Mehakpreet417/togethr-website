import React from 'react'
import './ComparisonFeatures.css';

const ComparisonFeatures = ({ image, title, value }) => {
  return (
    <div className='comparision-feature'>
      <div className="comparison-feature-img">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="comparison-feature-value">
        <h5>{title}</h5>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default ComparisonFeatures
