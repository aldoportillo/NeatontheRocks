import React from "react";
import {Context} from '../context/context'

function Product(props){

    const productImgStyles = {
        height: "300px",
        width: "300px",
    }
    const {addToCart} = React.useContext(Context)


    return(
        <div className="product-box">
            <img src={props.img} alt="" style={productImgStyles}/>
            <div className="info">
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
                
                <button onClick={()=>addToCart(props)}>Favorite this Item</button>
            </div>
            
        </div>
    )

    
}

export default Product