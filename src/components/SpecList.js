import React from 'react'

export default function SpecList({name, ounces, cocktail, setCocktail}) {

    const deleteSpec = (name, arr) => {
        let newArr = arr;

        const index = newArr.findIndex(obj => {
            return obj.name === name;
        })

        newArr.splice(index, 1)

        console.log(newArr)
        setCocktail(newArr)
    }

    console.log(cocktail)
  return (
    <div className='spec-list'>
        <h3>{name}</h3>
        <h3>{ounces}</h3>
        <p onClick={() => deleteSpec(name, cocktail)}>x</p>
    </div>
  )
}
