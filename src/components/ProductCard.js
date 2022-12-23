import React from "react";
import { Link } from "react-router-dom";
import {Context} from '../context/context'

function ProductCard({item}){


    const productImgStyles = {
        height: "300px",
        width: "300px",
    }
    const {addToCart} = React.useContext(Context)

    return(
        <div className="product-box">
            <img src={item.img} alt="" style={productImgStyles}/>
            <div className="info">
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                
                <button onClick={()=>addToCart(item)}>Add to Cart</button>
                <Link to={`/products/${item.id}`} state={{ from: "/products", data: item }}> <button>View Item</button></Link>
            </div>
            
        </div>
    )

    
}

export default ProductCard