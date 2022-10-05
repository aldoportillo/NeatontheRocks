import React from 'react'

export default function Macro () {
    return (
        <div className='nutrition-page'> 
            <section class="performance-facts">
            <div class="performance-facts__header">
                <h1 class="performance-facts__title" style={{color: "black"}}>Nutrition Facts</h1>
                <p>Serving Size 1/2 cup (about 82g)</p>
                <p>Serving Per Container 8</p>
            </div>
            <table class="performance-facts__table">
                <thead>
                <tr>
                <th colspan="3" class="small-info">
                Amount Per Serving
                </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th colspan="2">
                    <b>Calories</b>
                    200
                    </th>
                    <td>
                    Calories from Fat
                    130
                    </td>
                </tr>
                <tr class="thick-row">
                    <td colspan="3" class="small-info">
                    <b>% Daily Value*</b>
                    </td>
                </tr>
                <tr>
                    <th colspan="2">
                    <b>Total Fat</b>
                    14g
                    </th>
                    <td>
                    <b>22%</b>
                    </td>
                </tr>
                <tr>
                    <td class="blank-cell">
                    </td>
                    <th>
                    Saturated Fat
                    9g
                    </th>
                    <td>
                    <b>22%</b>
                    </td>
                </tr>
                <tr>
                    <td class="blank-cell">
                    </td>
                    <th>
                    Trans Fat
                    0g
                    </th>
                    <td>
                    </td>
                </tr>
                <tr>
                    <th colspan="2">
                    <b>Cholesterol</b>
                    55mg
                    </th>
                    <td>
                    <b>18%</b>
                    </td>
                </tr>
                <tr>
                    <th colspan="2">
                    <b>Sodium</b>
                    40mg
                    </th>
                    <td>
                    <b>2%</b>
                    </td>
                </tr>
                <tr>
                    <th colspan="2">
                    <b>Total Carbohydrate</b>
                    17g
                    </th>
                    <td>
                    <b>6%</b>
                    </td>
                </tr>
                <tr>
                    <td class="blank-cell">
                    </td>
                    <th>
                    Dietary Fiber
                    1g
                    </th>
                    <td>
                    <b>4%</b>
                    </td>
                </tr>
                <tr>
                    <td class="blank-cell">
                    </td>
                    <th>
                    Sugars
                    14g
                    </th>
                    <td>
                    </td>
                </tr>
                <tr class="thick-end">
                    <th colspan="2">
                    <b>Protein</b>
                    3g
                    </th>
                    <td>
                    </td>
                </tr>
                </tbody>
            </table>

            <table class="performance-facts__table--grid">
                <tbody>
                <tr>
                    <td colspan="2">
                    Vitamin A
                    10%
                    </td>
                    <td>
                    Vitamin C
                    0%
                    </td>
                </tr>
                <tr class="thin-end">
                    <td colspan="2">
                    Calcium
                    10%
                    </td>
                    <td>
                    Iron
                    6%
                    </td>
                </tr>
                </tbody>
            </table>

            <p class="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>

            <table class="performance-facts__table--small small-info">
                <thead>
                <tr>
                    <td colspan="2"></td>
                    <th>Calories:</th>
                    <th>2,000</th>
                    <th>2,500</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th colspan="2">Total Fat</th>
                    <td>Less than</td>
                    <td>65g</td>
                    <td>80g</td>
                </tr>
                <tr>
                    <td class="blank-cell"></td>
                    <th>Saturated Fat</th>
                    <td>Less than</td>
                    <td>20g</td>
                    <td>25g</td>
                </tr>
                <tr>
                    <th colspan="2">Cholesterol</th>
                    <td>Less than</td>
                    <td>300mg</td>
                    <td>300 mg</td>
                </tr>
                <tr>
                    <th colspan="2">Sodium</th>
                    <td>Less than</td>
                    <td>2,400mg</td>
                    <td>2,400mg</td>
                </tr>
                <tr>
                    <th colspan="3">Total Carbohydrate</th>
                    <td>300g</td>
                    <td>375g</td>
                </tr>
                <tr>
                    <td class="blank-cell"></td>
                    <th colspan="2">Dietary Fiber</th>
                    <td>25g</td>
                    <td>30g</td>
                </tr>
                </tbody>
            </table>

            <p class="small-info">
                Calories per gram:
            </p>
            <p class="small-info text-center">
                Fat 9
                &bull;
                Carbohydrate 4
                &bull;
                Protein 4
            </p>

            </section>
        </div>
    )
}