/*2. Create a function that gets the value of <input type="text"> ands prints its value to the console*/
function printValueToConsole() {
	var input = document.querySelectorAll('input[type=\'text\'');
	if (input[0].value) {
		console.log(input[0].value);
	}
	else {
		console.log(1 + 'st input field is empty. Please enter some value');
	}
}