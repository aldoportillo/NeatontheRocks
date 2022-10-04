import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
    return (
        <div className='header'>
            <Link to="/"><h1>Neat on the Rocks</h1></Link>
            <Link to="/products"><h3>Products</h3></Link>
            <Link to="/cart"><h3>Cart</h3></Link>
            <Link to="/macro"><h3>Nutrition</h3></Link>
            
        </div>
        
        

        
    )
}