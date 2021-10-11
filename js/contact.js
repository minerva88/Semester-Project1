const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");

const firstNameError = document.querySelector("#firstname-error");

const lastName = document.querySelector("#lastName");

const lastNameError = document.querySelector("#lastname-error");

const subject = document.querySelector("#subject")

const subjectError = document.querySelector("#subject-error");

const email = document.querySelector("#email");

const emailError = document.querySelector("#email-error");

const address = document.querySelector("#address");

const addressError = document.querySelector("#address-error")


function validateForm() {
    event.preventDefault();
    
    if(checkLength(firstName.value, 1) === true) {
        firstNameError.style.display = "none";
    } 
    else {
        firstNameError.style.display = "block";
    }
    
    if(checkLength(lastName.value, 1) === true) {
        lastNameError.style.display = "none";
    } 
    else {
        lastNameError.style.display = "block";
    }
    
    if(checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } 
    else {
        emailError.style.display = "block";
    }
    
    if(checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    }
    else {
        addressError.style.display = "block";
    }
    
}


form.addEventListener("submit", validateForm)

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}