import React from 'react'
import "../App.css";
import "../Assets/wickedcss.min.css"
import ya from '../Assets/Images/image0 (1).png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeComponent = () => {
  return (
    <div>
      
    <div className='home-header'>
      <h1 className='title-pages slideDown'>Welcome To The Spirit World</h1>
     <p className='slideDown'>Ten runaway criminals find themselves in a strange place, a seemingly abandoned town filled with spirits and strange creatures.</p>
     <p className='slideDown'>As they explore this new world, they must learn to understand their foes, or fight their way through,</p>
     <p className='slideDown'>in hopes that they can free themselves of the guilt that has finally caught up to them.</p>
     <img src={ya} alt="moth" className="image-header"></img>
    </div>
    <hr className='home-hr'></hr>
    
    <Container className='padding'>

    <Row>
        <Col lg={6} sm={12}> 
        <h1 className='separate-top title-smaller'>A bit about the project...</h1>
          <p>Vindicate is a Metroidvania / RPG game with many visual novel elements. This game's major focus its characters and storytelling, but also features a combat system in its gameplay.</p>
          <p>Vindicate offers many locations to explore both through point-and-click rooms and larger, walkable locations.</p>
          <p>Although the game is in very early stages, please explore the content there currently is to offer and learn about our project!</p>
        </Col>
        <Col lg={6} sm={12}>  
          <h1 className='separate-top title-smaller'>A bit about development...</h1>
          <p>This game is being developed with Unity and is written in C#. Almost all of this game (including the website!) is created by me!</p>
          <p></p>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default HomeComponent