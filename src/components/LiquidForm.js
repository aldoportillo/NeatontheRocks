import React from 'react'

export default function LiquidForm({title, cocktail, setCocktail,spiritData}) {

  const renderOptions = spiritData.map(liquid => {
    return <option key={liquid._id} value={liquid.name}>{liquid.name}</option>
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
        <select name="liquid" required>
            {renderOptions}
        </select>
        <input name="ounces" type="number" placeholder='ounces' step="any" min="0" required/>
        <button type='submit'>Add Liquid</button>
    </form>
    </>
  )
}
