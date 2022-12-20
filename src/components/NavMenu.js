import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <nav>
                <Link to="/macro"><h3>Nutrition</h3></Link>
                <Link to="/cocktails"><h3>Cocktails</h3></Link>
                <Link to="/products"><h3>Products</h3></Link>
    </nav>
  )
}
