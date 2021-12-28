// Assignment code here
var getPasswordLength = function() {
	
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
		uc = window.confirm("Do you want uppercase characters?");
		nc = window.confirm("Do you want numbers?");
		sc = window.confirm("Do you want special characters?");
	}while (!(lc || uc || nc || sc));	//VALIDATION - NO CHARACTER TYPES selected

	//prompt for password length
	pl = getPasswordLength();
	
	//put together the regex String
	expr = "[";
	expr += lc ? "a-z" : "";
	expr += uc ? "A-Z" : "";
	expr += nc ? "0-9" : "";
	expr += sc ? "#%&():;<>@_~\!\$\'\*\+\,\-\.\/\=\?\[\\\]\^\`\|\~" : "";
	expr += "]";
	
	//build the regex Object
	expr = new RegExp(expr);
	
	//build the password
	password = "";
	
	while (password.length < pl) {
	
		//generate a random character
		rand = Math.floor(Math.random() * 128);
		chr = String.fromCharCode(rand);
		
		//compare the character to the expression
		result = expr.exec(chr);
		if (result) {
			//if it's valid, add it
			result = result.toString();
			password += result;
		}
	}

	return password;
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
