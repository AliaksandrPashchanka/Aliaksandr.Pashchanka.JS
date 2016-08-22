/*3. Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value*/
function setBodyColor() {
	var input = document.querySelectorAll('input[type=\'color\'');
	document.body.style.background = input[0].value;
}