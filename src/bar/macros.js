export const getMacros = (arr, arr2) => {
  
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


