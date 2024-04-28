import React from 'react'
import "../App.css";

const UpdatesComponent = () => {
  return (
    <div>
      <div className='home-bg'> <h1 className='title-pages'>Development Updates!</h1> </div>

      <div className='padding'>
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
<hr></hr>
        <div>
          <h1 className='date'>4/26-28/2024</h1>
          <p className='text-left'>I actually worked on this website for these days, I wanted to get it up fairly quickly, so I made it and did everything to get it up and running.</p>
          <p className='text-left'>I also did a little more work on the battle system, but it's still not working. Tragic. I'm trying to make sure the code is at least kind of optimized so I don't have to tear it apart and remake it later.</p>
          <p className='text-left'>Working on errors is the pinnacle of game development experience.</p>
        </div>

      </div>

    </div>
  )
}


export default UpdatesComponent