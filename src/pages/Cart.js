import React from 'react'
import { Context } from '../context/context'
import CartItem from '../components/CartItem'

 function Cart () {
    const {cart} = React.useContext(Context)

    const cartItemElements = cart?.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function getTotal (arr) {
        let total = 0;
        for(let i = 0; i < arr.length; i++){
            total = total + arr[i].price
        }
        return total.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }

    return (
        <div className='cart-page'>
            <div className='cart-header'>Cart</div>
            <div className='cart-items'>
                {cartItemElements}
            </div>
            <div className='pricing'>
                <h1>Checkout</h1>
                <h2>Total: {getTotal(cart)}</h2>
                <button>Place Order</button>
            </div>
            
        </div>
    )
}

export default Cart