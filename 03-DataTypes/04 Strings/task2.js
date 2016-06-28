/* 2. Write a JavaScript function to check if in a given expression the brackets are put correctly.
    * Example of correct expression: `((a+b)/5-d)`.
    * Example of incorrect expression: `)(a+b))`. */
function isBracketsCorrectly(str) {
	var count = 0,i;
	for (i = 0; (i < str.length) && (count >= 0); i++) {
		if (str.charAt(i) === '(')
			count++;
		if (str.charAt(i) === ')')
			count--;
	}
	if (!count)
		return true;
	else 
		return false;
}

var str = `((a+b)/5-d)`;
document.write('Исходная строка : ' + str + '</br>');
document.write('Результат проверки : ' + isBracketsCorrectly(str) + '</br>');
str = `)(a+b))`;
document.write('Исходная строка : ' + str + '</br>');
document.write('Результат проверки : ' + isBracketsCorrectly(str) + '</br>');