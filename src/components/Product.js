import React from "react";
import {Context} from '../context/context'

function Product({item}){


    const productImgStyles = {
        height: "300px",
        width: "300px",
    }
    const {addToCart, removeFromCart} = React.useContext(Context)

    return(
        <div className="product-box">
            <img src={item.img} alt="" style={productImgStyles}/>
            <div className="info">
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                
                <button onClick={()=>addToCart(item)}>Add to Cart</button>
                <button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
                <button onClick={()=> console.log(item)}>OKOKO</button>
            </div>
            
        </div>
    )

    
}

export default Product