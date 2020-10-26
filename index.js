const showPart = document.querySelector(".result-part");
const buttonC = document.querySelector(".button_C");
const button7 = document.querySelector(".button_7");
const button8 = document.querySelector(".button_8");
const button9 = document.querySelector(".button_9");
const buttonPlus = document.querySelector(".button_plus");
const button4 = document.querySelector(".button_4");
const button5 = document.querySelector(".button_5");
const button6 = document.querySelector(".button_6");
const buttonMinus = document.querySelector(".button_minus");
const button1 = document.querySelector(".button_1");
const button2 = document.querySelector(".button_2");
const button3 = document.querySelector(".button_3");
const buttonMultiple = document.querySelector(".button_multiple");
const button0 = document.querySelector(".button_0");
const buttonEqual = document.querySelector(".button_equal");
const buttonDivide = document.querySelector(".button_divide");

let RESULT = "";
let NUMBER = "";
let INITIAL = "";
let EQUAL_SIGN = "";

function putNumber(event) {
  const number = event.target.innerText;
  if (INITIAL !== "") {
    showPart.innerText = "";
    if (showPart.innerText === "0") {
      showPart.innerText = number;
      NUMBER = number;
    } else {
      NUMBER = showPart.innerText + number;
      showPart.innerText = NUMBER;
    }
  } else {
    const number = event.target.innerText;
    if (showPart.innerText === "0") {
      showPart.innerText = number;
      NUMBER = number;
    } else {
      NUMBER = showPart.innerText + number;
      showPart.innerText = NUMBER;
    }
  }
  return NUMBER;
}

function removeAll() {
  showPart.innerText = "0";
  RESULT = "";
  NUMBER = "";
  INITIAL = "";
}

function doEqual() {
  if (EQUAL_SIGN === "+") {
    RESULT = Number(NUMBER) + Number(INITIAL);
  } else if (EQUAL_SIGN === "-") {
    RESULT = Number(INITIAL) - Number(NUMBER);
  } else if (EQUAL_SIGN === "*") {
    RESULT = Number(INITIAL) * Number(NUMBER);
  } else if (EQUAL_SIGN === "/") {
    RESULT = Number(INITIAL) / Number(NUMBER);
  }
  EQUAL_SIGN = "";
  showPart.innerText = `${RESULT}`;
  INITIAL = RESULT;
  return INITIAL;
}

function doPlus() {
  if (EQUAL_SIGN !== "") {
    RESULT = Number(NUMBER) + Number(INITIAL);
    showPart.innerText = `${RESULT}`;
    INITIAL = RESULT;
    return INITIAL;
  } else {
    EQUAL_SIGN = "+";
    INITIAL = NUMBER;
    NUMBER = "";
    return INITIAL;
  }
}

function doMinus() {
  if (EQUAL_SIGN !== "") {
    RESULT = Number(INITIAL) - Number(NUMBER);
    showPart.innerText = `${RESULT}`;
    INITIAL = RESULT;
    return INITIAL;
  } else {
    EQUAL_SIGN = "-";
    INITIAL = NUMBER;
    NUMBER = "";
    return INITIAL;
  }
}
function doMultiple() {
  if (EQUAL_SIGN !== "") {
    RESULT = Number(INITIAL) * Number(NUMBER);
    showPart.innerText = `${RESULT}`;
    INITIAL = RESULT;
    return INITIAL;
  } else {
    EQUAL_SIGN = "*";
    INITIAL = NUMBER;
    NUMBER = "";
    return INITIAL;
  }
}

function doDivide() {
  if (EQUAL_SIGN !== "") {
    RESULT = Number(INITIAL) / Number(NUMBER);
    showPart.innerText = `${RESULT}`;
    INITIAL = RESULT;
    return INITIAL;
  } else {
    EQUAL_SIGN = "/";
    INITIAL = NUMBER;
    NUMBER = "";
    return INITIAL;
  }
}

if (button7) {
  button7.addEventListener("click", putNumber);
}
if (button8) {
  button8.addEventListener("click", putNumber);
}
if (button9) {
  button9.addEventListener("click", putNumber);
}
if (button4) {
  button4.addEventListener("click", putNumber);
}
if (button5) {
  button5.addEventListener("click", putNumber);
}
if (button6) {
  button6.addEventListener("click", putNumber);
}
if (button1) {
  button1.addEventListener("click", putNumber);
}
if (button2) {
  button2.addEventListener("click", putNumber);
}
if (button3) {
  button3.addEventListener("click", putNumber);
}
if (button0) {
  button0.addEventListener("click", putNumber);
}

if (buttonC) {
  buttonC.addEventListener("click", removeAll);
}

if (buttonPlus) {
  buttonPlus.addEventListener("click", doPlus);
}
if (buttonMinus) {
  buttonMinus.addEventListener("click", doMinus);
}
if (buttonMultiple) {
  buttonMultiple.addEventListener("click", doMultiple);
}
if (buttonEqual) {
  buttonEqual.addEventListener("click", doEqual);
}
if (buttonDivide) {
  buttonDivide.addEventListener("click", doDivide);
}
