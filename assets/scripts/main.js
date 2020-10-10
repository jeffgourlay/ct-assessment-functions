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
let fibonacciInput = document.querySelector("#fibonacci");
let firstAddendInput = document.querySelector("#first-addend");
let firstExponentInput = document.querySelector('#number');
let firstMultInput = document.querySelector("#first-multiplicand");
let secondAddendInput = document.querySelector("#second-addend");
let secondExponentInput = document.querySelector("#power");
let secondMultInput = document.querySelector("#second-multiplicand");
let doAdditionButton = document.querySelector("#do-addition");
let doExponentButton = document.querySelector("#do-exponent");
let doFactorialButton = document.querySelector("#do-factorial");
let doFibonacciButton = document.querySelector("#do-fibonacci");
let doMultiplicationButton = document.querySelector('#do-multiplication');

/*
Event listeners
*/
doAdditionButton.addEventListener("click", function() {
    let sum = add(Number(firstAddendInput.value), Number(secondAddendInput.value));
    document.getElementById("add-result").innerHTML = sum.toLocaleString();
});

doMultiplicationButton.addEventListener("click", function() {
    let product = multiply(Number(firstMultInput.value),Number(secondMultInput.value));
    document.getElementById("multiply-result").innerHTML = product.toLocaleString();
});

doExponentButton.addEventListener("click", function() {
    let result = power(Number(firstExponentInput.value), Number(secondExponentInput.value));
    document.getElementById("power-result").innerHTML = result.toLocaleString();

});

doFactorialButton.addEventListener("click", function() {
    if (Number(factorialInput.value) < 1) {
        alert("Please choose a number greater than 0");
    }
    else {
        let result = factorial(Number(factorialInput.value));
        document.getElementById("factorial-result").innerHTML = result.toLocaleString();
    }
});

doFibonacciButton.addEventListener("click", function() {
    if (Number(fibonacciInput.value) < 1) {
        alert("Please choose a number greater than 0");
    }
    else {
        let result = fibonacci(Number(fibonacciInput.value));
        document.getElementById("fibonacci-result").innerHTML = result.toLocaleString();
    }

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
    while (loop < Math.abs(secondNum)) {
        multResult = add(multResult, Math.abs(firstNum));
        loop++;
    }

    // Fix up the sign
    if ((firstNum > 0 && secondNum < 0) || (firstNum < 0 && secondNum > 0)) {
        multResult = -multResult;
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
        while (loop < Math.abs(power)) {
            result = multiply(result, number);
            console.log("Result is " + result)
            loop++;
        }
    }

    if (power < 0) {
        result = 1 / result;
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

function fibonacci(number) {
    let firstFibonaci = 0;
    let loop = 0;
    let secondFibonacci = 1;
    let result = 0;

    console.log(number);
    if (number === 1) {
        result = firstFibonaci;
        console.log("desired index = 1");
    }
    else if (number === 2) {
        result = secondFibonacci;
        console.log("desired index = 2");
    }
    else {
        loop = 3;
        console.log("desired index = " + number);
        while (loop <= number) {
            result = add(firstFibonaci, secondFibonacci);
            firstFibonaci = secondFibonacci;
            secondFibonacci = result;
            console.log("First number = " + firstFibonaci + " second number = " + secondFibonacci)
            loop++;
        }
    }

    return (result);
}