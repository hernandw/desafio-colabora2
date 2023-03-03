import React from 'react'

const Error = ({message}) => {
  return (
    <div>
      <p className='bg-danger text-white text-uppercase rounded w-50 text-center p-2 font-bold'>{message}</p>
    </div>
  )
}

export default Error
