import React from 'react';
import '../VideoGamesCard.css';

const VideoGamesCard = ({ game }) => {
  return (
    <div className="videoGameCard">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt="" />
    </div>
  );
};

export default VideoGamesCard;
