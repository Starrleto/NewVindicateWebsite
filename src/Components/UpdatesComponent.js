import React from 'react'
import "../App.css";
import NasvbarComponent from './NasvbarComponent';
import UpdateComponent from './UpdateComponent';
import titleScreen from '../Assets/Images/titleScreen.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpdatesComponent = () => {
  return (
    <div>
      <NasvbarComponent></NasvbarComponent>
      <div className='home-bg'> <h1 className='title-pages slideDown'>Development Updates!</h1> </div>

      <div className='padding'>

<UpdateComponent date="2/18-19/2024" text="I tested out my cutscene system here. The intro and beginning cutscenes now exist, though they might change. I sketched out a CG to test that out too, it functions well!" text2="I've also added a little popup mechanic for tutorial purposes."></UpdateComponent>

<hr className='separation'></hr>

<UpdateComponent date="3/4/2024" text="Multiple save slots have been added! Currently there are three different slots." text2="It saves money, inventory, and player position. I will add progression and stat saving later."></UpdateComponent>

<hr className='separation'></hr>

<UpdateComponent date="4/24-25/2024" text="For these days I worked on the battle system. I've set up several classes and the basic UI for the battles. Basic functionality has been programmed, and will continue to be built upon."></UpdateComponent>

<hr className='separation'></hr>

<UpdateComponent date="11/28/2024" text="Grouping lots of work into a log for today, progress has been made on the art, such as environment, sprites, and UI for the game. Script writing is also being worked on." text2="I plan to complete a lot of the script writing so I can set up the cutscenes in the game."></UpdateComponent>
<Row>
  <Col lg={6} sm={12}>
    <img alt="Murasaki" src={titleScreen} className='img-fluid'></img> 
  </Col>
</Row>

<hr className='separation'></hr>


<h1 className='title-smaller-center underline'>More Updates Coming Soon!</h1>

</div>
</div>
  )
}


export default UpdatesComponent