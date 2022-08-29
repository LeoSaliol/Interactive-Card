
//? Cardholder name
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



//? Card number
const numberCard = document.querySelector('.card_number');
const numberInput = document.getElementById('cardNumber');
const numberErrorDiv = document.querySelector('.form__inputnumber--error');

numberInput.addEventListener('input', () => {
    
    let regExp = /[A-z]/g;
    if (regExp.test(numberInput.value)) {
        console.log("Hay una letra");
    }
});