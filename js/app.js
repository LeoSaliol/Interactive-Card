


//! Cardholder name
const nameCard = document.querySelector('.card__details-name');
const nameInput = document.getElementById('cardholder');
const nameErrorDiv = document.querySelector('.form__cardholder--error');

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


    
    numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();   
    // showError(numberInput, numberErrorDiv,'', false);
     

    onlyNumbers(numberInput,numberErrorDiv);

});



//! Month

const monthCard = document.querySelector('.card__month');
const monthInput = document.getElementById('cardMonth');
const monthErrorDiv = document.querySelector('.form__input-mm--error');

monthInput.addEventListener('input', () => {
    monthCard.innerText = monthInput.value;
    onlyNumbers(monthInput,monthErrorDiv);
})





//! Year

const yearCard = document.querySelector('.card__year');
const yearInput = document.getElementById('cardYear');
const yearErrorDiv = document.querySelector('.form__input-yy--error');

yearInput.addEventListener('input', () => {
    yearCard.innerText = yearInput.value;
    onlyNumbers(yearInput,yearErrorDiv);
});




//! Cvc

const cvcCard = document.querySelector('.card-back__cvc');
const cvcInput = document.getElementById('cardCvc');
const cvcErrorDiv = document.querySelector('.form__input-cvc--error');
cvcInput.addEventListener('input', () =>{
    cvcCard.innerText = cvcInput.value;
    onlyNumbers(cvcInput,cvcErrorDiv);
});





//! Submit 

const btnConfirm = document.querySelector('.form__submit');

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();


    //* Verify that is not blank    
    if (isFilled(nameInput, nameErrorDiv)){
        nameValidation = true;
    } 
    
    
    if(isFilled(numberInput, numberErrorDiv)){
       if(numberInput.value.length == 19){
        showError(numberInput,numberErrorDiv,'', false);
        numberValidation = true;
       }else{
        showError(numberInput,numberErrorDiv,'Incomplete card number');
        
       }
    };


    if (isFilled(monthInput, monthErrorDiv)) {
        if (parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <=12 ) {
            showError(monthInput, monthErrorDiv, '', false);
            monthValidation = true;
        } else{
            showError(monthInput, monthErrorDiv,'Wrong month');
            
        }
    }

    if (isFilled(yearInput, yearErrorDiv)) {
        if (parseInt(yearInput.value) >= 22 && parseInt(yearInput.value) <=30 ) {
            showError(yearInput, yearErrorDiv, '', false);
            yearValidation = true;
        } else{
            showError(yearInput, yearErrorDiv,'Wrong month');
            
        }
    }


    if (isFilled(cvcInput, cvcErrorDiv)){
       if(cvcInput.value.length == 3){
        showError(cvcInput, cvcErrorDiv,'', false);
        cvcValidation = true;
       }else{
        showError(cvcInput, cvcErrorDiv, 'Wrong cvc');
        
       }
    }

    if(nameValidation  && numberValidation  && monthValidation  && yearValidation && cvcValidation ){
        formSection.style.display = 'none';
        thankSection.style.display = 'block';
    }
   
})


//! Form 

const formSection = document.querySelector('.form');
const thankSection = document.querySelector('.thanks-section');




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

function isFilled(divInput, divError){
    if (divInput.value.length>0) {
        showError(divInput, divError,'', false);
        return true;
    } else{
        showError(divInput, divError,"Can't be blank");
        return false;
    }
}

function onlyNumbers(divInput, divError){
    let regExp = /[A-z]/g;
    if(regExp.test(divInput.value)){
        showError(divInput, divError,'Wrong format, numbers only');
        
    } else {
        showError(divInput,divError,'',false);
        
    }

}
