import React from 'react'
import { Context } from '../context/context'
import CartItem from '../components/CartItem'

 function Cart () {
    const {cart, clearCart} = React.useContext(Context)
    const [orderButton, setOrderButton] = React.useState('Place Order')

    const cartItemElements = cart?.map(item => (
        <>
        <CartItem key={item.id} item={item} />
        <hr className='--white-divide'/>
        </>
    ))

    function getTotal (arr) {
        let total = 0;
        for(let i = 0; i < arr.length; i++){
            total = total + arr[i].price
        }
        return total.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }


    function placeOrder() {
        setOrderButton("Ordering ...")
        setTimeout(()=>{
            setOrderButton("Place Order")
            clearCart()
            alert('order placed')
        }, "3000")
    }

    return (
        <div className='cart-page'>
            {cart.length > 0 ? 
            <>
            <div className='cart-header'>Cart</div>
            <div className='cart-items'>
                {cartItemElements}
            </div>
            <div className='pricing'>
                <h1>Checkout</h1>
                <h2>Total: {getTotal(cart)}</h2>
                <button onClick={placeOrder} className="--whiskey-btn">{orderButton}</button>
            </div>
                </> : 
            <div className='cart-header'>Your cart is empty</div>}
            
            
        </div>
    )
}

export default Cart