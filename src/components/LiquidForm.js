import React from 'react'
import { arrLiquids } from '../bar/alcoholData'

export default function LiquidForm() {

     const renderOptions = arrLiquids.map(liquid => {
        return <option value={liquid.name}>{liquid.name}</option>
    })

  return (
    <form>
        <select name="liquid">
            {renderOptions}
        </select>
        <input placeholder='Please Enter Amount in OZ'/>
        <button>Add Liquid</button>
    </form>
  )
}
