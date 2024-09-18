const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const number = document.getElementById("num");
let count = 0;

decrease.onclick = function(){
    count--;
    number.textContent = count;
}

increase.onclick = function(){
    count++;
    number.textContent = count;
}

reset.onclick = function(){
    count = 0;
    number.textContent = count;
}