import React from 'react'
import { Link } from 'react-router-dom'

export default function Cocktails({cocktailData}) {

    

    const renderCocktails = cocktailData.map(cocktail => {
        const {name, _id, image} = cocktail
        return (
            <>
            {cocktailData ?
            <div key={_id} className='cocktail-card'>
                <Link to={`/cocktail/${_id}`} state={{ from: "cocktail", data: cocktail}}>
                    <h3>{name}</h3>
                    <img src={image.filePath} alt="" />
                </Link>
            </div> : <img src={require("../assets/loading.gif")} alt=""/>}
            </>
        )
    })

    React.useEffect(() => {
        console.log("rerender")
       },[cocktailData])
    
  return (
    <div className='cocktails-page'>
        <div className='cocktail-list-container'>
            {renderCocktails}
        </div>
    </div>
  )
}
