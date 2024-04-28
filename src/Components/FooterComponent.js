import React from 'react'
import Button from 'react-bootstrap/Button';

const FooterComponent = () => {
  return (
    <div className='footer'>
        <h6>Visit The Developer's social medias here!</h6>
        <Button variant="light" size='sm' href='https://twitter.com/Starrleto'>Twitter</Button>{' '}
        <Button variant="light" size='sm' href='https://www.instagram.com/starrleto/'>Instagram</Button>{' '}
    </div>
  )
}

export default FooterComponent