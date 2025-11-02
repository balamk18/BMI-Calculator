function calculateBMI(){
    let Weightinput = prompt("Enter you Weight")
    let Heightinput = prompt("Enter you Height")


let weight = parseFloat(Weightinput);
let heightcm = parseFloat(Heightinput);

let height =heightcm / 100;

let bmi = weight / (height + height);

document.getElementById("result").innerHTML =` Boss your BMI is : ${bmi.toFixed(2)}`;
}

