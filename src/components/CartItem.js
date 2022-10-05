import React from 'react'

function CartItem (props) {
    return(
        <div className='cart-item'>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <img src={props.img} alt="" />
        </div>
    )
}

export default CartItem