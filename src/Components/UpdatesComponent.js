import React from 'react'
import "../App.css";

const UpdatesComponent = () => {
  return (
    <div>
      <div className='home-bg'> <h1 className='title-pages'>Development Updates!</h1> </div>

      <div className='body-padding'>

        <div>
          <h1 className='date'>2/18-19/2024</h1>
          <p className='text-left'>I tested out my cutscene system here. The intro and beginning cutscenes now exist, though they might change. I sketched out a CG to test that out too, it functions well!</p>
          <p className='text-left'>I've also added a little popup mechanic for tutorial purposes.</p>
        </div>
<hr></hr>
        <div>
          <h1 className='date'>3/4/2024</h1>
          <p className='text-left'>Multiple save slots have been added! Currently there are three different slots.</p>
          <p className='text-left'>It saves money, inventory, and player position. I will add progression and stat saving later.</p>
        </div>
<hr></hr>
        <div>
          <h1 className='date'>4/24-25/2024</h1>
          <p className='text-left'>For these days I worked on the battle system. I've set up several classes and the basic UI for the battles.</p>
        </div>

      </div>

    </div>
  )
}

{/* 

<p className='text-left'></p>

*/}

export default UpdatesComponent