// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask how long user would like password to be
  // password length must be between 8 and 128 characters
  var length = window.prompt("Please type the preferred password length. Password must be between 8 and 128 characters.")
  if (length < 8 || length > 128) {
    window.alert("Invalid password length. Please try again.")
    return writePassword()
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

