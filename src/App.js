import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Songs";
import Nav from "./components/Nav";
import data from "./data";
import { useState } from "react";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libStatus, setLibStatus] = useState(false);
  return (
    <div className={`App ${libStatus ? "libarary-active" : ""}`}>
      <Nav libStatus={libStatus} setLibStatus={setLibStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        libStatus={libStatus}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
    </div>
  );
}

export default App;
