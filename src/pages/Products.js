import React from 'react'
import { Context } from '../context/context'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

export default function Products () {
    const {productData, loadingProducts} = React.useContext(Context)

    const renderProducts = productData?.map(product => {
        return(
            <ProductCard key={product._id} item={product}/>
        )
    })

    return (
        <div className='products-page'>
            {loadingProducts ?  
            <img src={require("../assets/loading.gif")} className="loader" alt=""/> :
            <>
            <div className='product-container'>
                {renderProducts}
            </div>

            <Link to="/cart"><button className="--whiskey-btn">Go to Cart</button></Link>
            </>}
            
        </div>
    )
}