// Assignment code here
var generatePassword = function () {

  // Step 1. prompt user for password length
  var passwordLength = window.prompt("How long would you like your password to be? The length must be between 8 and 128");

  // Step 2. Verify length is between 8 - 128
  passwordLength = parseInt(passwordLength);
  while (true) {
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = window.prompt("Please enter a valid value between 8-128");
      passwordLength = parseInt(passwordLength);
    }
    else {
      break;
    }
  }
  // Step 3. If length is invalid warn user and re-prompt
  // Step 4. Ask user if they want lower case letters
  // Step 5. Ask user if they want upper case letters
  // Step 6. Ask user if they want numeric
  // Step 7. Ask user if they want special characters
  // Step 8. Verify that at least one group was selected
  // Step 9. If no group was selected then warn user and re-prompt
  // Step 10. Generate a password with the criteria
  // Step 11. Password is shown as an alert or on the webpage
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
