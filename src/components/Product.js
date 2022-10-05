import React from "react";


function Product(props){
    return(
        <div>
            <h1>Product Rendered</h1>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h3>{props.id}</h3>
        </div>
    )
}

export default Product