import React from 'react'
import { getMacros } from '../bar/macros'
import LiquidForm from '../components/LiquidForm'
import NutritionLabel from '../components/NutritionLabel'
import { Context } from '../context/context'
import { alcoholData } from '../bar/alcoholData'
import SpecList from '../components/SpecList'
import { nanoid } from 'nanoid'


export default function Macro () {

    const {nutrition} = React.useContext(Context)

    const [cocktail, setCocktail] = React.useState([])

   const renderSpecList = cocktail.map(item => {
    return <SpecList key={nanoid()} name={item.name} ounces={item.ounces} />
   })
    return (
        <div className='nutrition-page'> 
            <div className='form'>
            <LiquidForm setCocktail={setCocktail} cocktail={cocktail}/>
            </div>
            <div className='spec-list-container'>
                <div className='spec-list thead'>
                    <h2>Ingedients</h2>
                    <h3>Amount</h3>
                </div>
                {renderSpecList}
            </div>
            <div className='nutrition-label'>
               <NutritionLabel item={getMacros(cocktail, alcoholData)}/>
            </div> 

        </div>
    )
}