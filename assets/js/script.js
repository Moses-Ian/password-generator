const MAX_ATTEMPTS = 30;
const SYMBOLS = "~`!@#$%^&*(){}[]?/+=|\_-:;";

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

	//get min and max lengths
	const minLength = document.getElementById("minimum").value || document.getElementById("minimum").placeholder;
	const maxLength = document.getElementById("maximum").value || document.getElementById("maximum").placeholder;

	//build the password
	let password = "";
	let attempts = 0;
	
	while (password.length < maxLength-2 && attempts < MAX_ATTEMPTS) {
		//pick a random word
		let word = WORDS[Math.floor(Math.random() * WORDS.length)];
		word = word[0] + word.slice(1).toLowerCase();
		
		//see if the word will fit
		if (password.length + word.length < maxLength-2) {
			//if it's valid, add it
			password += word;
		}
		
		attempts++;
	}
	
	// attach an arbitrary symbol
	password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
	
	// attach at least one number, and enough to make sure it meets the minimums
	do {
		password += Math.floor(Math.random() * 10);
	} while (password.length < minLength);
	

	return password;
}

// Write password to the #password input
function writePassword() {
  document.getElementById("password").value = generatePassword();
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
