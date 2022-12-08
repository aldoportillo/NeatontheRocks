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
    protein: 0,
    calories: 0,
    ethanol: 0,
  }

  return arr.map((item, index) => {
    arr2.map((item2, index) => {
      if(item2.name === item.name){
        console.log(item2.calories)
      }
    })
    return item.name + index
  })
  

}


