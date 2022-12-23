import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../context/context'


export default function Product() {

    const location = useLocation()
    const {addToCart} = React.useContext(Context)

    const {name, price, description, img} = location.state.data

  return (
    <div className='product-page'>
        <div className='product-left-page'>
            <h2>{name}</h2>
            <img src={img.mainImage} alt=""/>
        </div>
        <div className='product-right-page'>
            <h3> &#36;{price}</h3>
            <div className='description'>
                <h3>Description</h3>
                <p>{description}</p>
            </div>
            <div className='button-container'>
                <button className="--btn-white" onClick={()=>addToCart(location.state.data)}>Add to Cart</button>
                <Link to="/products"  ><button className="--btn-black">Back to Products</button></Link>
            </div>
        </div>
        
    </div>
    
  )
}
