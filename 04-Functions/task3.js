/* Task 3. AF Create anonymous function which should log message "message in console" to the console and use it as 
a click handler for button.  */

var button = document.createElement("input");
 	button.type = 'button';
	button.value = 'click me';
document.body.appendChild(button);
button.onclick = function () {
    console.log('message in console');
};
