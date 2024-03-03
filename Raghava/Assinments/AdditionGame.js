let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let correctAnswer = "Congratulations! You got it right.";
let wrongAnswer = "Please Try Again!";
let paragraphEl = document.getElementById("gameResult");
let userInputEl = document.getElementById("userInput");

function restartButton() {
    let firstNumberValue = Math.random() * 100;
    let secondNumberValue = Math.random() * 100;
    firstNumber.textContent = Math.ceil(firstNumberValue);
    secondNumber.textContent = Math.ceil(secondNumberValue);
    userInputEl.value = "";
    paragraphEl.textContent = "";

}
restartButton()

function checkButton() {
    let userEntry = parseInt(userInputEl.value);
    let value1 = firstNumber.textContent;
    let value2 = secondNumber.textContent;
    let sumOfNums = parseInt(value1) + parseInt(value2);
    if (userEntry === sumOfNums) {
        paragraphEl.textContent = correctAnswer;
        paragraphEl.style.backgroundColor = "#028a0f";
    } else {
        paragraphEl.textContent = wrongAnswer;
        paragraphEl.style.backgroundColor = "#1e217c";
    }

}
