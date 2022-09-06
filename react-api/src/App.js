import React, { useState } from "react";
import Axios from "axios";
import './App.css';

function App() {
  const [rank, setRank] = useState("")

  const getRank = () => {
    Axios.get("https://api.henrikdev.xyz/valorant/v1/mmr/na/Sunbearo/NA1?fbclid=IwAR3kLapneRvgX_KVWg15YyiNg4Whsd1kGwNrLGUFNkoHH4hfzVgoHIpDnGg").then(
      (response) => {
        console.log(response);
      setRank(response.data.data.name + response.data.data.tag + "... " + response.data.data.currenttierpatched)
      setRank(response.data.data.name)
    })
  }
  return (
  <div>
    Rank:
    {rank}
  </div>
  );
}

export default App;
