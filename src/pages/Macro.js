import React from 'react'
import NutritionLabel from '../components/NutritionLabel'
import { Context } from '../context/context'

export default function Macro () {

    const {nutrition} = React.useContext(Context)

    return (
        <div className='nutrition-page'> 
            <div className='nutrition-label'>
               <NutritionLabel item={nutrition}/>

            </div>

        </div>
    )
}