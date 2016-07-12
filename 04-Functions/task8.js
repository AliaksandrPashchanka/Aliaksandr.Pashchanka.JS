/* Task 8. Function as an Object Create the function str which takes one parameter and alert("String is non empty") 
if string is non empty and alert(String is empty) otherwise. Use following funtion to check this condition. 
Create the function isNonEpmtyStr as a property of function str. This function takes one parameter and return true if 
its parameter is NonEmptyStr. Test Data: str.isNonEmptyStr(), result = false str.isNonEmptyStr(""), result = false str.
isNonEmptyStr("a"), result = true str.isNonEmptyStr(1), result = false str(), alert("String is empty") str("a"), 
alert("String is non empty")  
*/
function str(string) {
	var string = string || '';
	if (str.isNonEmptyString(string)) {
    	alert('String is non empty');
    } 
    else { 
    	alert('String is empty');
    }
};
str.isNonEmptyString = function(string) {
 	var string = string || '';
   	if (typeof string === 'string' &&  string !== '') {
		return true;
	} 
	else {
		return false;
	}
 	
};

console.log(str.isNonEmptyString());
console.log(str.isNonEmptyString(''));
console.log(str.isNonEmptyString('a'));
console.log(str.isNonEmptyString(1));
str();
str('a');

