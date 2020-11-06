// Assignment Code
var generateBtn = document.querySelector("#generate");

//DECLARE a list of 'numbers'
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// DECLARE a list of 'lowercaseLetters'
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// DECLARE a list of 'uppercaseLetters'
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// DECLARE a list of 'specialCharacters'
var specialCharacters = ["#", "@", "!", "$", "%", "&", "_", "?"];


function generatePassword() {

  // PROMPT the user for a 'passwordLength'
  var passwordLength = prompt("Provide a length");
  // IF NOT ( passwordLength >= 8 || passwordLength <=128 )
  if (!(passwordLength >= 8 || passwordLength <= 128)) {
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
  var isUsingNumbers;
  var isUsingNumbers = confirm("Click OKAY to use numbers?");
  // IF 'isUsingNumbers'
  if (isUsingNumbers == true) {
    txt = "You are using numbers!";
  } else {
    txt = "No numbers for you!";
  }
  // THEN push 'numbers' into 'charactersToUse' list
  numbers.push(charactersToUse);

  // AND APPEND one random number from the 'numbers' list
  const randomNumber = Math.floor(Math.random() * numbers.length);
  console.log(numbers[randomNumber]);

  // CONFIRM if the password generator 'isUsingLowercaseLetters'
  var isUsingLowercaseLetters;
  var isUsingLowercaseLetters = confirm("Click OKAY to use lowercase letters?");
  // IF 'isUsingLowercaseLetters'
  if (isUsingLowercaseLetters == true) {
    txt = "You are using lowercase letters!";
  } else {
    txt = "No lowercase letters for you!";
  }
  // THEN push 'lowercaseLetters' into 'charactersToUse' list
  lowercaseLetters.push(charactersToUse);
  //AND APPEND one random lowercase letter from the 'lowercaseLetters' list
  const randomLowercase = Math.floor(Math.random() * lowercaseLetters.length);
  console.log(lowercaseLetters[randomLowercase]);

  // CONFIRM if the password generator 'isUsingUppercaseLetters'
  var isUsingUppercaseLetters;
  var isUsingUppercaseLetters = confirm("Click OKAY to use UPPERCASE Letters?");
  // IF 'isUsingUppercaseLetters'
  if (isUsingUppercaseLetters == true) {
    txt = "You are using UPPERCASE Letters!";
  } else {
    txt = "No UPPERCASE Letters for you!";
  }
  // THEN push 'uppercaseLetters' into 'charactersToUse' list
  uppercaseLetters.push(charactersToUse);

  const randomUppercase = Math.floor(Math.random() * uppercaseLetters.length);
  console.log(uppercaseLetters[randomUppercase]);

  // CONFIRM if the password generator 'isUsingSpecialCharacters'
  var isUsingSpecialCharacters;
  var isUsingSpecialCharacters = confirm("Click OKAY to use Special Characters?");
  // IF 'isUsingSpecialCharacters'
  if (isUsingSpecialCharacters == true) {
    txt = "You are using Special Characters!";
  } else {
    txt = "No Special Characters for you!";
  }
  // THEN push 'specialCharacters' into 'charactersToUse' list
  specialCharacters.push(charactersToUse);

  const randomSpecial = Math.floor(Math.random() * specialCharacters.length);
  console.log(specialCharacters[randomSpecial]);

  // IF NOT 'charactersToUse.length' **if the user selects no options**
  //THEN ALERT to the user that they need to provide a correct length
  //AND EXIT FUNCTION


  // FOR i = 0; CONTINUE as long as i < passwordLength; i++;
  //for (var i = 0; i < passwordLength; i++) {

  //}
  // OR

  // WHILE password.length < passwordLength
  while (password.length < passwordLength) {

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
