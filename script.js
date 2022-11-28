import { Cake } from "./Cake.js";

const welcomePage = document.getElementById("welcome-page");
const startButton = document.getElementById("start-btn");
const inputContainer = document.getElementById("input-container");
const outputContainer = document.getElementById("output-container");
const advanceSlider = document.getElementById("advance-slider")
const advanceValue = document.getElementById("advance-value")
const enterButton = document.getElementById("enter");
const onesAgainButton = document.getElementById("ones-again-btn");

advanceValue.innerHTML = advanceSlider.value;
advanceSlider.oninput = function() {
    advanceValue.innerHTML = this.value;
}

startButton.addEventListener('click', () =>{
    welcomePage.remove();
    inputContainer.classList.add('visible');
})

enterButton.addEventListener('click', () => {
    inputContainer.classList.remove('visible');
    outputContainer.classList.add('visible');
})

onesAgainButton.addEventListener('click', () => {
    outputContainer.classList.remove('visible');
    inputContainer.classList.add('visible');
})

// SHOW RESULTS
// input handlers
let circle = document.getElementById("circle").value;
let square = document.getElementById("square").value;
let rectangle = document.getElementById("rectangle").value;
let portionsCount = document.getElementById("portions-count").value;
let pricePerPerson = document.getElementById("price-per-portion").value;
let allergiesCheckbox = document.getElementById("allergies-checkbox").value;
let boxCheckbox = document.getElementById("box-checkbox").value;
let otherCheckbox = document.getElementById("other-checkbox").value;
let advance = document.getElementById("advance-slider").value;

// output handlers
let priceOutput = document.getElementById("price-output");
let advanceOutput = document.getElementById("advance-output");
let firstLayer = document.getElementById("first-output");
let secondLayer = document.getElementById("second-output");
let thirdLayer = document.getElementById("third-output");

function showResults(){
    // Cake(portionsCount, pricePerPerson, box, allergies, otherCheckbox, otherPrice) 
    let yourCake = new Cake(portionsCount, pricePerPerson, boxCheckbox, allergiesCheckbox, otherCheckbox, otherPrice, advancePercentage)
    priceOutput.innerText += yourCake.priceCalc[0];
}