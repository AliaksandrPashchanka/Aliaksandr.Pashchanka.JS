/* 2. Write a function that reverses the digits of given decimal number. Example: 256 -> 652 */
function reverseNumber(number) {
	var result = '' + number;
	return result.split("").reverse().join("");
}



var number = +prompt('Введите число : ' , '256');
while ((isNaN(number)) || (number % 1) || (!(number % 10))) {
	number = +prompt('Введённое число некорректно. Введите число : ' , '256');
}
document.write('Введённое число : ' + number + '</br>');
document.write('Перевёрнутое число : ' + reverseNumber(number));