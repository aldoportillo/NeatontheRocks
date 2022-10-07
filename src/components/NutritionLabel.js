import React from "react";

function NutritionLabel ({item}) {
    return(
        <div className="label-container">
            <h2>Calories: {item.calories}</h2>
            <h2>Carbs: {item.carbs}</h2>
            <h2>Sugar: {item.sugar}</h2>
            <h2>Fat: {item.fat}</h2>
            <h2>Ethanol: {item.ethanol}</h2>
            <h2>Protein: {item.protein}</h2>
            
        </div>
        

    )
}

export default NutritionLabel