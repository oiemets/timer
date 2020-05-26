const input = document.querySelector('#input');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const showNum = document.querySelector('#showNum');
let intervalId;
let toggler = 0;
let tempValue;
let currentValue;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        start();
        input.blur();
    }});

document.addEventListener('keyup', (e) => keyEvent(e, 32));      

function counter() {
    if(input.value){
        currentValue = input.value;
        input.value = '';
    }
    tempValue = currentValue;
    showNum.innerText = currentValue;
    currentValue--;
};

function start() {
    if(!input.value && isNaN(tempValue) || isNaN(input.value) ||
    typeof tempValue === 'number' && toggler === 1){
       return
    }
    clearInterval(intervalId);
    intervalId = setInterval(counter, 1000);
    counter();
    checker(0);
    toggler = 1;
};

function stop() {
    if(!input.value && isNaN(tempValue)){
        return
     }
    clearInterval(intervalId);
    checker(1);
    toggler = 0;
};

function disabledStyleToggler() {
    startBtn.classList.toggle('w3-disabled');
    stopBtn.classList.toggle('w3-disabled');
    input.classList.toggle('w3-disabled');
};

function checker(num) {
    if(toggler === num){
        disabledStyleToggler(); 
    }
};

function keyEvent(e, code) {
    if(e.keyCode === code){
        if(toggler === 0){
            start();
            input.blur();
        } else {
            stop();
        }
    }
};