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
    return writePassword()
  }

  // ask if user would like to include lowercase characters in their password
  // if user does not provide valid response, they must retry
  function lower() {
    lowercase = window.prompt("Would you like your password to include lowercase letters? Type 'Yes' or 'No'")
  // converting to lowercase so all answers will be valid
    lowercase = lowercase.toLowerCase();

  // ***ASK ABT !== "YES" why not working
    if (lowercase === "" || lowercase === null) {
      window.alert("Invalid Response. Please try again.")
      return lower();
    }
    else if (lowercase === "yes") {
    lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    }
    else {
    lowercase = ""
    }
  }
  // call the lowercase function
  lower();


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
      uppercase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    }
    else {
      uppercase = ""
    }
  }
  // call uppercase function
  upper();

  // numeric function
  function numeric() {
    num = window.prompt("Would you like your password to include numbers? Type 'Yes' or 'No'")
    num = num.toLowerCase();

    if (num === ""|| num === null) {
      window.alert("Invalid Response. Please try again.")
      return numeric();
    }
    else if (num==="yes") {
      num = [1,2,3,4,5,6,7,8,9]
    }
    else {
      num = ""
    }
  }

  // call numeric function
  numeric();

  // ask user if they want special characters in their password
  function specialChar() {
    specialCharacter = window.prompt("Would you like your password to include special characters? Type 'Yes' or 'No'")
    specialCharacter = specialCharacter.toLowerCase();

    if (specialCharacter === "" || specialCharacter === null) {
      window.alert("Invalid Response. Please try again.")
      return specialChar();
    }

    else if (specialCharacter === "yes") {
      specialCharacter = ["!","#","$","%","&","(",")","*","+","/",":",";","<",">","[","]","^"]
    }

    else {
      specialCharacter = ""
    }
  }
  // call special character
  specialChar();

  // define the generate password function
  function generatePassword() {
    if (lowercase !== "") {
      var lowerNum = Math.floor(Math.random() * lowercase.length)
      // index the lowercase array with the randomly generated number
      lowercaseChar = lowercase[lowerNum]
    }
    else {
      lowercaseChar = ""
    }

    // follow the same process for the other characters
    if (uppercase !== "") {
      var upperNum = Math.floor(Math.random() * uppercase.length)
      uppercaseChar = uppercase[upperNum]
    }
    else {
      uppercaseChar = ""
    }

    if (num !== "") {
      var randomNum = Math.floor(Math.random() * num.length)
      numericChar = num[randomNum]
    }
    else {
      numericChar = ""
    }

    if (specialCharacter !== "") {
      var specialNum = Math.floor(Math.random() * specialCharacter.length)
      specChar = specialCharacter[specialNum]
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
    var concatArray = specialCharacter+num+uppercase+lowercase
    var passwordGen = ''
    for (var i = 0; i < lengthLeft; i++) {
      var passChar = Math.floor(Math.random() * concatArray.length + 1)
      passwordGen += concatArray.charAt(passChar)
    }

    var finalPassword = passwordGen + half
    console.log(finalPassword)
    return finalPassword;


  }
  generatePassword();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

