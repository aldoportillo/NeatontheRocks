import React from 'react'
import { NutritionLabel } from 'react-fda-nutrition-facts'


export default function Macro () {
    return (
        <div className='nutrition-page'> 
            <div className='nutrition-label'>
                <NutritionLabel
                    
                    servingSize={'1 cup (228g)'}
                    servingsPerContainer={2}
                    calories={260}
                    totalFat={13}
                    saturatedFat={5}
                    transFat={2}
                    cholesterol={30}
                    sodium={660}
                    totalCarbs={31}
                    dietaryFiber={0}
                    sugars={5}
                    protein={5}
                    vitaminA={4}
                    vitaminC={2}
                    calcium={15}
                    iron={4}
                    />

            </div>

        </div>
    )
}