import React from 'react'
import { Context } from '../context/context'
import Product from '../components/Product'

export default function Products () {
    const {allItems} = React.useContext(Context)

    const renderProducts = allItems.map(product => {
        return(
            <Product key={product.id} item={product}/>
        )
    })
    return (
        <div className='products-page'>
            <h3>Check out all our products</h3>
            
            <div className='product-container'>
                {renderProducts}
            </div>
        </div>
    )
}