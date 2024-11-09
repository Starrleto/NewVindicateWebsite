import React from 'react'

const UpdateComponent = (props) => {
  return (
    <div>
        <div>
        <h1 className='date'>{props.date}</h1>
        <p className='text-left'>{props.text}</p>
        <p className='text-left'>{props.text2}</p>
        </div>
    </div>
  )
}

export default UpdateComponent