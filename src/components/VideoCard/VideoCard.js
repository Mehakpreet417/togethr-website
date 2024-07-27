import React from 'react';
import './VideoCard.css'; 

const VideoCard = ({ image, title, description}) => {
  return (
    <div className="video-card">
      <div className="video-card-thumbnail">
        <img src={image} alt={title} />
      </div>
      <div className="video-card-content">
        <h3 className="product-name">{title}</h3>
        <div className="product-des"><p>{description}</p></div>
      </div>
    </div>
  );
};

export default VideoCard;
