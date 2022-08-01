let userName = prompt("Enter your username");

function validateUserName(userName){
    if (userName.length > 0 && userName.length < 10){
        return true;
    }else {
        return false;
    }
}
console.log(validateUserName(userName));

let email = prompt("Enter your email");

function validateEmail(email){
    const emailcheck =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  emailCheckResult = emailcheck.test(email);
  if (emailCheckResult == true){
    return true;
  }else{
    return false;
  }
}
console.log(validateEmail(email));

let phoneNumber = prompt("Enter your phone number");

function validatePhoneNumber(phoneNumber){
    if (phoneNumber.length == 11){
        return true;
    }else{
        return false;
    }
}
console.log(validatePhoneNumber(phoneNumber));

let password = prompt("Enter your password");

function validatePassword(password){
    if (password.length < 7){
        return true;
    }else{
        return false;
    }
}
console.log(validatePassword(password));

let confirmPassword = prompt("Confirm your password");

function validateConfirmPassword(confirmPassword){
    if (confirmPassword == password){
        return true;
    }else {
        return false;
    }
}
console.log(validateConfirmPassword(confirmPassword));