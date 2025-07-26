const display = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch {
                display.value = "Error";
                string = "";
            }
        } 
        else if (e.target.innerHTML == 'AC') {
            string = "";
            display.value = string;
        }
        else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});