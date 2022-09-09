import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import YoutubeVideo from "./component/YoutubeVideo/Youtube";
import './Rank.css';

import valorantLogo from "./images/Valorant_logo.jpeg"
import naServer from "./images/na.png"

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
        <Card.Img className='title' src={valorantLogo} />
      </Card.Body>
      
      <CardHeader className='cardHeader2'>
        <div className='nameTag'><Card.Title className='nameTagText'>{rank.name} #{rank.tag}</Card.Title></div> 
        <Card.Img className='cardImg' src={data.card.wide} />   

        <Row className='rowRank'>
          <Col>
            <Card.Img className="rankImg" src={rank.images.large} alt={rank.currenttierpatched} />
          </Col>
          <Col className='col2' sm={6}>
            <Card.Title>Rank: <strong>{rank.currenttierpatched}</strong></Card.Title>
            <Card.Title>Rating: <strong>{rank.ranking_in_tier}</strong></Card.Title>
          </Col>
          <Col sm={3}>
          <Card.Img className='server' src={naServer}></Card.Img> 
          </Col>
        </Row>    

          <Card.Text className='update'>Updated {data.last_update}</Card.Text>
      </CardHeader>

      <Card.Body className='youtube'>
            <YoutubeVideo embedId="l_sJOprlF30" />
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