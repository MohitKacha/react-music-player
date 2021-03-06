import React from "react";

const LibrarySong = ({ song, setCurrentSong }) => {
  const chnageSongHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div className="library-song" onClick={chnageSongHandler}>
      <img src={song.cover} alt="s ong cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
