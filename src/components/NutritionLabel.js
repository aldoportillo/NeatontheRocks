import React from "react";

function NutritionLabel ({item}) {
    return(
        <div className="label-container">
            <h2 className="title">Cocktail Facts</h2>
            <div className="thick1"></div>
            <h3>Serving Size <p>1 drink</p></h3>
            <h2>Calories <p>{item.calories}</p></h2>
            <div className="thick2"></div>
            <h3>Ethanol  <p>{item.ethanol}g </p></h3>
            <hr />
            <h3>Total Fat  <p>{item.fat} g</p></h3>
            <hr />
            <h3>Total Carbohydrate  <p>{item.carb} g</p></h3>
            <hr />
            <h3>    <p>Total Sugars  {item.sugar} g</p></h3>
            <hr />
            <h3>        <p>Includes  {item.addedSugar} g Added Sugars</p></h3>
            <hr />
            <h3>Protein  <p>{item.protein} g</p></h3>
            <div className="thick1"></div>
        </div>
        

    )
}

export default NutritionLabel