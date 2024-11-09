import React from 'react'
import "../App.css";
import NasvbarComponent from './NasvbarComponent';
import UpdateComponent from './UpdateComponent';

const UpdatesComponent = () => {
  return (
    <div>
      <NasvbarComponent></NasvbarComponent>
      <div className='home-bg'> <h1 className='title-pages'>Development Updates!</h1> </div>

      <div className='padding'>

<UpdateComponent date="2/18-19/2024" text="I tested out my cutscene system here. The intro and beginning cutscenes now exist, though they might change. I sketched out a CG to test that out too, it functions well!" text2="I've also added a little popup mechanic for tutorial purposes."></UpdateComponent>

<hr></hr>

<UpdateComponent date="3/4/2024" text="Multiple save slots have been added! Currently there are three different slots." text2="It saves money, inventory, and player position. I will add progression and stat saving later."></UpdateComponent>

<hr></hr>

<UpdateComponent date="4/24-25/2024" text="For these days I worked on the battle system. I've set up several classes and the basic UI for the battles."></UpdateComponent>

<hr></hr>

</div>
</div>
  )
}


export default UpdatesComponent