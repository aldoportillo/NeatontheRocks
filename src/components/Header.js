import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'

export default function Header ({setOpenNav, openNav}) {
    return (
        <div className='header'>
            <div className='title'>
                <img require src={require('../media/logo.png')} alt=""/> 
                <Link to="/"><h1>Neat on the Rocks</h1></Link>
            </div>
            <h1 onClick={() => setOpenNav(!openNav)}>x</h1>
            <NavMenu />
        </div>
        
        

        
    )
}