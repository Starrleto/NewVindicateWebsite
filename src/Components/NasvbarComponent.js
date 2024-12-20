import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const NasvbarComponent = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='navbar-header'>
        <Nav variant="tabs" defaultActiveKey="link-1" className='center-body'>
        <Nav.Item>
          <Nav.Link eventKey="link-1" as={Link} to='/' className='red-text'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" as={Link} to='/about' className='red-text offset-left'>About The Game</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" as={Link} to='/concepts' className='red-text offset-left'>Characters and Concepts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" as={Link} to='/updates' className='red-text offset-left'>Updates</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr className='border-white'></hr>
    </div>
  )
}

export default NasvbarComponent