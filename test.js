var pwdChars = “0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%&‘()*+,-./:;<=>?@^_`{|}~“;
var pwdLen = 10;
var randPassword = Array(pwdLen).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join(‘’);