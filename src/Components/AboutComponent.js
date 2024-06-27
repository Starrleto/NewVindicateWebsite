import React from 'react'
import "../App.css";

const AboutComponent = () => {
  return (
    <div className='border-thing'>
        <div className='home-bg'> <h1 className='title-pages'>More About the Game</h1> </div>

        <h1>The Story...</h1>
        <p>A young woman named Atsuko Aiuchi encounters a strange, foxlike creature on her way home from work.</p>

        <div className='padding'>
          <h1 className='date'>Development Plans</h1>
          <p className='text-left'>The current focus is to set up all the system's in the game, such as dialogue, cutscenes, inventory, and saving and loading. These are actually functional right now, and just need a few more features added as things go along! I'm working on the battle system finally.</p>
          <p className='text-left'>I'm also working on writing for the game. The general idea and framework of the story is there fortunately.</p>
          <p className='text-left'>There is currently no sprite or UI art for the game, as my current focus (as of April 2024) is to complete all functonality. Therefore it will be the last to be completed- although concept art exists.</p>

          <h1 className='date'>When The Game is Released</h1>
          <p className='text-left'>There's currently no set release date, although my personal goal is to create at least a playable product by the end of this year (2024) for beta testing purposes.</p>
          <p className='text-left'>When Vindicate is eventually released, however, the first chapter (what is currently being built) will be free to play and serve as the game's demo. </p>
        </div>
    </div>
  )
}

export default AboutComponent