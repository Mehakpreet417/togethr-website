import React, { useState } from 'react';
import Header from "./containers/Header/Header";
import Navbar from './containers/Navbar/Navbar';
import ProductListing from './containers/ProductListing/ProductListing';
import RecommendationPanel from './containers/RecommendationPanel/RecommendationPanel';
import OtherProducts from './containers/OtherProducts/OtherOptions';
import Comparison from './containers/Comparison/Comparison';
import StretchBudget from './containers/StretchBudget/StretchBudget';
import Videos from './containers/Videos/Videos';
import Blogs from './containers/Blogs/Blogs';
import PopularProducts from './containers/PopularProducts/PopularProducts';
import Footer from './containers/Footer/Footer';
import './App.css';

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    console.log("Recommendation button clicked.");
    setIsPanelOpen(prevState => {
      console.log("Toggling panel. New state:", !prevState);
      return !prevState;
    });
  };
  return (
    <div className="App">
      <Header/>
      <Navbar togglePanel={togglePanel} />
      <div className="App-body">
        <div className="App-content">
          <ProductListing/>
          <OtherProducts/>
          <Comparison/>
          <StretchBudget/>
          <Videos/>
          <Blogs/>
          <PopularProducts/>
        </div>
        <div className={`App-side_panel ${isPanelOpen ? 'open' : ''}`}>
          <RecommendationPanel isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
