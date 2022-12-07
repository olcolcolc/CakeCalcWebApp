import { Cake } from "./Cake.js";

// html elements handlers
const welcomePage = document.getElementById("welcome-page");
const startButton = document.getElementById("start-btn");
const inputContainer = document.getElementById("input-container");
const outputContainer = document.getElementById("output-container");
const advanceSlider = document.getElementById("advance-slider")
const advanceValue = document.getElementById("advance-value")
const enterButton = document.getElementById("enter");
const onesAgainButton = document.getElementById("ones-again-btn");

// percentage under advance slider
advanceValue.innerHTML = advanceSlider.value;
advanceSlider.oninput = function() {
    advanceValue.innerHTML = this.value;
}

// start button on welcome page
startButton.addEventListener('click', () =>{
    welcomePage.remove();
    inputContainer.classList.add('visible');
})

// enter button
enterButton.addEventListener('click', () => {
    inputContainer.classList.remove('visible');
    outputContainer.classList.add('visible');
    showResults();
})

// ones again button
onesAgainButton.addEventListener('click', () => {
    outputContainer.classList.remove('visible');
    inputContainer.classList.add('visible');
})



// SHOW RESULTS
function showResults(){
// input handlers
let circle = document.getElementById("circle").checked;
let square = document.getElementById("square").checked;
let rectangle = document.getElementById("rectangle").checked;
let portionsCount = document.getElementById("portions-count").value;
let pricePerPerson = document.getElementById("price-per-portion").value;
let allergiesCheckbox = document.getElementById("allergies-checkbox").checked;
let boxCheckbox = document.getElementById("box-checkbox").checked;
let otherCheckbox = document.getElementById("other-checkbox").checked;
let otherPrice = document.getElementById("other-price").value;
let advancePercentage = document.getElementById("advance-slider").value;

// output handlers
let priceOutput = document.getElementById("price-output");
let advanceOutput = document.getElementById("advance-output");
let firstLayer = document.getElementById("first-layer");
let secondLayer = document.getElementById("second-layer");
let thirdLayer = document.getElementById("third-layer");
let box = document.querySelector(".box");
let boxPrice = document.getElementById("box-price");


// creating Cake(portionsCount, pricePerPerson, box, allergies, otherCheckbox, otherPrice) object
let yourCake = new Cake(portionsCount, pricePerPerson, boxCheckbox, allergiesCheckbox, otherCheckbox, otherPrice, advancePercentage)

// calculate price
let price = yourCake.priceCalc()[0];
priceOutput.innerHTML = price;

// calculate advance value
advanceOutput.innerHTML = yourCake.advanceValueCalc(price);

// calculate cake size
if (circle){
    [firstLayer.innerHTML, secondLayer.innerHTML, thirdLayer.innerHTML] = yourCake.roundCalc();
} else if (square){
    [firstLayer.innerHTML, secondLayer.innerHTML, thirdLayer.innerHTML] = yourCake.squareCalc();
} else {
    [firstLayer.innerHTML, secondLayer.innerHTML, thirdLayer.innerHTML] = yourCake.rectCalc();

    
}

// show box price
if (boxCheckbox){
    box.classList.add('visible');
    boxPrice.innerHTML = yourCake.priceCalc()[1];
}

}