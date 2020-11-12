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
  var passwordLength = parseInt(prompt("Provide a length between 8 and 128 characters."))
  // IF NOT ( passwordLength >= 8 || passwordLength <=128 ) IF the chosen password length isnt between 8 and 128
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    // THEN alert to the user to provide a correct password length
    alert("Please select a password LENGTH between 8 and 128 characters!")

    // AND Exit Function
    return;
  }

  //DECLARE a new list of 'charactersToUse' 
  var charactersToUse = [];

  // DECLARE a new 'password' string *Quotes must be empty ortherwise the generator will include a space as a character
  var password = "";

  // CONFIRM if the password generator  'isUsingNumbers'
  var isUsingNumbers = confirm("Click OKAY to use numbers.")

  // IF 'isUsingNumbers'
  if (isUsingNumbers == true) {
    //IF true add numbers to charactersToUse *CONCAT adds is used to add 'numbers' to charactersToUse array
    charactersToUse = charactersToUse.concat(numbers);
  }

  // CONFIRM if the password generator 'isUsingLowercaseLetters'
  var isUsingLowercaseLetters = confirm("Click OKAY to use lowercase letters.");

  // IF 'isUsingLowercaseLetters'
  if (isUsingLowercaseLetters == true) {
    charactersToUse = charactersToUse.concat(lowercaseLetters);
  }
  

  // CONFIRM if the password generator 'isUsingUppercaseLetters'
  var isUsingUppercaseLetters = confirm("Click OKAY to use UPPERCASE Letters.");

  // IF 'isUsingUppercaseLetters'
  if (isUsingUppercaseLetters == true) {
    charactersToUse = charactersToUse.concat(uppercaseLetters);
  }
  

  // CONFIRM if the password generator 'isUsingSpecialCharacters'
  var isUsingSpecialCharacters = confirm("Click OKAY to use Special Characters.");

  // IF 'isUsingSpecialCharacters'
  if (isUsingSpecialCharacters == true) {
    charactersToUse = charactersToUse.concat(specialCharacters);
  }
  

  // IF NO characters are chosen to use **if the user selects no options**
  if (!isUsingNumbers && !isUsingLowercaseLetters && !isUsingUppercaseLetters && !isUsingSpecialCharacters) {
    //THEN ALERT to the user that they must select at least ONE option
    alert("Sorry, you must select at least ONE option to create your password.");
    //AND EXIT FUNCTION
    return;
  }


  //The following two functions (FOR and WHILE) will accomplish the same result, and will continue th loop until the CHOSEN password length is reached 
  // FOR i = 0; CONTINUE as long as i < passwordLength; i++;
  //for (var i = 0; i < passwordLength; i++) {

  //}
  // OR

  // WHILE password.length < passwordLength
  while (password.length < passwordLength) {

    // SELECT 'randomCharacter' from 'charactersToUse'
    var randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    // APPEND 'randomCharacter' to 'password' string (ASSIGNMENT OPERATOR += asssigns values to javascript variables same as password = password + randomCharacter)
    password += randomCharacter
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
