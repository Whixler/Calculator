const display = document.getElementById("display");
let number = "";
let operator = "";
let memory = "";
let result;

const opbtn = document.querySelectorAll('.opbtn');
const all_buttons = document.querySelectorAll('.button');

// numbers
all_buttons.forEach(bt => {
    bt.addEventListener("click", (e) =>{
        display.textContent += e.target.innerHTML; 
        number += e.target.innerHTML;
    })
});

// operation
opbtn.forEach(bt => {
    bt.addEventListener("click", (e) =>{
        if(memory === ""){
            operator = e.target.innerHTML;
            display.textContent = "";
            memory = number;
            number = "";
        } else{
            calculate(number, memory);
            operator = e.target.innerHTML;
            display.textContent = "";
            memory = result;
            number = "";
        }
    })
});


function calculate(number,memory){
    if(operator === "/"){
        if(number == 0){
            result = "ERROR"
        }
        result = parseFloat(memory) / parseFloat(number);
    } else if(operator === "*"){
        result = parseFloat(memory) * parseFloat(number);
    } else if(operator === "-"){
        result = parseFloat(memory) - parseFloat(number);
    } else if(operator === "+"){
        result = parseFloat(memory) + parseFloat(number);
    }
    display.textContent = result;
    console.log({result})
}

// equal
document.querySelector('#btnEqual')?.addEventListener("click", () =>{
    calculate(number,memory);
    display.textContent = result;
});

// clear
document.querySelector('#btnAC')?.addEventListener("click", () =>{
    display.textContent = "";
    number = "";
    memory = "";
});
