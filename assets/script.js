// intializing 
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

function passlength () { //function length
    window.alert("Enter length of preferred password 8-128 characters.\n E.g 20");
    var plength = parseInt(window.prompt("Please enter length"));
    if (plength < 8 || plength > 128) {
      
      window.alert("Please enter between 8-128");
      passlength();
  // if-then is good here because it gives us the ability to have multiple courses of route 
    } else if (!plength) {
      window.alert("Please enter between 8-128")
      passlength();
    } else {
      window.alert("Entered length of: " + plength + "\n Password will be generated");
      return plength;
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
      window.alert("If you wish to close the application, press tab.")
      generatePassword();
      } else if (userInput) {
    userInput = userInput.split(" ");
    arraySplit = userInput.slice(0,userInput.length);
  
    window.alert("You have selected: " + arraySplit);
    validInput = false;

//Ensures correct data is going through in the correct format. 
    for (var i = 0; i < userInput.length; i++) {
      var inputCriteria = userInput[i];
      var inputCriteriaInteger = parseInt(inputCriteria);
      switch(inputCriteriaInteger) {
        case 1:
        case 2:
        case 3:
        case 4:
          break;
        default:
          if (!inputCriteriaInteger) {
            window.alert("Please select a criteria using numbers and only from 1-4 seprated by one space.\nRestarting application");
            generatePassword();
          }
          else {
            window.alert(" Please select a criteria using numbers and only from 1-4 seprated by space.\n\n" + "User input: " + inputCriteria + " is invalid");
            generatePassword();
          } 
        }
      }

// we have to prepare to think if there are any duplicates, so we have 
var duplicatePassState = true;
var validateInput = [];
var round1Shift = "";
var round1Pop = "";
var criteria3 = "";
var criteria4 = "";
var validateInputArray = []

// Checking for any duplicity related issues, this entire if then statement
if (userInput.length == 1) {
  duplicatePassState = false;
}

  while (duplicatePassState) {

    var tempVar = "";
    for (var i = 0; i < userInput.length; i++) {
      tempVar = userInput[i];
      validateInput.push(tempVar);
    }

    round1Shift = validateInput.shift();
    round1Pop = validateInput.pop();
    if (round1Shift === round1Pop) {
      window.alert("Duplication detected, please check criteria rules.");
      generatePassword();
    } 
    
    else {
      var round2Shift = "";
      var round2Pop = "";
      round2Shift = validateInput.shift();
      round2Pop = validateInput.pop();

      if(!round2Shift || !round2Pop) {
        duplicatePassState = false;
        break;
      }


      if (round1Shift === round2Shift) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } else if (round1Pop === round2Pop) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } else if (round1Shift === round2Pop) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } else if (round1Pop === round2Shift) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } else if (round1Shift === round1Pop) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } else if (round2Shift === round2Pop) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } 
      else {
        duplicatePassState = false;
      }
    } 
  }
}
}
}

// continuation, password randomness generating section 
function generatePasswordRandomness(userInput, plength) {
var valueRandom = 0;
var counter = userInput.length
var UserCounter = userInput.length
var finalPassword = "";

for (var i = 0; i < userInput.length; i++) {
var guaranteedCriteria = userInput[i];
if (guaranteedCriteria === "1") {
  valueRandom = Math.floor(Math.random() * 26);
  finalPassword += pCriteria.lowercase.criteria[valueRandom];

} else if (guaranteedCriteria === "2") {    
  valueRandom = Math.floor(Math.random() * 26);
  finalPassword += pCriteria.uppercase.criteria[valueRandom];

} else if (guaranteedCriteria === "3") {
  // this says we will round to the lowest number after Math.random
  valueRandom = Math.floor(Math.random() * 10);
  finalPassword += pCriteria.numeric.criteria[valueRandom];

} else if (guaranteedCriteria === "4") {
  // same as above comment line, BUT specifically with possible symbols of 30. Which would yield 0 - 19. 
  valueRandom = Math.floor(Math.random() * 31);
  finalPassword += pCriteria.symbols.criteria[valueRandom];
  } 
}

while ( counter < plength )  {
if (!userInput[(UserCounter - 1)]) {
  UserCounter -= Math.floor( ( (Math.random() * userInput.length) + 1) );
  counter += 1;
} else {
  UserCounter = Math.floor( ( (Math.random() * userInput.length) + 1) );
  counter += 1;
}

var inputCriteria = userInput[(UserCounter - 1)];
var inputCriteriaInteger = parseInt(inputCriteria);

switch(inputCriteriaInteger) { 
  case 1:
    valueRandom = Math.floor(Math.random() * 26);
    finalPassword += pCriteria.lowercase.criteria[valueRandom];
      break; 
  case 2:
    valueRandom = Math.floor(Math.random() * 26);
    finalPassword += pCriteria.uppercase.criteria[valueRandom];
    break;
  case 3:
    valueRandom = Math.floor(Math.random() * 10);
    finalPassword += pCriteria.numeric.criteria[valueRandom];
    break;
  case 4:
    valueRandom = Math.floor(Math.random() * 31);
    finalPassword += pCriteria.symbols.criteria[valueRandom];
    break;
  }
}
return finalPassword;
}

// This is where the password would be 
function writePassword() {

//initilaize global variables
arraySplit = ""; 
exitApplication = false; 
userInput = ""; 
finalPassword = ""; 
displayPassword = "";
window.alert(" Lets check our password criteria options");
var password = generatePassword();
var plength = passlength();
displayPassword = generatePasswordRandomness(userInput,plength);

var passwordText = document.querySelector("#password"); 
document.getElementById("password").readOnly = false;
document.getElementById("password").value = displayPassword;
document.getElementById("password").readOnly = true;

}
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);