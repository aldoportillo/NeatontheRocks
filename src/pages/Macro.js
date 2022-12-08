import React from 'react'
import NutritionLabel from '../components/NutritionLabel'
import { Context } from '../context/context'
import { arrLiquids } from '../bar/alcoholData'

export default function Macro () {

    const {nutrition} = React.useContext(Context)

    console.log(arrLiquids)

    const renderOptions = arrLiquids.map(liquid => {
        return <option value={liquid.name}>{liquid.name}</option>
    })

    return (
        <div className='nutrition-page'> 

            <form>
                <select name="liquid">
                    {renderOptions}
                </select>
                <input placeholder='Please Enter Amount in OZ'/>
            </form>
            {/* <div className='nutrition-label'>
               <NutritionLabel item={nutrition}/>
            </div> */}

        </div>
    )
}