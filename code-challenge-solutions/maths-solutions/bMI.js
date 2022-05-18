


function bmi(weight, height) {
    let bmi = (weight) / (height * height)
    
    if( bmi <= 18.5){
      return 'Underweight'
    }else if( bmi <= 25.0){
      return 'Normal'
    } else if (bmi <= 30){
      return 'Overweight'
    } else(bmi > 30)
      return 'Obese'
  }