import React from 'react'
import "../App.css";
import NasvbarComponent from './NasvbarComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from '../Assets/Images/backgrounds_extra.png'
import background2 from '../Assets/Images/backgrounds2.png'

const AboutComponent = () => {
  return (
    <div>
        <NasvbarComponent></NasvbarComponent>

        <div className='home-bg center-body-col'> 
          <h1 className='title-pages slideDown'>About the Game</h1>

          <div className='text-bos slideDown'>
              <p>A strange, foxlike creature enters the dream of a young woman named Atsuko Aiuchi. When she awakens, she finds herself in a world she's never seen before, along with nine others who have suffered the same fate.</p>
              <p className='separate-bottom'>The ten humans must explore the strange Spirit World, fighting to survive amongst the angry yokai residents, and trying to discover what "redemption", the key to their escape, could mean to them.</p>
            <hr className='border-white'></hr>
              <div className='padding'>
                <p>Based on Japanese Folklore, popular death games, and JRPGs, Vindicate is a beloved passion project being developed by a computer science student with a love for art and video games.</p>
                <p>Thank you for following our journey!</p>
              </div>
          </div>
        </div>

        <div className='padding'>
          <h1 className='date'>More About the Game</h1>
          <p className='text-left'>Vindicate will feature visual novel as well as JRPG elements, with turn-based combat and small puzzles being a primary part of the gameplay. This is a 2D game with heavy emphasis on art, characters, and storytelling.</p>
          <p className='text-left'>The game will feature both point-and-click and walkable locations for varied exploration of the world.</p>
          <p className='text-left'>Upon release, Vindicate will be continuously released by chapter until its end. The first chapter will serve as a demo and be free to play!</p>
        </div>

        <img alt="Game Screenshot" src={background} className='large-image'></img> 
        
        <div className='padding'>
          <h1 className='date'>Development Plans</h1>
          <p className='text-left'>Vindicate is being developed steadily, and the goal is to at least have a functional demo by Fall of 2025. Updates will continuously be announced up until then and updated on this website.</p>

          <div className='side-by-side'>
            <div>
            <h1 className='title-smaller'>What is Already Completed?</h1>
            <ul className='text-left'>
              <li>Base programming for dialogue and cutscenes</li>
              <li>Base programming for inventory and combat</li>
              <li>Game Map setup</li>
              <li>Save system</li>
            </ul>
            </div>

            <div>
            <h1 className='title-smaller'>What is To Be Completed?</h1>
         <ul className='text-left'>
            <li>Sprites and other artwork</li>
            <li>Music</li>
            <li>Script writing</li>
         </ul>
            </div>

          </div>
        </div>

          <img alt="Game Screenshot" src={background2} className='large-image'></img> 

    <div className='padding'>
    <Container className='padding'>

    <Row id='home'>
            <Col lg={6} sm={12} className='columns'> 
            <h1 className='title-smaller'>A bit about the project...</h1>
              <p>Vindicate is an RPG game with many visual novel elements. This game's major focus its characters and storytelling, but also features turn-based combat and small puzzles to solve.</p>
              <p>Vindicate offers many locations to explore both through point-and-click rooms and larger, walkable locations.</p>
              <p>Although the game is in very early stages, please explore the content there currently is to offer and learn about our project!</p>
            </Col>
            <Col lg={6} sm={12} className='columns'>  
              <h1 className='title-smaller'>More About Development</h1>
              <p>This game is being developed with Unity and is written in C#. Almost all of this game is created by one person.</p>
              <p>Some friends of mine assist me with the writing and testing of the game.</p>
              <p></p>
            </Col>
          </Row>

    </Container>

    </div>
    </div>
  )
}

export default AboutComponent