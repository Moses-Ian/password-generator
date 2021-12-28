// Assignment code here
var getPasswordLength = function() {
	
	//this needs to be validated
	pl = window.prompt("Please enter a length for your password from 8 to 128 characters:");
	pl = parseInt(pl);
	
	//validate password
	if (!pl || pl < 8 || pl > 128) {
		pl = getPasswordLength();
	}
	
	return pl;	
}

var generatePassword = function() {

	do {
		// prompt for character types
		lc = window.confirm("Do you want lowercase characters?");
		console.log("lc = " + lc);
		
		uc = window.confirm("Do you want uppercase characters?");
		console.log("uc = " + uc);
		
		nc = window.confirm("Do you want numbers?");
		console.log("nc = " + nc);
		
		sc = window.confirm("Do you want special characters?");
		console.log("sc = " + sc);
		
	}while (!(lc || uc || nc || sc));	//VALIDATION - NO CHARACTER TYPES selected

	console.log("valid character types");
	
	//prompt for password length
	pl = getPasswordLength();
	console.log("pl = " + pl);
	


	return "1234";
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
