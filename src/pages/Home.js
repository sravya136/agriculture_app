// src/pages/Home.js
import React, { useState, useRef } from 'react';
import './Home.css';

const Home = () => {
  const videoSources = [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home-container">
      <video
        className="background-video"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
        ref={videoRef}
        key={videoSources[currentVideoIndex]}
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to Krishi Sahayak</h1>
        <p>Empowering Indian farmers with expert guidance and resources</p>
      </div>
      <button className="prev-button" onClick={handlePrevVideo}>
        ←
      </button>
    </div>
  );
};

export default Home;
