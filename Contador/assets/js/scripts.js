//hide message//

let button = document.querySelector ('#button');
let msg = document.querySelector ('#message');

button.addEventListener ('click', () => {
msg.classList.toggle ('reveal'); 

})

//contador//

var currentNumberwrapper = document.getElementById ('currentNumber'); 
var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1; 
    currentNumberwrapper.innerHTML = currentNumber
}

function decrement () {
     currentNumber = currentNumber - 1; 
     currentNumberwrapper.innerHTML = currentNumber
     
}

function reset () {
    currentNumber = 0 
    currentNumberwrapper.innerHTML = currentNumber
    
}
 