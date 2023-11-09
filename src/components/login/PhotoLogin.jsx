import React from 'react'

export default function PhotoLogin({name}) {
  return (
    <>
      <img
            className="w-full h-full object-cover contrast-125 "
            src={`${name}.png`}
            alt='none'
        />
    </> 
  )
}
