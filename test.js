// Define all characters to use in the generated password
var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%&'()*+,-./:;<=>?@^_`{|}~";

// Define number of characters in the generated password
var pwdLength = 10;

// Define the value of the generated password using a map function to loop through the available password characters, selecting a random position in the array to add to the password.
var generatedPassword = Array(pwdLength).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');

// Print the generatedPassword in the console.log
console.log(generatedPassword);
