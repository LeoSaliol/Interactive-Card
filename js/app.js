
//! Cardholder name
const nameCard = document.querySelector('.card__details-name');
const nameInput = document.getElementById('cardholder');
const nameError = document.querySelector('.form__cardholder--error');

nameInput.addEventListener('input', () => {

    if(nameInput.value == ''){
        nameCard.innerText = 'JANE APPLESEED';
    } else{
        nameCard.innerText = nameInput.value;
    }

});



//! Card number
const numberCard = document.querySelector('.card__number');
const numberInput = document.getElementById('cardNumber');
const numberErrorDiv = document.querySelector('.form__inputnumber--error');

numberInput.addEventListener('input', (e) => {

    let inputValue = e.target.value;
    
    if (numberInput.value == '') {
        numberCard.innerText = '0000 0000 0000 0000';
    } else {
        numberCard.innerText = numberInput.value;
    }


    let regExp = /[A-z]/g;
    if (regExp.test(numberInput.value)) {
        showError(numberInput, numberErrorDiv, 'Wrong format, numbers only');
        
    } else{
        numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();   
        showError(numberInput, numberErrorDiv,'', false);
    }

});



//! Month

const monthCard = document.querySelector('.card__month');
const monthInput = document.getElementById('cardMonth');
const monthErrorDiv = document.querySelector('.form__input-mm--error');

monthInput.addEventListener('input', () => {
    if (monthInput.value >= 0 && monthInput.value <= 12) {    
        monthCard.innerText = monthInput.value;
    }else{
        showError(monthInput,monthErrorDiv,'Month incorrect');
    } 
})



//! Submit 

const btnConfirm = document.querySelector('.form__submit');

btnConfirm.addEventListener('click', () => {

})




//? Functions
function showError(divInput, divError, message, show = true){
    if(show){
        divError.innerText = message;
        divInput.style.borderColor = '#FF0000';
    } else{
        divError.innerText = message;
        divInput.style.borderColor = 'hsl(279, 6%, 55%)';
    }
};
