
let inputArea = document.getElementById("mainInput");
const convertBtn = document.getElementById("convert-btn");
let lengthNum = document.getElementById("length-num")
let volumeNum = document.getElementById("volume-num")
let massNum = document.getElementById("mass-num")

convertBtn.addEventListener("click", () => {
  let inputValue = parseFloat(inputArea.value);
  lengthNum.innerHTML = "";
  volumeNum.innerHTML = "";
  massNum.innerHTML = "";

  if (isNaN(inputValue)) {
    alert("Isn't it obvious that need to enter a valid number, b*tch?!");
    return; 
  } else{ 
 lengthNum.innerHTML = `${inputValue} meters = ${(inputValue * 3.281).toFixed(2)} feet | ${inputValue} feet = ${(inputValue * 0.3048).toFixed(2)} meters `;
  
 volumeNum.innerHTML = `${inputValue} liters = ${(inputValue * 0.264).toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue * 3.7878).toFixed(2)} liters `;
  
 massNum.innerHTML = `${inputValue} kilograms = ${(inputValue * 2.204).toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue * 0.4535).toFixed(2)} kilograms `;}
 
   inputArea.addEventListener("click", () => {
    inputArea.value = ""; });
});


// let inputArea = document.getElementById("mainInput");
// const convertBtn = document.getElementById("convert-btn");
// let firstP = document.getElementById("p1")
// let inputValue = document.getElementById("mainInput").value 


// convertBtn.addEventListener("click", () => {
//  lengthNum = ""
//  lengthNum.innerHTML += `${inputValue} meters = ${inputValue * 3.281} feet | 
//  ${inputValue} liter = ${inputValue * 0.264} gallon |
//  ${inputValue} kilogram = ${inputValue * 2.204} pound`
//  })