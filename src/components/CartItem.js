import React from 'react'
import { Context } from '../context/context'

function CartItem ({item}) {

    const {removeFromCart} = React.useContext(Context)
    console.log(item)
    return(
        <div className='cart-item'>
            <div className='left-page'>
                <img src={item.img.mainImage} alt="" />
                <div className='cart-item-info'>
                    
                    
                </div>
            </div>
            <div className='right-page'>
                <div className='x' onClick={()=>removeFromCart(item.id)}>X</div>
                <h3>{item.name}</h3>
                <h4>{item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>

            </div>
            
            
            
        </div>
    )
}

export default CartItem