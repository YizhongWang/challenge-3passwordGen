var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacter =['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

function passwordOption(){
  var length = parseInt(prompt("How many characters do you like to have in your password"));

  if(isNaN(length)){
    window.prompt("It's not a vaild number");
  }
  
  if(length<8){
    window.prompt("this number is not a strong password");
  }else if(length>128){
      window.prompt("the length is to much to password");
    }
    else{
      window.prompt("this length is good");
    }
  
    function getRandomList(){

      return result[randomInt(0,result.length-1)];
    }
  var userWantUpperCase =confirm("Do you want to include upper case characters?");
  var userWantLowerCase= confirm("Do you want to include lower case characters？");
  var userWantNumbers= confirm("Do you want to include numbers?");
  var userWantSpecialCharacter= confirm(" Do you want to include special characters?");
  var optionCart=[];
  for(var i=0;i<lowerCase.length;i++){
    upperCase[i]=lowerCase[i].toUpperCase();

  }
  if(userWantNumbers===true){
    optionCart.push(numbers)
  }
  
  if(userWantSpecialCharacter===true){
    optionCart.push(specialCharacter)
  }
  
  if(userWantLowerCase===true){
    optionCart.push(lowerCase)
  }
  if(userWantUpperCase===true){
    optionCart.push(upperCase)
  }

console.log(optionCart);





};
function randomInt(min,max){
   return Math.floor(Math.random()*(max-min)+min);
}






function generatePassword(){
  var userOption =passwordOption();

var obtainedPassword = "";
var choice = [];
for(var count=0; count<length; count++){
  var randomN = choice[randomInt(0,result.length-1)];
  console.log(choice);


}

}

var generateBtn = document.querySelector("#generate");

var optionCart=[];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for(var i=0; i<length;i++){
   var randomList= getRandomList(optionCart);
   var randomChar=getRandomList(randomList);
   console.log(randomChar);
  }

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
