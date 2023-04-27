function alertMsg() {
    alert("Basem Bahattab");
}

function sum() {
    let num1 = (document.querySelector(".number1").value);
    let num2 = (document.querySelector(".number2").value);

    if (num1.length == 0 || num2.length == 0) {
        alert("You have to type in both field");
    } else {
        let sum = parseInt(num1) + parseInt(num2);

        let display = num1 + " + " + num2;

        document.getElementById("display-1").innerHTML = display;

        document.getElementById("result-1").innerHTML = sum;
    }
}

function minus() {
    let num1 = (document.querySelector(".number1").value);
    let num2 = (document.querySelector(".number2").value);

    if (num1.length == 0 || num2.length == 0) {
        alert("You have to type in both field");
    } else {
        let minus = parseInt(num1) - parseInt(num2);

        let display = num1 + " - " + num2;

        document.getElementById("display-1").innerHTML = display;

        document.getElementById("result-1").innerHTML = minus;
    }
}

function multiply() {
    let num1 = (document.querySelector(".number1").value);
    let num2 = (document.querySelector(".number2").value);

    if (num1.length == 0 || num2.length == 0) {
        alert("You have to type in both field");
    } else {
        let multiply = parseInt(num1) * parseInt(num2);

        let display = num1 + " * " + num2;

        document.getElementById("display-1").innerHTML = display;

        document.getElementById("result-1").innerHTML = multiply;
    }
}

function division() {
    let num1 = (document.querySelector(".number1").value);
    let num2 = (document.querySelector(".number2").value);

    if (num1.length == 0 || num2.length == 0) {
        alert("You have to type in both field");
    } else {
        if (0 == parseInt(num1)) {
            alert("The first number shouldn't be 0");

            let display = "ERROR";

            document.getElementById("display-1").innerHTML = display;

            document.getElementById("result-1").innerHTML = display-1;

        } else {
            let division = parseInt(num1) / parseInt(num2);

            let display = num1 + " / " + num2;

            document.getElementById("display-1").innerHTML = display;

            document.getElementById("result-1").innerHTML = division;
        }
    }
}

function factorial(){
    let num1 = (document.querySelector(".factorial1").value);
    
    if (num1.length == 0) {
        alert("You have to type in both field");
    } else {
        let result = calculateFactorial(num1);

        let display = "factorial(" + num1 + ")";
        document.getElementById("display-2-1").innerHTML = display;

        let display2 = display + " = " + writeFactorial(num1);
        document.getElementById("display-2-2").innerHTML = display2;
        
        document.getElementById("result-2").innerHTML = result;
    }
}

function calculateFactorial(n){
    if(n > 0 && n <= 1){
        return 1;
    }
    else {
        return n * calculateFactorial(n-1);
    }
}

function writeFactorial(n){
    let s = "";
    for(let i = n; i > 0; i--){
        s +=  i;
        if(i - 1 > 0){
            s += " * ";
        }
    }
    return s;
}