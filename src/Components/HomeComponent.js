import React from 'react'
import "../App.css";
import "../Assets/wickedcss.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import titleScreen from '../Assets/Images/titleScreen.png';
import HeaderComponent from './HeaderComponent';

const HomeComponent = () => {
  return (
    <div>

<div className='header-bg'>
        <div>
          <HeaderComponent></HeaderComponent>
        </div>
      </div>
    
    <div className='padding'>
    <Container className='padding'>

    <Row id='home'>
            <Col lg={6} sm={12} className='columns'> 
            <h1 className='title-smaller'>A bit about the project...</h1>
              <p>Vindicate is an RPG game with many visual novel elements. This game's major focus its characters and storytelling, but also features turn-based combat and small puzzles to solve.</p>
              <p>Vindicate offers many locations to explore both through point-and-click rooms and larger, walkable locations.</p>
              <p>Although the game is in very early stages, please explore the content there currently is to offer and learn about our project!</p>
              <Button variant="danger" as={Link} to='/about' className='buttin'>View More Content Here!</Button>{' '}
            </Col>
            <Col lg={6} sm={12} className='columns'>  
              <h1 className='title-smaller'>A bit about development...</h1>
              <p>This game is being developed with Unity and is written in C#. Almost all of this game (including the website!) is created by me!</p>
              <p>Some friends of mine assist me with the writing and testing of the game. </p>
              <p></p>
              <Button variant="danger" as={Link} to='/about' className='buttin'>View Development so Far!</Button>{' '}
            </Col>
          </Row>

    </Container>

    </div>

    </div>
  )
}

export default HomeComponent