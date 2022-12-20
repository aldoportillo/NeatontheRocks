import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Cocktails() {

    const [cocktailData, setCocktailData] = React.useState([])

    React.useEffect(( ) => {
        axios.get(process.env.BACKEND_URL)
      .then(res => {
        const cocktailData = res.data;
        setCocktailData(cocktailData)
      })
    }, [])

    const renderCocktails = cocktailData.map(cocktail => {
        const {name, _id, image} = cocktail
        return (
            <div key={_id} className='cocktail-card'>
                <Link to={`/cocktail/${_id}`} state={{ from: "cocktail", data: cocktail}}>
                    <h3>{name}</h3>
                    <img src={image.filePath} alt="" />
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
