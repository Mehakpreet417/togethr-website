import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import "./Blogs.css"

const BlogList = () => {
  return (
    <div className="blogs">
    <div className="section-heading">Blogs</div>
    <div className="blog-list">
      <BlogCard
        image="img/blogs/blog1.png"
        title="Lenovo Ideapad – Game like a pro!"
        description="Our review takes you through the gaming capabilities of Lenovo Ideapad Gaming 3i. Witness how it turns your gam...."
        tag="Performance blog"
      />
      <BlogCard
        image="img/blogs/blog2.png"
        title="Lenovo Ideapad Detailed Specs"
        description="For the tech-savvy gamer, our video delves deep into the technical aspects of Lenovo Ideapad Gaming 3i. We break...."
        tag="Specs"
      />
      <BlogCard
        image="img/blogs/blog3.png"
        title="Lenovo Ideapad vs Asus ROG Strix"
        description="Trying to make an informed choice between Lenovo Ideapad Gaming 3i and Asus ROG Strix G15? Our video comparison...."
        tag="Comparison blog"
      />
      <BlogCard
        image="img/blogs/blog4.png"
        title="Asus ROG Ownership Review"
        description="Wondering about Asus ROG Strix G15 from the perspective of actual owners? Our ownership review video features user...."
        tag="Ownership Review"
      />
    </div>
    </div>
  );
};

export default BlogList;
