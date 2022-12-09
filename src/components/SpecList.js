import React from 'react'

export default function SpecList({name, ounces}) {
  return (
    <div className='spec-list'>
        <h3>{name}</h3>
        <h3>{ounces} oz</h3>
    </div>
  )
}
