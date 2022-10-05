import React from 'react'
import { Context } from '../context/context'
import CartItem from '../components/CartItem'

 function Cart () {
    const {cart} = React.useContext(Context)

    console.log(cart)
    const cartItemElements = cart?.map(item => (
        <CartItem key={item.id} name={item.name}/>
    ))

    return (
        <div className='cart-page'>
            {cartItemElements}
        </div>
    )
}

export default Cart