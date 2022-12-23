import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Context } from '../context/context'


export default function Product() {

    const {id} = useParams()
    const location = useLocation()
    const {addToCart} = React.useContext(Context)

    const {name, price, description, img} = location.state.data

  return (
    <div className='product-page'>
        <div>Product</div>
        <h3>{name}</h3>
        <img src={img.mainImage} alt=""/>
        <h3>{price}</h3>
        <h3>{description}</h3>
        <button onClick={()=>addToCart(location.state.data)}>Add to Cart</button>
        <Link to="/products" ><button>Back to Products</button></Link>
    </div>
    
  )
}
