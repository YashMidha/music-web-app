import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/playerContext";

const App = () => {

  const {audioRef, track, songsData} = useContext(PlayerContext);

  // ternary operator to ensure that component is not mounted before the songs data is recieved; else it gives error

  return (
    <div className='h-screen bg-black'>
      {
        songsData.length !== 0
        ? <><div className='h-[90%] flex'>
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
        : null
      }
      <audio ref={audioRef} src={track?track.file:""} preload="auto"></audio> 
    </div>
  )
}

// why dont we change the status of src using ref itself

export default App;
