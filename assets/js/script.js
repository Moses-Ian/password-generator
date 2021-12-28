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
	
	//put together the regex String
	expr = "[";
	expr += lc ? "a-z" : "";
	expr += uc ? "A-Z" : "";
	expr += nc ? "0-9" : "";
	expr += sc ? "#%&():;<>@_~\!\$\'\*\+\,\-\.\/\=\?\[\\\]\^\`\|\~" : "";
	expr += "]";
	
	console.log("expr = " + expr);
	
	//build the regex Object
	expr = new RegExp(expr);
	
	//build the password
	password = "";
	
	while (password.length < pl) {
	
		//generate a random character
		rand = Math.floor(Math.random() * 128);
		console.log("rand = " + rand);
		chr = String.fromCharCode(rand);
		console.log("chr = " + chr);
		
		//compare the character to the expression
		result = expr.exec(chr);
		if (result) {
			//if it's valid, add it
			result = result.toString();
			password += result;
			console.log(password);
		}
		console.log(result);
	}

	return password;
}

var test = function() {
	str = "[a-zA-Z0-9#%&():;<>@_~]";
	var expr = new RegExp(str);
	result = expr.exec("a");
	if (result) {result = result.toString();}
	console.log(result);
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
