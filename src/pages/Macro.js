import React from 'react'
import NutritionLabel from '../components/NutritionLabel'
import {alcoholData} from "../bar/alcoholData"

const nutrition = {
    calories: 200,
    fat: 6,
    carbs: 7,
    protein: 3,
    sugar: 2,
    ethanol: 4,
}

export default function Macro () {


    console.log(alcoholData.gin)
    return (
        <div className='nutrition-page'> 
            <div className='nutrition-label'>
               <NutritionLabel item={nutrition}/>

            </div>

        </div>
    )
}