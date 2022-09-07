import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Card from "react-bootstrap/Card";
import CardHeader from 'react-bootstrap/esm/CardHeader';

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
    <Card style={{width: "18rem"}}>
      <CardHeader>
        {rank.name}#{rank.tag}
      </CardHeader>
      <Card.Img src={rank.images.large} alt={rank.currenttierpatched} />
      <Card.Body>
        <Card.Title>{rank.currenttierpatched}</Card.Title>
        <Card.Text>RR: {rank.ranking_in_tier}</Card.Text>
      </Card.Body>
    </Card>
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default App;