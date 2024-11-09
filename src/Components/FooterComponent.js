import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <div className='footer'>
        <p className='text-left'>Social Media</p>
        <hr></hr>
        <a href='https://www.instagram.com/starrleto/' target='_blank' rel="noreferrer"><FaInstagram size={40} color='white' /></a>
        <a  href='https://twitter.com/Starrleto' target='_blank' rel="noreferrer" className='separate-side'><FaXTwitter size={40} color='white' /></a>
    </div>
  )
}

export default FooterComponent