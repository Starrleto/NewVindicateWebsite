import React from 'react'
import "../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacterComponent = () => {
  return (
    <div>

      <div className='home-bg'> <h1 className='title-pages'>Characters and Concept Art!</h1> </div>
      <Container fluid>
      <Row>
        <Col lg={6} sm={12}> <img alt="Murasaki" src=""></img> </Col>
        <Col lg={6} sm={12}> <p>One of the Spirits you'll soon be able to meet!</p> </Col>
      </Row>
    </Container>

    </div>
  )
}

export default CharacterComponent