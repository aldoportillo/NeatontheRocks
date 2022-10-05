import React from 'react'
import { Context } from '../context/context'
import Product from '../components/Product'

export default function Products () {
    const {allItems} = React.useContext(Context)

    const renderProducts = allItems.map(product => {
        return(
            <Product key={product.id} name={product.name} price={product.price} />
        )
    })
    return (
        <div className='products-page'>
            <h3>Check out all our products</h3>
            {renderProducts}
        </div>
    )
}