/*
Kenzie Javascript functions assessment
Student: Jeff Gourlay
*/

/*
Variables
*/
let firstAddend = 0;
let firstMulplicand = 0;
let secondAddend = 0;
let secondMultiplicand = 0;
let factorialInput = document.querySelector("#factorial");
console.log(factorialInput)
let firstAddendInput = document.querySelector("#first-addend");
let firstExponentInput = document.querySelector('#number');
let firstMultInput = document.querySelector("#first-multiplicand");
let secondAddendInput = document.querySelector("#second-addend");
let secondExponentInput = document.querySelector("#power");
let secondMultInput = document.querySelector("#second-multiplicand");
let doAdditionButton = document.querySelector("#do-addition");
let doExponentButton = document.querySelector("#do-exponent");
let doFactorialButton = document.querySelector("#do-factorial");
let doMultiplicationButton = document.querySelector('#do-multiplication');

/*
Event listeners
*/
doAdditionButton.addEventListener("click", function() {
    let sum = add(Number(firstAddendInput.value), Number(secondAddendInput.value));
    document.getElementById("add-result").innerHTML = sum;
})

doMultiplicationButton.addEventListener("click", function() {
    let product = multiply(Number(firstMultInput.value),Number(secondMultInput.value));
    document.getElementById("multiply-result").innerHTML = product;
})

doExponentButton.addEventListener("click", function() {
    let result = power(Number(firstExponentInput.value), Number(secondExponentInput.value));
    document.getElementById("power-result").innerHTML = result;

})

doFactorialButton.addEventListener("click", function() {
    let result = factorial(Number(factorialInput.value));
    document.getElementById("factorial-result").innerHTML = result;
})

/*
Functions
*/
function add(firstNum, secondNum) {
    return (firstNum + secondNum);
}

function multiply(firstNum, secondNum) {
    let loop = 0;
    let multResult = 0;
    console.log ("multiplying " + firstNum + " X " + secondNum)
    while (loop < secondNum) {
        multResult += firstNum;
        loop++;
    }

    console.log("result: " + multResult)
    return(multResult);
}

function power(number, power) {
    let loop = 0;
    let result = 1;
    if (power === 0) {
        result = 1;
    }
    else {
        while (loop < power) {
            result = multiply(result, number);
            console.log("Result is " + result)
            loop++;
        }
    }

    return (result);
}

function factorial(number) {
    let loop = number;
    let result = 1;

    while (loop > 0) {
        result = multiply(result, loop);
        loop--;
    }

    return (result);
}