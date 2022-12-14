import React from "react";
import { Link } from "react-router-dom";
import {Context} from '../context/context'

function ProductCard({item}){

    const {addToCart} = React.useContext(Context)

    return(
        <div className="product-box">
            <img src={item.img.mainImage} alt="" />
            <div className="info">
                <h3>{item.name}</h3>
                <h4> &#36; {item.price}</h4>
                <div className="product-box-buttons">
                    <button onClick={()=>addToCart(item)} className="--btn-white">Add to Cart</button>
                    <Link to={`/products/${item._id}`} state={{ from: "/products", data: item }}> <button className="--btn-black">View Item</button></Link>
                </div>
            </div>
            
        </div>
    )

    
}

export default ProductCard