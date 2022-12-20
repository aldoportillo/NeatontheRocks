import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Cocktail(props) {

    const location = useLocation()
    const { data } = location.state

    console.log("From cocktail page")
    console.log(data);

    const {name, specs, instructions, description, image} = data;

    const renderSpecList = specs.map(liquid => { 
        if(liquid.dashes) {
            return <li> <h4>{liquid.spirit}</h4> <h5>{liquid.dashes}</h5> dashes </li>
        }
        return <li> <h4>{liquid.spirit}</h4> <h5>{liquid.ounces}</h5> OZ </li>
    })

    const renderInstructions = instructions.map(step => { 
        return <li> <h4>{step} </h4></li> 
    })
  return (
    <div className='cocktail-page'>
        <h2>{name}</h2>
        <img src={image.filePath} alt="" />
        <ul>{renderSpecList}</ul>
        <ol>{renderInstructions}</ol>
        <h5>{description}</h5> 
        <Link to="/cocktails"><button>Back to Cocktails</button></Link>
    </div>
  )
}
