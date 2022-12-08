import React from 'react'
import { arrLiquids } from '../bar/alcoholData'

export default function LiquidForm({title, addForm}) {

     const renderOptions = arrLiquids.map(liquid => {
        return <option value={liquid.name}>{liquid.name}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        addForm()
    }
  return (
    <>
    <h3>Liquid {title}</h3>
    <form>
        <select name="liquid">
            {renderOptions}
        </select>
        <input placeholder='Please Enter Amount in OZ'/>
        <button onClick={handleSubmit}>Add Liquid</button>
    </form>
    </>
  )
}
