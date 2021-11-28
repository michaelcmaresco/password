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

  
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);