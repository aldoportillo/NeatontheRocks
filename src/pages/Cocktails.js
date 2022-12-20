import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Cocktails() {

    const [cocktailData, setCocktailData] = React.useState([])

    React.useEffect(( ) => {
        axios.get(`http://192.168.0.206:5000/api/cocktails`)
      .then(res => {
        const cocktailData = res.data;
        
        setCocktailData(cocktailData)
        console.log(cocktailData)
      })
    }, [])

    const renderCocktails = cocktailData.map(cocktail => {
        const {name, _id} = cocktail

        console.log(cocktail)
        return (
            <div key={_id} className='cocktail-card'>
                <Link to={`/cocktail/${_id}`} state={{ from: "cocktail", data: cocktail}}>
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
