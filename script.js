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
  // IF NOT ( passwordLength >= 8 || passwordLength <=128 )
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    // THEN alert to the user to provide a correct password length
    alert("Please select a password LENGTH between 8 and 128 characters!")
    
    // AND Exit Function
    return;
  }

  //DECLARE a new list of 'charactersToUse'
  var charactersToUse = [];

  // DECLARE a new 'password' string
  var password = " ";

  // CONFIRM if the password generator  'isUsingNumbers'
  
  var isUsingNumbers = confirm("Click OKAY to use numbers.")
  // IF 'isUsingNumbers'
  if (isUsingNumbers == true) {
    //IF true add numbers to charactersToUse
    charactersToUse = charactersToUse.concat(numbers);
  }
  // THEN push 'numbers' into 'charactersToUse' list
  //numbers.push(charactersToUse);

  // AND APPEND one random number from the 'numbers' list
  //const randomNumber = Math.floor(Math.random() * numbers.length);
  //console.log(numbers[randomNumber]);
  

  // CONFIRM if the password generator 'isUsingLowercaseLetters'
  
  var isUsingLowercaseLetters = confirm("Click OKAY to use lowercase letters.");
  // IF 'isUsingLowercaseLetters'
  if (isUsingLowercaseLetters == true) {
    charactersToUse = charactersToUse.concat(lowercaseLetters);
  }
  // THEN push 'lowercaseLetters' into 'charactersToUse' list
  //lowercaseLetters.push(charactersToUse);
  //AND APPEND one random lowercase letter from the 'lowercaseLetters' list
  //const randomLowercase = Math.floor(Math.random() * lowercaseLetters.length);
  //console.log(lowercaseLetters[randomLowercase]);

  // CONFIRM if the password generator 'isUsingUppercaseLetters'
  
  var isUsingUppercaseLetters = confirm("Click OKAY to use UPPERCASE Letters.");
  // IF 'isUsingUppercaseLetters'
  if (isUsingUppercaseLetters == true) {
    charactersToUse = charactersToUse.concat(uppercaseLetters);
  }
  // THEN push 'uppercaseLetters' into 'charactersToUse' list
  //uppercaseLetters.push(charactersToUse);

  //const randomUppercase = Math.floor(Math.random() * uppercaseLetters.length);
  //console.log(uppercaseLetters[randomUppercase]);

  // CONFIRM if the password generator 'isUsingSpecialCharacters'
  
  var isUsingSpecialCharacters = confirm("Click OKAY to use Special Characters.");
  // IF 'isUsingSpecialCharacters'
  if (isUsingSpecialCharacters == true) {
    charactersToUse = charactersToUse.concat(specialCharacters);
  }
  // THEN push 'specialCharacters' into 'charactersToUse' list
  //specialCharacters.push(charactersToUse);

  //const randomSpecial = Math.floor(Math.random() * specialCharacters.length);
  //console.log(specialCharacters[randomSpecial]);

  // IF NO characters are chosen to use **if the user selects no options**
  if ( !isUsingNumbers && !isUsingLowercaseLetters && !isUsingUppercaseLetters && !isUsingSpecialCharacters) {
    //THEN ALERT to the user that they must select at least ONE option
    alert("Sorry, you must select at least ONE option to create your password.");
    //AND EXIT FUNCTION
    return;
  }
    
    

  // FOR i = 0; CONTINUE as long as i < passwordLength; i++;
  //for (var i = 0; i < passwordLength; i++) {

  //}
  // OR

  // WHILE password.length < passwordLength
  while (password.length < passwordLength) {

    // SELECT 'randomCharacter' from 'charactersToUse'
    var randomCharacter = charactersToUse [ Math.floor(Math.random() * charactersToUse.length)];
    // APPEND 'randomCharacter' to 'password' string
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
