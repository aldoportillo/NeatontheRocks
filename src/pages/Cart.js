import React from 'react'
import { Context } from '../context/context'
import CartItem from '../components/CartItem'

 function Cart () {
    const {cart} = React.useContext(Context)

    const cartItemElements = cart?.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    return (
        <div className='cart-page'>
            <div className='cart-header'>Cart</div>
            <div className='cart-items'>
                {cartItemElements}
            </div>
            
        </div>
    )
}

export default Cart