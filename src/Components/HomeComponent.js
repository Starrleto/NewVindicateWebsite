import React from 'react'
import "../App.css";
import "../Assets/wickedcss.min.css"
import ya from '../Assets/Images/image0 (1).png'

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
    
    <div className='padding'>
      <p>Vindicate is a Metroidvania / RPG game developed by a computer science student with a love of mythology and storytelling.</p>
      <p>Although the game is in very early stages, please explore the content there currently is to offer and learn about our project!</p>

      <h1 className='separate-top'>I am currently using...</h1>
      <p>Unity / C#</p>
    </div>

    </div>
  )
}

export default HomeComponent