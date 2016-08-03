/*1. Write a JavaScript function reverses string and returns it
    * Example: "sample" -> "elpmas".*/
function reverseString(str) {
	return str.split('').reverse().join('');
}

var str = 'sample';
document.write('Исходная строка : ' + str + '</br>');
document.write('Перевёрнутая строка : ' + reverseString(str) +'</br>');
str = 'qwerty';
document.write('Исходная строка : ' + str + '</br>');
document.write('Перевёрнутая строка : ' + reverseString(str) + '</br>');
str = 'treeOfLife';
document.write('Исходная строка : ' + str + '</br>');
document.write('Перевёрнутая строка : ' + reverseString(str) + '</br>');