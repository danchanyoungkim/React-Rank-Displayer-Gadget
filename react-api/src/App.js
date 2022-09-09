import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Youtube from "./component/Youtube/Youtube";
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
      <Card.Body className='cardHeader'>
        <Card.Img className='title' src={image} />
      </Card.Body>
      
      <CardHeader className='cardHeader2'>
        <div className='nameTag'><Card.Title className='nameTagText'>{rank.name} #{rank.tag}</Card.Title></div>  
        <Card.Img className='cardImg' src={data.card.wide} />   
      </CardHeader>

      <Card.Footer>
          <Col>
            <Card.Title>Current Rank: {rank.currenttierpatched}</Card.Title>
            <Card.Title>RR: {rank.ranking_in_tier}</Card.Title>
          </Col>
            <Card.Img className="rankImg" src={rank.images.large} alt={rank.currenttierpatched} />
      </Card.Footer>

      <Card.Body>
        <Youtube embedId="l_sJOprlF30" />
      </Card.Body>

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