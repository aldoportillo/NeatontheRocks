import React from "react";


function Product(props){

    const productImgStyles = {
        height: "300px",
        width: "300px",
    }
    return(
        <div className="product-box">
            <img src={props.img} alt="" style={productImgStyles}/>
            <div className="info">
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
            </div>
            
        </div>
    )
}

export default Product