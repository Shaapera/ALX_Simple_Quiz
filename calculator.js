function add(number1, number2) {
    return number1+number2
}
function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}

document.getElementById("add").addEventListener("click", add());
document.getElementById("subtract").addEventListener("click", subtract());
document.getElementById("multiply").addEventListener("click", multiply());
document.getElementById("divide").addEventListener("click", multiply())