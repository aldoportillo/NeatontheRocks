import { alcoholData } from '../bar/alcoholData'

const macros = [4,20,3,20];
      //Gainging Calories from Grams
const fatCal = (gramFat) => {
  return gramFat * 9;
};
//Note to future self: Consolidate protein and carb functions
const carbCal = (gramCarb) => {
  return gramCarb * 4;
};

const proteinCal = (gramProtein) => {
  return gramProtein * 4;
};

const ethanolCal = (gramEthanol) => {
  return gramEthanol * 7;
};

const calories = [];

calories.push(fatCal(macros[0]), carbCal(macros[1]), proteinCal([2]),ethanolCal([3]));

//find a way to sum up all items in an array

const totCal = calories[0] + calories[1] + calories[2] + calories[3];
//console.log(`The calories of your drink cointaining ${macros[0]} grams of fat, ${macros[1]} grams of carb, ${macros[2]} grams of protein, and ${macros[3]} grams of ethanol contains ${totCal} calories!`);


export const getMacros = (arr, arr2) => {
  console.log("you got this")
  const macros ={
    fat: 0,
    carb: 0,
    sugar: 0,
    addedSugar: 0,
    protein: 0,
    calories: 0,
    ethanol: 0,
  }

  arr.map((item) => {
    arr2.map((item2) => {
      if(item2.name === item.name){
        macros.calories += item.ounces * item2.calories
        macros.protein += item.ounces * item2.protein
        macros.addedSugar += item.ounces * item2.addedSugar
        macros.sugar += item.ounces * item2.sugar
        macros.carb += item.ounces * item2.carb
        macros.fat += item.ounces * item2.fat
      }
      return null

    })
    return null
  })

  return macros
  

}


