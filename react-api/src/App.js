import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Rank.css';

import image from "./images/Valorant_logo.jpeg"

import Card from "react-bootstrap/Card";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const url = "https://api.henrikdev.xyz/valorant/v1/mmr/na/Sunbearo/NA1?fbclid=IwAR3kLapneRvgX_KVWg15YyiNg4Whsd1kGwNrLGUFNkoHH4hfzVgoHIpDnGg"
  const [rank, setRank] = useState("")

  const url2 = "https://api.henrikdev.xyz/valorant/v1/account/Sunbearo/NA1"
  const [data, setData] = useState("")

  let content = null

  useEffect(() => {
    Axios.get(url).then(
      (response) => {
        console.log(response);
        setRank(response.data.data);
      }
    );
  }, [url]);

  useEffect(() => {
    Axios.get(url2).then(
      (response) => {
        console.log(response);
        setData(response.data.data);
      }
    );
  }, [url2]);

  if(rank){
    content =
    <Card>
      <CardHeader className='cardHeader'>
        <Card.Img className='title' src={image} />
      </CardHeader>
       

     
      <Card.Footer>
        {rank.name}#{rank.tag}
          <Card.Title>{rank.currenttierpatched}</Card.Title>
          <Card.Text>RR: {rank.ranking_in_tier}</Card.Text>
        <Col>
          <Card.Img className="cardImg" src={rank.images.large} alt={rank.currenttierpatched} />
        </Col>
      </Card.Footer>
      <Card.Body>
        
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