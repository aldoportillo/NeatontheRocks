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

      //Gaining Gram from Calories

const fatGram = (calFat) => {
  return calFat / 9;
};

const carbGram = (calCarb) => {
  return calCarb / 4;
};

const proteinGram = (calProtein) => {
  return calProtein / 4;
};

const ethanolGram = (calEthanol) => {
  return calEthanol / 7;
};

//use a .map iterator method
/*const Calories = macros.map(number => {
  if (number === macros.indexOf[0]){
    return fatCal(macros[0]);
  }
});

console.log(macros);

console.log(macros.indexOf(1));
*/

const calories = [];

calories.push(fatCal(macros[0]), carbCal(macros[1]), proteinCal([2]),ethanolCal([3]));

//find a way to sum up all items in an array

const totCal = calories[0] + calories[1] + calories[2] + calories[3];
console.log(`The calories of your drink cointaining ${macros[0]} grams of fat, ${macros[1]} grams of carb, ${macros[2]} grams of protein, and ${macros[3]} grams of ethanol contains ${totCal} calories!`);



function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}
console.log(countInArray('food', 'o'));

//cool code i wrote
const subLength = (word, letter) => {
  if (word.split(letter).length-1 === 2){
    return word.lastIndexOf(letter) - word.indexOf(letter) + 1;
  } else {
    return 0;
  }
}


const groceries = list => {
  let listString = ''

  for (let i=0; i<list.length; i++) {
    listString += list[i].item;
    if (i < list.length - 2) {
      listString += ', ';
    } else if (i == list.length - 2){
      listString += ' and ';
    }
  }
  
  return listString;
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'