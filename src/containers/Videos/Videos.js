import React from 'react'
import './Videos.css';
import VideoCard from '../../components/VideoCard/VideoCard';

const Videos= () => {
  return (
    <div className="videos-container">
      <div className="section-heading"><h3>Videos</h3></div>
      <div className="videos">
        <VideoCard 
          image="img/videos/video1.png" 
          title="Lenovo Ideapad - Game like a pro!"
          description="Dive deep into Lenovo Ideapad Gaming 3i's gaming prowess. This in-depth blog review explores how it elevates your...."
        />
        <VideoCard 
          image="img/videos/video2.png" 
          title="Call of Duty Gameplay on Ideapad 3i"
          description="Get ready for action as we put the Lenovo Ideapad Gaming 3i through its paces in a Call of Duty gaming showdown. See...."
        />
        <VideoCard 
          image="img/videos/video3.png" 
          title="Lenovo Ideapad vs Asus ROG Strix"
          description="Can't decide between Lenovo Ideapad Gaming 3i and Asus ROG Strix G15? This detailed blog post compares these...."
        />
      </div>
      <div className="videos-pagination">
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

export default Videos
