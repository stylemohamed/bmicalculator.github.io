document.addEventListener('DOMContentLoaded', function(){


    const HeightInput = document.querySelector('#container #InsideContainer #HeightSquared');
    

    const WeightInput = document.querySelector('#container #InsideContainer #Weight');
   

    const DisplayBMI = document.querySelector('#container #InsideContainer #BMI');
    const Button = document.querySelector('#container #InsideContainer #CalculateBMI');

    Button.addEventListener('click', function(){
        const HeightValue = HeightInput.value
        const WeightValue = WeightInput.value

        if(HeightValue < 0 || WeightValue < 0 || HeightValue === '' || WeightValue === ''){
            alert('Please Add Correct Values')
            return

        }

        const BMIResult = (WeightValue / HeightValue).toFixed(2);

        if(BMIResult < 18.5){
            DisplayBMI.innerHTML = `Your BMI is ${BMIResult}, You're Underweight!`

        } else if (BMIResult > 18.5 && BMIResult < 24.9){
            DisplayBMI.innerHTML = `Your BMI is ${BMIResult}, You're Healthy!`

        } else if( BMIResult > 25){
            DisplayBMI.innerHTML = `Your BMI is ${BMIResult}, You're Overweight!`


        } else {
            alert('Invalid BMI')
            return


        }


        WeightInput.value = ''
        HeightInput.value = ''






    })



























})