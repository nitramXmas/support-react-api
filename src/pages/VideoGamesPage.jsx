import React, { useState } from 'react';
import VideoGamesList from '../components/VideoGamesList';
import '../VideoGamesPage.css';

const VideoGamesPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLight, setIsLight] = useState(true);

  const toggle = () => {
    setIsLight(!isLight);
  };

  return (
    <div className={isLight ? 'light' : 'dark'}>
      <h1>My Games</h1>
      <button type="button" onClick={toggle}>
        {isLight ? 'Light' : 'Dark'}
      </button>
      {isVisible && <VideoGamesList />}
    </div>
  );
};

export default VideoGamesPage;
