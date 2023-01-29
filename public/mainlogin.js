const individualOption = document.querySelector('#individual');
const businessOption = document.querySelector('#company');

individualOption.addEventListener('click', displayMessage);
businessOption.addEventListener('click', displayMessage);


//MYSQL
// var mysql = require('mysql');



// PHONE NUMBER VALIDATION
function handlePhone(){
    if(!document.querySelectorAll('input')[1].checked && !document.querySelectorAll('input')[0].checked){
        document.querySelector('span.message__selection').textContent=("Select Your Identity")
    }
    else if(!document.querySelectorAll('input')[1].checked){
        document.querySelector('span.message__selection').textContent=("You are a Individual")
    }
    else{
        document.querySelector('span.message__selection').textContent=("You are a Farmer")
    }
    let otp=Math.floor(100000+Math.random()*1000000);
    console.log(document.querySelector('#email__field').value);
    console.log(otp);
}

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

// form.addEventListener('submit', validateForm);

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

