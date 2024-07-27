import React from 'react';
import './BlogCard.css'; // Ensure this path matches your project structure

const BlogCard = ({ image, title, description, tag }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-thumbnail">
        <img src={image} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-title">{title}</h3>
        <div className="blog-des"><p>{description}</p></div>
        <span className="blog-card-tag">{tag}</span>
      </div>
    </div>
  );
};

export default BlogCard;
