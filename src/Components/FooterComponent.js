import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <div className='footer'>
        <h6>Visit The Developer's social medias here!</h6>
        <a href='https://www.instagram.com/starrleto/' target='_blank' rel="noreferrer"><FaInstagram size={40} color='white' /></a>
        <a  href='https://twitter.com/Starrleto' target='_blank' rel="noreferrer"><FaXTwitter size={40} color='white' /></a>
    </div>
  )
}

export default FooterComponent