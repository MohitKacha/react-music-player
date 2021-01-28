import React from "react";
import { v4 as uuidv4 } from "uuid";
import LibrarySong from "./Librarysong";

const Library = ({ songs, setCurrentSong, libStatus }) => {
  return (
    <div className={`library ${libStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
