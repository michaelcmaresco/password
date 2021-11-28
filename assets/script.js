var arraySplit = "";
var exitApplication = false;
var userInput = "";
var finalPassword = "";
var displayPassword = "";

var pCriteria = {
  lowercase: { indexNumber: 0 , criteria: "abcdefghijklmnopqrstuvwxyz"
  },
  uppercase: { indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  numeric: { indexNumber: 2, criteria: "0123456789"
  },
    symbols: { indexNumber: 3, criteria: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
}

function passLenght () { //function length
    window.alert("How long do you want your password to be from 8-128 characters.\n E.g 20");
    var pLenght = parseInt(window.prompt("Please enter lenght"));
    if (pLenght < 8 || pLenght > 128) {
      
      window.alert("Please enter a valid number between 8-128");
      passLenght();
  // if-then is good here because it gives us the ability to have multiple courses of route 
    } else if (!pLenght) {
      window.alert("Please enter a valid number between 8-128")
      passLenght();
    } else {
      window.alert("You have entered a valid lenght of: " + pLenght + "\n Password will now be generated");
      return pLenght;
    }
  }
  var generatePassword = function() {
    arraySplit = ""; 
    exitApplication = false; 
    userInput = ""; 
    finalPassword = ""; 
    displayPassword = "";
 
   window.alert("The password will be lowercase, uppercase, numeric, and/or special characters.");
 
   var validInput = true;

   //Response - to the orignal alert window. 
   while(validInput) {
    userInput = window.prompt("Options: (if you want to pick multiple keep a space between each) 1 = lowercase 2 = uppercase 3 = numeric 4 = special characters.\n");
    if (!userInput) {
      window.alert("If you wish to close the application, please close this password generator tab.")
      generatePassword();
      } else if (userInput) {
    userInput = userInput.split(" ");
    arraySplit = userInput.slice(0,userInput.length);
  
    window.alert("You have selected: " + arraySplit);
    validInput = false;

  //


  
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);