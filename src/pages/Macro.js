import React from 'react'
import { getMacros } from '../bar/macros'
import LiquidForm from '../components/LiquidForm'
import NutritionLabel from '../components/NutritionLabel'
import { Context } from '../context/context'
import { alcoholData } from '../bar/alcoholData'


export default function Macro () {

    const {nutrition} = React.useContext(Context)

    const [cocktail, setCocktail] = React.useState([])
    const [forms, setForms] = React.useState([1])
    function addForm() {
        setForms([...forms, 1])
    }

    const renderForms = forms.map(form => {
        return  <LiquidForm title={form} addForm={addForm} setCocktail={setCocktail} cocktail={cocktail}/>
    })
   
    return (
        <div className='nutrition-page'> 
            <div className='form'>
                {renderForms}
            </div>
            
            <div className='nutrition-label'>
               <NutritionLabel item={getMacros(cocktail, alcoholData)}/>
            </div> 

        </div>
    )
}