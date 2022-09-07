import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const url = "https://api.henrikdev.xyz/valorant/v1/mmr/na/Sunbearo/NA1?fbclid=IwAR3kLapneRvgX_KVWg15YyiNg4Whsd1kGwNrLGUFNkoHH4hfzVgoHIpDnGg"
  const [rank, setRank] = useState([])

  useEffect(() => {
    Axios.get(url).then(
      (response) => {
        console.log(response);
        setRank(response.data.data.name + response.data.data.currenttierpatched);
      }
    );
  }, [])

  return (
    <div>
      <h1>Rank?</h1>Rank: {rank}
    </div>
  )
}

export default App;