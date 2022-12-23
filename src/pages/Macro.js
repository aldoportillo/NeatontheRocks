import React from 'react'
import LiquidForm from '../components/LiquidForm'
import NutritionLabel from '../components/NutritionLabel'
import SpecList from '../components/SpecList'
import { nanoid } from 'nanoid'
import { getMacros } from '../bar/macros'


export default function Macro ({spiritData}) {

    const [cocktail, setCocktail] = React.useState([])

   const renderSpecList = cocktail.map(item => {
    return <SpecList key={nanoid()} name={item.name} ounces={item.ounces} />
   })

   React.useEffect(() => {
    console.log("rerender")
   },[spiritData])
    return (
        <>
        {spiritData ? <div className='nutrition-page'> 
            <div className='left-page'>
                <div className='form'>
                <LiquidForm setCocktail={setCocktail} cocktail={cocktail} spiritData={spiritData}/>
                </div>
                <div className='spec-list-container'>
                    <div className='spec-list thead'>
                        <h2>Ingedients</h2>
                        <h3>Amount</h3>
                    </div>
                    {renderSpecList}
                    <button onClick={() => setCocktail([])}>Clear Drink</button>
                </div>
            </div>
            <div className='nutrition-label'>
               <NutritionLabel item={getMacros(cocktail, spiritData)}/>
            </div> 

        </div> : <img src={require("../assets/loading.gif")} alt=""/>}
        </>
    )
}