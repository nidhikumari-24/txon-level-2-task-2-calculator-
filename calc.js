let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button is:', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            display.value = screenValue;
        }
        else if (buttonText == '=') {
            display.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            display.value = screenValue;
        }

    })
}