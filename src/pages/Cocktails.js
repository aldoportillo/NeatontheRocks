import React from 'react'
import axios from 'axios'

export default function Cocktails() {

    const [cocktailData, setCocktailData] = React.useState([])

    React.useEffect(( ) => {
        axios.get(`http://localhost:5000/api/cocktails`)
      .then(res => {
        const cocktailData = res.data;
        
        setCocktailData(cocktailData)
        console.log(cocktailData)
      })
    }, [])

    //Folllowing code is kinda for cocktail page


    const {name, specs, instructions, description} = cocktailData[0];

    const renderSpecList = specs.map(liquid => { //Remember to take in account bitters and any odd ball add condtional if has dashes if has ounces

        return <li> <h4>{liquid.spirit}</h4> <h5>{liquid.ounces}</h5> OZ </li> //For ounces

    })

    const renderInstructions = instructions.map(step => { //Remember to take in account bitters and any odd ball add condtional if has dashes if has ounces

        return <li> <h4>{step} </h4></li> //For ounces

    })
  return (
    // The Following Code is Actually for the Cocktail page component
    <div className='cocktail-page'>
        <h2>{name}</h2>
        <ul>{renderSpecList}</ul>
        <ol>{renderInstructions}</ol>
        <h5>{description}</h5>
    </div>
  )
}
