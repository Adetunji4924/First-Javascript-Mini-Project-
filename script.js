// object to store user details
let userDetailsDatabase = {}


function getUserDetails() {

//UserName 

let userName = prompt("Enter your username");

// The if statement is used to cancel the operation if the user is not more interested
if (userName == null) {
    return
}

function validateUserName(userName){
    if (userName.length > 0 && userName.length < 10){
        return true;
    }else {
        return false;
    }
}

// The while loop is used to keep prompting the user to input the correct details
while (validateUserName(userName) == false) {
    userName = prompt("Username must be greater than 0 and less than 10")
}

userDetailsDatabase["UserName"] = userName

// Email Address

let email = prompt("Enter your email");

if (email == null) {
    return
}

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
while (validateEmail(email) == false) {
    email = prompt("Enter a valid email")
}

userDetailsDatabase["Email"] = email

// Phone Number

let phoneNumber = prompt("Enter your phone number");

if (phoneNumber == null) {
    return
}

function validatePhoneNumber(phoneNumber){
    if (phoneNumber.length == 11){
        return true;
    }else{
        return false;
    }
}
while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Enter a valid Phone Number")
}

userDetailsDatabase["PhoneNumber"] = phoneNumber

// Password

let password = prompt("Enter your password");

if (password == null) {
    return
}

function validatePassword(password){
    if (password.length < 7){
        return true;
    }else{
        return false;
    }
}
while (validatePassword(password) == false) {
    password = prompt("Password must be less than 7")
}

userDetailsDatabase["Password"] = password

// Confirm password

let confirmPassword = prompt("Confirm your password");

if (confirmPassword == null) {
    return
}

function validateConfirmPassword(confirmPassword){
    if (confirmPassword == password){
        return true;
    }else {
        return false;
    }
}
while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Confirm password is not the same as password")
}

console.log(userDetailsDatabase)

}

function displayUserDetails() {
    alert(`Your Details\n\n UserName: ${userDetailsDatabase.UserName}\n Email: ${userDetailsDatabase.Email}\n PhoneNumber: ${userDetailsDatabase.PhoneNumber}`)
}