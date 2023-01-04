import React from 'react'
import { Link } from 'react-router-dom'

export default function Cocktails({cocktailData, loading}) {

    

    const renderCocktails = cocktailData?.map(cocktail => {
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

    React.useEffect(()=> {
        console.log('Cocktail rerender');
    }, [loading])
    
  return (
    <div className='cocktails-page'>
            {loading ?
            <img src={require("../assets/loading.gif")} className="loader" alt=""/> :
            <div className='cocktail-list-container'>
                {renderCocktails}
            </div>}
        
    </div>
  )
}
