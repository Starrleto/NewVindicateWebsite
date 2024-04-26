import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <div>
        <div className='home-bg'> <h1 className='title-pages'>More About the Game</h1> </div>

        <div>
        <h1 className='date'>Development Plans</h1>
        <p className='text-left'>There is currently no sprite or UI art for the game, as my current focus (as of April 2024) is to complete all functonality. Therefore it will be the last to be completed- although concept art exists.</p>

        <h1 className='date'>When The Game is Released</h1>
        <p className='text-left'>When Vindicate is eventually released, the first chapter (what is currently being built) will be free to play and serve as the game's demo. </p>
        </div>
    </div>
  )
}

export default AboutComponent