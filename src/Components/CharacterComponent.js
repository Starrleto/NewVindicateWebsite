import React from 'react'
import NasvbarComponent from './NasvbarComponent';
import "../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mur from '../Assets/Images/image3.png';
import ak from '../Assets/Images/image1.jpeg';
import atsu from '../Assets/Images/IMG_3159.PNG';
import osa from '../Assets/Images/image4.jpeg';
import kai from '../Assets/Images/image5.jpeg';
import tomo from '../Assets/Images/tomo.png';
import tomo2 from '../Assets/Images/tomo2.png';

const CharacterComponent = () => {
  return (
    <div>
      <NasvbarComponent></NasvbarComponent>

      <div className='home-bg'> <h1 className='title-pages slideDown'>Characters and Concept Art!</h1> </div>
      <hr></hr>
      <Container fluid>
      <Row>
        <Col lg={6} sm={12}> 
          <img alt="Murasaki" src={mur} className='img-fluid image'></img> 
          <p className='separate-top'>The Spirit World's Train Conductor.</p> 
        </Col>

        <Col lg={6} sm={12}> 
          <img alt="Murasaki" src={osa} className='img-fluid image'></img> 
          <p className='separate-top'>Hikaru Osamu, one of the humans.</p> 
        </Col>

      </Row>

      <Row>
        <Col lg={6} sm={12}> 
          <img alt="Murasaki" src={ak} className='img-fluid image'></img> 
          <p className='separate-top'>The Fox.</p> 

          <img alt="Murasaki" src={atsu} className='img-fluid image'></img> 
          <p className='separate-top'>Atsuko Aiuchi, The game's protagonist!</p> 
        </Col>
        <Col lg={6} sm={12}>  
          <img alt="Tomo" src={tomo} className='img-fluid image'></img> 

          <img alt="Tomo" src={tomo2} className='img-fluid image'></img> 
          <p className='separate-top'>Tomo, a tanuki, and a shopkeeper in the Spirit World.</p> 

          <img alt="Murasaki" src={kai} className='img-fluid image'></img> 
          <p className='separate-top'>Kaiyo Jona, one of the humans.</p> 
        </Col>
      </Row>

    </Container>

    </div>
  )
}

export default CharacterComponent