// Assignment Code
var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacter =['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

function passwordOption(){
  var length = parseInt(prompt("How many characters do you like to have in your password"));
  var userWantUpperCase =confirm("Do you want to include upper case characters?");
  var userWantLowerCase= confirm("Do you want to include lower case characters？");
  var userWantNumbers= confirm("Do you want to include numbers?");
  var userWantSpecialCharacter= confirm(" Do you want to include special characters?");

};

function generatePassword(){
  var userOption =passwordOption();
}
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
