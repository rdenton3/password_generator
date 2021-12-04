// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask how long user would like password to be
  // password length must be between 8 and 128 characters
  passwordLength = window.prompt("How long would you like your password to be? Password must be between 8 and 128 characters in length. Please type a number.")
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Please try again.")
    writePassword()
  }

  lower();

  upper();

  numeric();

  specialChar();

  generatePassword();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

function lower() {
  lowercase = window.prompt("Would you like your password to include lowercase letters? Type 'Yes' or 'No'")
// converting to lowercase so all answers will be valid
  lowercase = lowercase.toLowerCase();

  if (lowercase === "" || lowercase === null) {
    window.alert("Invalid Response. Please try again.")
    lower();
  }
  else if (lowercase === "yes") {
  lowercaseStr = "abcdefghijklmnopqrstuvwxyz"
  }
  else {
  lowercaseStr = ""
  }

  return lowercaseStr;
}

function upper() {
  // ask if user would like to include uppercase characters in their password
  uppercase = window.prompt("Would you like your password to include uppercase letters? Type 'Yes' or 'No'")
  // converting to lowercase so all answers will be valid
  uppercase = uppercase.toLowerCase();

  if (uppercase === "" || uppercase === null) {
    window.alert("Invalid Response. Please try again.")
    return upper();
  }
  else if (uppercase === "yes") {
    uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else {
    uppercaseStr = ""
  }
}
// ask user if they want to include numbers in their password
function numeric() {
  num = window.prompt("Would you like your password to include numbers? Type 'Yes' or 'No'")
  num = num.toLowerCase();

  if (num === ""|| num === null) {
    window.alert("Invalid Response. Please try again.")
    numeric();
  }
  else if (num==="yes") {
    numStr = "1234567890"
  }
  else {
    numStr = ""
  }
}
// ask user if they want to include special characters
function specialChar() {
  specialCharacter = window.prompt("Would you like your password to include special characters? Type 'Yes' or 'No'")
  specialCharacter = specialCharacter.toLowerCase();

  if (specialCharacter === "" || specialCharacter === null) {
    window.alert("Invalid Response. Please try again.")
    specialChar();
  }

  else if (specialCharacter === "yes") {
    specialCharacterStr = "!@#$%^&*()+"
  }

  else {
    specialCharacterStr = ""
  }
}

function generatePassword() {
  if (lowercaseStr !== "") {
    var lowerNum = Math.floor(Math.random() * lowercaseStr.length)
    // index the lowercase array with the randomly generated number
    lowercaseChar = lowercaseStr[lowerNum]
  }
  else {
    lowercaseChar = ""
  }

  // follow the same process for the other characters
  if (uppercaseStr !== "") {
    var upperNum = Math.floor(Math.random() * uppercaseStr.length)
    uppercaseChar = uppercaseStr[upperNum]
  }
  else {
    uppercaseChar = ""
  }

  if (numStr !== "") {
    var randomNum = Math.floor(Math.random() * numStr.length)
    numericChar = numStr[randomNum]
  }
  else {
    numericChar = ""
  }

  if (specialCharacterStr !== "") {
    var specialNum = Math.floor(Math.random() * specialCharacterStr.length)
    specChar = specialCharacterStr[specialNum]
  }
  else {
    specChar = ""
  }
  // make sure that all chosen characters are included in the password
  half = lowercaseChar+uppercaseChar+numericChar+specChar

  // the run a for loop to fill the remaining length of the password
  // calculating the remaining length
  lengthLeft = passwordLength - half.length
  // concat the arrays of the chosen characters
  var concatArray = specialCharacterStr+numStr+uppercaseStr+lowercaseStr;
  console.log(concatArray)
  var passwordGen = ''
  for (var i = 0; i < lengthLeft; i++) {
    var passChar = Math.floor(Math.random() * concatArray.length + 1)
    passwordGen += concatArray.charAt(passChar)
    console.log(passwordGen)
  }

  var finalPassword = passwordGen + half

  return finalPassword
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

