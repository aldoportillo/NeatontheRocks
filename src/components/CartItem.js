import React from 'react'
import { Context } from '../context/context'

function CartItem ({item}) {

    const {removeFromCart} = React.useContext(Context)
    return(
        <div className='cart-item'>
            <div className='left-page'>
                <img src={item.img} alt="" />
                <div className='cart-item-info'>
                    <h1>{item.name}</h1>
                    <i onClick={()=>removeFromCart(item.id)}>Remove from Cart</i>
                </div>
            </div>
            <div className='right-page'>
                <h2>{item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h2>
            </div>
            
        </div>
    )
}

export default CartItem