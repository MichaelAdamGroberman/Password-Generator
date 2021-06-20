// Define Variables 
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var containsUppercaseChar;
var containsLowercaseChar;
var containsSpecialChar;
var containsNumberChar;

// define function to determine password length 
function confirmLength (){
    passwordLength = prompt("Determine password length (between 8-128 characters): ");
    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    } else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    
    } else {
    return passwordLength;
 }
} 