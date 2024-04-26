import React from 'react'
import "../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mur from '../Assets/Images/image3.png';
import shi from '../Assets/Images/image0.png';
import ak from '../Assets/Images/image1.jpeg';
import wow from '../Assets/Images/IMG_3133.PNG';
import atsu from '../Assets/Images/IMG_3159.PNG';
import osa from '../Assets/Images/image4.jpeg';
import kai from '../Assets/Images/image5.jpeg';

const CharacterComponent = () => {
  return (
    <div>

      <div className='home-bg'> <h1 className='title-pages'>Characters and Concept Art!</h1> </div>
      <hr className='home-hr'></hr>
      <Container fluid>
      <Row>
        <Col lg={6} sm={12}> 
          <img alt="Murasaki" src={mur} className='img-fluid image'></img> 
          <p>One of the Spirits you'll soon be able to meet!</p> 
        </Col>
        <Col lg={6} sm={12}>  
          <img alt="Murasaki" src={shi} className='img-fluid image'></img> 
          <p>One of the Spirits you'll soon be able to meet!</p> 
        </Col>
      </Row>

      <Row>
        <Col lg={6} sm={12}> 
          <img alt="Murasaki" src={ak} className='img-fluid image'></img> 
          <p>One of the Spirits you'll soon be able to meet!</p> 
          <img alt="Murasaki" src={atsu} className='img-fluid image'></img> 
          <p>One of the Spirits you'll soon be able to meet!</p> 
          <img alt="Murasaki" src={kai} className='img-fluid image'></img> 
          <p>One of the Spirits you'll soon be able to meet!</p> 
        </Col>
        <Col lg={6} sm={12}>  
          <img alt="Murasaki" src={wow} className='img-fluid image'></img> 
          <p>One of the Spirits you'll soon be able to meet!</p> 
          <img alt="Murasaki" src={osa} className='img-fluid image'></img> 
          <p>One of the Spirits you'll soon be able to meet!</p> 
        </Col>
      </Row>

    </Container>

    </div>
  )
}

export default CharacterComponent