const numberOne = document.querySelector("#number-one");
const numberTwo = document.querySelector("#number-two");
const button = document.querySelector(".button");
const resultBox = document.querySelector(".result");

function getNumberOne() {
  return numberOne.value;
}
function getNumberTwo() {
  return numberTwo.value;
}
function clearInputFields() {
  numberOne.value = "";
  numberTwo.value = "";
}
function onClick() {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let firstNumber = getNumberOne();
    let secondNumber = getNumberTwo();
    let result = firstNumber + secondNumber;
    resultBox.innerHTML = result;
    clearInputFields();
  });
}
onClick();
