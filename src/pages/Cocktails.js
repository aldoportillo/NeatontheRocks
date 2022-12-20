import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

    const renderCocktails = cocktailData.map(cocktail => {
        const {name, _id} = cocktail

        return (
            <div className='cocktail-card'>
                <Link to={`/cocktail/${_id}`}>
                    <h3>{name}</h3>
                </Link>
            </div>
        )
    })

    
  return (
    <div className='cocktails-page'>
        <div className='cocktail-list-container'>
            {renderCocktails}
        </div>
    </div>
  )
}
