import React from 'react'
import { Context } from '../context/context'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

export default function Products () {
    const {allItems} = React.useContext(Context)

    const renderProducts = allItems.map(product => {
        return(
            <ProductCard key={product.id} item={product}/>
        )
    })
    return (
        <div className='products-page'>
            <h3>Check out all our products</h3>
            
            <div className='product-container'>
                {renderProducts}
            </div>

            <Link to="/cart"><button>Go to Cart</button></Link>
        </div>
    )
}