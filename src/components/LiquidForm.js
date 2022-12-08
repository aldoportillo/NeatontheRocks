import React from 'react'
import { alcoholData } from '../bar/alcoholData'

export default function LiquidForm({title, addForm, cocktail, setCocktail}) {

  const renderOptions = alcoholData.map(liquid => {
    return <option value={liquid.name}>{liquid.name}</option>
  })

  function handleSubmit(e) {
    e.preventDefault()
    setCocktail([...cocktail, {name: e.target.liquid.value, ounces: e.target.ounces.value}])
    e.target.ounces.value = null
  }
  return (
    <>
    <h3>Liquid {title}</h3>
    <form onSubmit={handleSubmit}>
        <select name="liquid">
            {renderOptions}
        </select>
        <input name="ounces" type="number" placeholder='ounces' />
        <button type='submit'>Add Liquid</button>
    </form>
    </>
  )
}
