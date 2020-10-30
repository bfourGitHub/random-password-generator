// Assignment Code
var generateBtn = document.querySelector("#generate");

//DECLARE a list of 'numbers'


// DECLARE a list of 'lowercaseLetters'

// DECLARE a list of 'uppercaseLetters'

// DECLARE a list of 'specialCharacters'


function generatePassword() {
  
  // PROMPT the user for a 'passwordLength'

  // CONFIRM if the password generator  'isUsingNumbers'

  // CONFIRM if the password generator 'isUsingLowercaseLetters'

  // CONFIRM if the password generator 'isUsingUppercaseLetters'

  // CONFIRM if the password generator 'isUsingSpecialCharacters'


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
