import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className='footer'>
        <p className='text-left'>Social Media</p>
        <hr></hr>
        <a href='https://www.instagram.com/vindigame/' target='_blank' rel="noreferrer"><FaInstagram size={40} color='white' /></a>
        <a  href='https://twitter.com/vindigame0' target='_blank' rel="noreferrer" className='separate-side'><FaXTwitter size={40} color='white' /></a>
        <a  href='https://discord.gg/vYPscRE9A2' target='_blank' rel="noreferrer" className='separate-side'><FaDiscord  size={40} color='white' /></a>
    </div>
  )
}

export default FooterComponent