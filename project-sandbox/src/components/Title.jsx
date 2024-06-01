import React from 'react'

const Title = ({text}) => {
  return (
    <h1 className='title text-center'>
        {!text ? "Title" : text}
    </h1>
  )
}

export default Title