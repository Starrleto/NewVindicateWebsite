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
          <hr className='separation'></hr>
          <Row className='side-by-side'>
            
            <Col lg={6} sm={12}>
            <h1 className='title-smaller'>What is Already Completed?</h1>
            <ul className='text-left'>
              <li>Base programming for dialogue and cutscenes</li>
              <li>Base programming for inventory and combat</li>
              <li>Game Map setup</li>
              <li>Save system</li>
            </ul>
            </Col>
            
            <Col lg={6} sm={12}>
            <h1 className='title-smaller'>What is To Be Completed?</h1>
         <ul className='text-left'>
            <li>Sprites and other artwork</li>
            <li>Music</li>
            <li>Script writing</li>
            <li>Implementing Gameplay features</li>
         </ul>
            </Col>

          </Row>
        </div>

          <img alt="Game Screenshot" src={background2} className='large-image'></img> 

    <div className='padding'>
    <Container className='padding'>

    <Row id='home'>
            <Col lg={6} sm={12} className='columns'>  
              <h1 className='title-smaller'>More About Development</h1>
              <p>This game is being developed with Unity and is written in C#.</p>
              <p>Although most development is handled by one person, I thank my friends and other developers for their assistance and advice, as well as our musician! This would not be possible without them!</p>
            </Col>
            <Col lg={6} sm={12} className='columns'> 
            <h1 className='title-smaller'>More About The Project</h1>
              <p>Although starting as an idea long before 2024, this game has been in true development for about one year. Its release is hopefully planned for late 2025-2026.</p>
              <p>To showcase more of our development, devlogs will soon be created for our current progress and uploaded to social media. They will also be posted here once uploaded.</p>
            </Col>
          </Row>

    </Container>

    </div>
    </div>
  )
}

export default AboutComponent