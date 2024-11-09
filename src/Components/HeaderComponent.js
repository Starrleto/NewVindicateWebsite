import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import ya from '../Assets/Images/image0 (1).png'
import "../App.css";
import NasvbarComponent from './NasvbarComponent';

const HeaderComponent = () => {
  return (
    <div>

    <div className='home-header'>
     <h1 className='title-pages slideDown'>Welcome To The Spirit World</h1>
     <p className='slideDown'>Ten runaway criminals find themselves in a strange place, a seemingly abandoned town filled with spirits and strange creatures.</p>
     <p className='slideDown'>As they explore this new world, they must learn to understand their foes, or fight their way through,</p>
     <p className='slideDown'>in hopes that they can free themselves of the guilt that has finally caught up to them.</p>
     <img src={ya} alt="moth" className="image-header"></img>

    <hr className='border-white'></hr>

    <NasvbarComponent></NasvbarComponent>
    </div>   
    </div>
  )
}

export default HeaderComponent