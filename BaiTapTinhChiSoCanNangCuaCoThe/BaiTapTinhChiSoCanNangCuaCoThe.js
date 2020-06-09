
 function tinhBmi() {
  let height2 = parseInt(document.getElementById('height1').value);
  console.log(height2);
  let weight2 = parseInt(document.getElementById('weight1').value);
  console.log(weight2);
  let bmi = (weight2/(height2*height2*0.0001));//parseInt((weight2/(height2*height2)));
  console.log(bmi);
  if (bmi < 18.5){
  alert("underweight");}

  else  if((bmi >= 18.5)&&(bmi < 25.0)) {
      alert('normal');
  }
    else if ((bmi >= 25)&&(bmi < 30.0)){
    alert('Overweight');
    }
    else{
      alert('Obese');
    }
  }  
 
 
  
          