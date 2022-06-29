import './App.css';
import ReactPlayer from 'react-player';
import React, {useEffect, useState, useRef} from "react";
import "react-bootstrap";
import randomizer from "./Randomizer.js";
import axios from 'axios';
function App() {
  const [id, setId] = useState((randomizer()));
  const [url, setURL] = useState("");
  const audioPlayer = useRef()

  axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response => console.log(response.data)).catch(console.log("Error loading"));
  useEffect( () => {
    console.log(audioPlayer.current.getSecondsLoaded() + 'seconds')
    if (audioPlayer.current.getSecondsLoaded() === 0 | isNaN(audioPlayer.current.getSecondsLoaded()) === true){
      setId(randomizer())
      setURL('https://www.youtube.com/watch?v=' + id)
    }
    setURL('https://www.youtube.com/watch?v=' + id)
  }, [id, url])


  return (
    <div className="App">
      <div class = "container1">
        <h2> One Random Youtube Video A Day</h2>
      </div>
      <h2 class = "container2" onMouseOver= {() => 
      setId(randomizer())}>
        
        You are currently watching : {url}

      </h2>
      <ReactPlayer url= {url} playing = {true} ref={audioPlayer}/> 
    </div>
  );
}
export default App;

