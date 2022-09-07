import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const url = "https://api.henrikdev.xyz/valorant/v1/mmr/na/Sunbearo/NA1?fbclid=IwAR3kLapneRvgX_KVWg15YyiNg4Whsd1kGwNrLGUFNkoHH4hfzVgoHIpDnGg"
  const [rank, setRank] = useState("")

  let content = null

  useEffect(() => {
    Axios.get(url).then(
      (response) => {
        console.log(response);
        setRank(response.data.data);
      }
    );
  }, [url])

  if(rank){
    content =
    <div>
      <h1>{rank.name}#{rank.tag}</h1>
      <div>
        <img
          src={rank.images.large}
          alt={rank.currenttierpatched}
        />
      </div>
      <h2>{rank.currenttierpatched}</h2>
      <h2>RR: {rank.ranking_in_tier}</h2>
    </div>
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default App;