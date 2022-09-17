const btnAdd = document.querySelector(`.btn-add`);
const btnSub = document.querySelector(`.btn-sub`);
const btnProd = document.querySelector(`.btn-prod`);
const btnDiv = document.querySelector(`.btn-div`);
const btnRst = document.querySelector(`.btn-rst`);
const inputOne = document.querySelector(`.input-one`);
const inputTwo = document.querySelector(`.input-two`);
const output = document.querySelector(`.output`);

function addition() {
  const sum = Number(inputOne.value) + Number(inputTwo.value);
  output.innerText = sum;
}

function subtraction() {
  const difference = Number(inputOne.value) - Number(inputTwo.value);
  output.innerText = difference;
}

function multiplication() {
  const prod = Number(inputOne.value) * Number(inputTwo.value);
  output.innerText = prod;
}

function division() {
  const div = Number(inputOne.value) / Number(inputTwo.value);
  output.innerText = div;
}

function reset() {
  output.innerText = ``;
  inputOne.value = ``;
  inputTwo.value = ``;
}

btnAdd.addEventListener("click", addition);
btnSub.addEventListener("click", subtraction);
btnProd.addEventListener("click", multiplication);
btnDiv.addEventListener("click", division);
btnRst.addEventListener("click", reset);
