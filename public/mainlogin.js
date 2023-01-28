const individualOption = document.querySelector('#individual');
const businessOption = document.querySelector('#company');

individualOption.addEventListener('click', displayMessage);
businessOption.addEventListener('click', displayMessage);

function displayMessage(){
    const message = document.querySelector('.message__selection');

    if(individualOption.checked){
        message.innerHTML = `Hi, User. Please fill out the form with your PERSONAL information`
    } else if(businessOption.checked){
        message.innerHTML = `Hi, User. Please fill out the form with your COMPANY credentials`
    }
}

// EMAIL VALIDATION
const form = document.querySelector('.contact__form');
const email = document.querySelector('#email__field');
const password = document.querySelector('#password__field');
const submitBtn = document.querySelector('.submitBtn');
const emailAlert = document.querySelector('.email__alert');
const passwordAlert = document.querySelector('.password__alert');

form.addEventListener('submit', validateForm);

function validateForm(e){
    if(email.value === ''){
        showAlert();
        setTimeout(removeAlert,3000)
        validateEmail(email)
    }else{
        validateEmail(email)
    }

    if(password.value === ''){
        showPasswordAlert();
    } else{
        validatePassword(password)
    }

    e.preventDefault();
}

function validatePassword(inputPassword){
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(passw.test(inputPassword.value)) { 
        return '';
    }else{ 
        showPasswordAlert();
        setTimeout(removePasswordAlert,3000)
    }
}


function validateEmail(address) {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(check.test(address.value)){
        return '';
    } else{
        showAlert();
        setTimeout(removeAlert, 3000)
    }
}

// email alerts
function showAlert(){
    emailAlert.style.display = 'block'
}

function removeAlert(){
    emailAlert.style.display = 'none'
}

// password alerts
function showPasswordAlert(){
    passwordAlert.style.display = 'block'
}
function removePasswordAlert(){
    passwordAlert.style.display = 'none'
}

