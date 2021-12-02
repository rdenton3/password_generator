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
  function lower() {
    var lowercase = window.prompt("Would you like your password to include numbers? Type 'Yes' or 'No'")
  // converting to lowercase so all answers will be valid
    lowercase = lowercase.toLowerCase();

  // ***ASK ABT !== "YES" why not working
    if (lowercase === "" || lowercase === null) {
      window.alert("Invalid Response. Please try again.")
      return lower();
    }
    else if (lowercase === "yes") {
    var lowercase = ["a","b","c"]
    }
    else {
    var lowercase = ""
    }
  }
  // call the lowercase function
  lower();

  function upper() {
    // ask if user would like to include uppercase characters in their password
    var uppercase = window.prompt("Would you like your password to include numbers? Type 'Yes' or 'No'")
    // converting to lowercase so all answers will be valid
    uppercase = uppercase.toLowerCase();

    if (uppercase === "" || uppercase === null) {
      window.alert("Invalid Response. Please try again.")
      return upper();
    }
    else if (uppercase === "yes") {
      var uppercase = ["A","B","C"]
    }
    else {
      var uppercase = ""
    }
  }
  // call uppercase function
  upper();

  // numeric function
  function numeric() {
    var num = window.prompt("Would you like your password to include numbers? Type 'Yes' or 'No'")
    num = num.toLowerCase();

    if (num === ""|| num === null) {
      window.alert("Invalid Response. Please try again.")
      return numeric();
    }
    else if (num==="yes") {
      var num = [1,2,3,4,5,6,7,8,9]
    }
    else {
      var num = ""
    }
  }

  // call numeric function
  numeric();

  // ask user if they want special characters in their password
  function specialChar() {
    var specialCharacter = window.prompt("Would you like your password to include special characters? Type 'Yes' or 'No'")
    specialChar = specialChar.toLowerCase();

    if (specialChar === "" || specialChar === null) {
      window.alert("Invalid Response. Please try again.")
      return specialChar();
    }

    else if (specialChar === "yes") {
      var specialCharacter = ["!","#","$","%"]
    }

    else (specialChar === null)
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

