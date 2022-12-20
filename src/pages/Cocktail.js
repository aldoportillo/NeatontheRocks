import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Cocktail(props) {

    const location = useLocation()
    const { data } = location.state

    console.log("From cocktail page")
    console.log(data);

    const {name, specs, instructions, description, image} = data;

    const item = {calories: 2, ethanol: 3, fat:4, carb: 6, sugar: 6, addedSugar: 6, protein:5}

    const renderSpecList = specs.map(liquid => { 
        if(liquid.dashes) {
            return <li> <h5>{liquid.spirit}</h5> <h5>{liquid.dashes} dashes</h5>  </li>
        }
        return <li> <h5>{liquid.spirit}</h5> <h5>{liquid.ounces} OZ</h5>  </li>
    })

    const renderInstructions = instructions.map(step => { 
        return <li> <h4>{step} </h4></li> 
    })
  return (
    <div className='cocktail-page'>
        <div className='cocktail-left-page'>
            <h2>{name}</h2>
            <img src={image.filePath} alt="" />
            <div className='spec-list'>
                <h3>Spec List</h3>
                <ul>{renderSpecList}</ul> 
            </div>
        </div>
        <div className='cocktail-right-page'>
            <div className='instructions'>
                <h3>Instructions</h3>
                <ol>{renderInstructions}</ol>
            </div>
            <div className='description'>
                <h3>Description</h3>
                <h5>{description}</h5> 
            </div>
            
            <div className='nutrition-label'>
            <div className="label-container">
            <h2 className="title">Cocktail Facts</h2>
            <div className="thick1"></div>
            <h3>Serving Size <p>1 drink</p></h3>
            <h2>Calories <p>{Math.ceil(item.calories)}</p></h2>
            <div className="thick2"></div>
            <h3>Ethanol  <p>{Math.ceil(item.ethanol)}g </p></h3>
            <hr />
            <h3>Total Fat  <p>{Math.ceil(item.fat)} g</p></h3>
            <hr />
            <h3>Total Carbohydrate  <p>{Math.ceil(item.carb)} g</p></h3>
            <hr />
            <h3>    <p>Total Sugars  {Math.ceil(item.sugar)} g</p></h3>
            <hr />
            <h3>        <p>Includes  {Math.ceil(item.addedSugar)} g Added Sugars</p></h3>
            <hr />
            <h3>Protein  <p>{Math.ceil(item.protein)} g</p></h3>
            <div className="thick1"></div>
        </div>
            </div>
            <Link to="/cocktails"><button>Back to Cocktails</button></Link>
        </div>
    </div>
  )
}
