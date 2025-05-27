function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operation(num1, num2, operator) {
    return num1 + operator + num2;
}

const display = document.getElementById("display");
let num1 = "";
let num2 = "";

const all_buttons = document.querySelectorAll('.button');

all_buttons.forEach(bt => {
    bt.addEventListener("click", (e) =>{
        display.textContent += e.target.innerHTML; 
        num1 += e.target.innerHTML;
        console.log(num1);
    })
});

document.querySelector('#btnAC')?.addEventListener("click", () =>{
    display.textContent = "";
    num1 = "";
    num2 = "";
});
