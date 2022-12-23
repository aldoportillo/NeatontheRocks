import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


export default function Product() {

    const {id} = useParams()
    const location = useLocation()

    const {name, price, description, isFavorited} = location.state.data

  return (
    <div className='product-page'>
        <div>Product {id}</div>
        <h3>{name}</h3>
        <h3>{price}</h3>
        <h3>{description}</h3>
        <h3>{isFavorited}</h3>
    </div>
    
  )
}
