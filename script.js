// Assignment Code
var generateBtn = document.querySelector("#generate");

//DECLARE a list of 'numbers'


// DECLARE a list of 'lowercaseLetters'

// DECLARE a list of 'uppercaseLetters'

// DECLARE a list of 'specialCharacters'


function generatePassword() {
  
  // PROMPT the user for a 'passwordLength'
  var passwordLength = prompt("Provide a length");
  // IF NOT ( passwordLength >= 8 || passwordLength <=128 )
  if( !( passwordLength >= 8 || passwordLength <=128 )) {
    // THEN alert to the user to provide a correct password length
    alert("WRONG!")
    // AND Exit Function
    return;
  }

  //DECLARE a new list of 'charactersToUse'
  var charactersToUse = [];
  
  // DECLARE a new 'password' string
  var password = "";
  
  // CONFIRM if the password generator  'isUsingNumbers'

  // IF 'isUsingNumbers'
  // THEN push 'numbers' into 'charactersToUse' list
  // AND APPEND one random number from the 'numbers' list

  // CONFIRM if the password generator 'isUsingLowercaseLetters'

  // IF 'isUsingLowercaseLetters'
  // THEN push 'lowercaseLetters' into 'charactersToUse' list
  

  // CONFIRM if the password generator 'isUsingUppercaseLetters'

  // IF 'isUsingUppercaseLetters'
  // THEN push 'uppercaseLetters' into 'charactersToUse' list

  // CONFIRM if the password generator 'isUsingSpecialCharacters'

  // IF 'isUsingSpecialCharacters'
  // THEN push 'specialCharacters' into 'charactersToUse' list

  // IF NOT 'charactersToUse.length' **if the user selects no options**
  //THEN ALERT to the user that they need to provide a correct length
  //AND EXIT FUNCTION


  // FOR i = 0; CONTINUE as long as i < passwordLength; i++;
  for ( var i = 0; i < passwordLength; i++) {

  }
  // OR

  // WHILE password.length < passwordLength
  while( password.length < passwordLength ) {

    // SELECT 'randomCharacter' from 'charactersToUse'
    // APPEND 'randonCharacter' to 'password' string

  }

  //RETURN 'password'
  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
