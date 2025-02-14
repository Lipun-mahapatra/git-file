let display = document.querySelector('.input input'); // Corrected selector
let buttons = document.querySelectorAll('button');

let buttonArry = Array.from(buttons);
let string = '';

buttonArry.forEach(btn => {
    btn.addEventListener('click', (e) => {
         if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
         
        }else if(e.target.innerHTML === 'AC') {
         string='';
         display.value = string; 
        }else if(e.target.innerHTML === '='){
            string=eval(string);
        }
        
        else {
            string += e.target.innerHTML;
        }
        display.value = string;
    });
});
