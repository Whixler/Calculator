const display = document.getElementById("display");
let num1 = "";
let operator = "";
let memory = ""

const opbtn = document.querySelectorAll('.opbtn');
const all_buttons = document.querySelectorAll('.button');

if(operator === ""){
    all_buttons.forEach(bt => {
        bt.addEventListener("click", (e) =>{
            display.textContent += e.target.innerHTML; 
            num1 += e.target.innerHTML;
            console.log({num1});
        })
    });
}


opbtn.forEach(bt => {
    bt.addEventListener("click", (e) =>{
        operator = e.target.innerHTML;
        console.log({operator});
        display.textContent = "";
        operation();
    })
});

document.querySelector('#btnAC')?.addEventListener("click", () =>{
    display.textContent = "";
    num1 = "";
    memory = "";
});

function operate(num1,memory){
    if(operator === "/"){
        if(num1 == 0){
        display.textContent = "ERROR"
        }
    display.textContent = memory / num1;
    } else if(operator === "*"){
    display.textContent = memory * num1;
    } else if(operator === "-"){
    display.textContent = memory - num1;
    } else if(operator === "+"){
    display.textContent = memory + num1;
    }
}

document.querySelector('#btnEqual')?.addEventListener("click", () =>{
    console.log({num1})
    console.log({operator})
    console.log({memory})
    operate(num1,memory);
});


function operation() {
    memory = num1;
    num1 = "";
}
