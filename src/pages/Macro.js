import React from 'react'
import LiquidForm from '../components/LiquidForm'
import NutritionLabel from '../components/NutritionLabel'
import { Context } from '../context/context'


export default function Macro () {

    const {nutrition} = React.useContext(Context)

    const [forms, setForms] = React.useState([1])

    function addForm() {
        setForms([...forms, 1])
    }

    const renderForms = forms.map(form => {
        return  <LiquidForm title={form} />
    })
   
    return (
        <div className='nutrition-page'> 
            <div className='form'>
                {renderForms}
                <button onClick={()=> addForm()}>Add New Liquid</button>
            </div>
            
            {/* <div className='nutrition-label'>
               <NutritionLabel item={nutrition}/>
            </div> */}

        </div>
    )
}