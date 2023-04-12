import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import VideoGamesCard from './VideoGamesCard';
import '../VideoGamesList.css';

const VideoGamesList = () => {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    axios
      .get('https://apis.wilders.dev/wild-games/games/')
      .then((res) => res.data)
      .then((data) => setVideoGames(data));
  }, []);

  return (
    <div className="cardPosition">
      {videoGames &&
        videoGames.map((game) => <VideoGamesCard key={game.id} game={game} />)}
    </div>
  );
};

export default VideoGamesList;
