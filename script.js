// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask how long user would like password to be
  // password length must be between 8 and 128 characters
  var length = window.prompt("How long would you like your passwrod to be? Password must be between 8 and 128 characters in length.")
  if (length < 8 || length > 128) {
    window.alert("Invalid password length. Please try again.")
    return writePassword()
  }
  console.log(length)

  // ask if user would like to include lowercase characters in their password
  // if user does not provide valid response, they must retry
  var lowercase = window.prompt("Would you like to include lowercase letters in your password? Type 'Yes' or 'No'")
  // converting to lowercase so all answers will be valid
  lowercase = lowercase.toLowerCase();

  if (lowercase === "" || lowercase === null) {
    window.alert("Invalid Response. Please try again.")
    return writePassword()
  }
  else if (lowercase === "yes") {
    var lowercase = ["a","b","c"]
  }
  else {
    var lowercase = ""
  }
  console.log(lowercase)

  // ask if user would like to include uppercase characters in their password
  var uppercase = window.prompt("Would you like to include uppercase letters in your password? Type 'Yes' or 'No'")
  // converting to lowercase so all answers will be valid
  uppercase = uppercase.toLowerCase();

  if (uppercase === "" || uppercase === null) {
    window.alert("Invalid Response. Please try again.")
    return writePassword()
  }
  else if (uppercase === "yes") {
    var uppercase = ["A","B","C"]
  }
  else {
    var uppercase = ""
  }
  console.log(uppercase)


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

