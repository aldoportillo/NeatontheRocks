import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Cocktail(props) {

    const location = useLocation()
    const { from, data } = location.state

    console.log("From cocktail page")
    console.log(data);

    const {name, specs, instructions, description} = data;

    const renderSpecList = specs.map(liquid => { //Remember to take in account bitters and any odd ball add condtional if has dashes if has ounces
        return <li> <h4>{liquid.spirit}</h4> <h5>{liquid.ounces}</h5> OZ </li> //For ounces
    })

    const renderInstructions = instructions.map(step => { //Remember to take in account bitters and any odd ball add condtional if has dashes if has ounces
        return <li> <h4>{step} </h4></li> //For ounces
    })
  return (
    <div className='cocktail-page'>
        <h2>{name}</h2>
        <div className='img'></div>
        <ul>{renderSpecList}</ul>
        <ol>{renderInstructions}</ol>
        <h5>{description}</h5> 
        <Link to="/cocktails"><button>Back to Cocktails</button></Link>
    </div>
  )
}
