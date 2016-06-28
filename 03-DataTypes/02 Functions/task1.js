/* 1. Write a function that returns the last digit of given integer as an English word. Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine" */
function textDigit(number) {
	var lastDigit,
		textNumber = '';
	if (number < 10)
		lastDigit = number;
	else
		lastDigit = number % 10;
	switch(lastDigit) {
		case 0 : {
			textNumber = 'zero';
			break;
		}
		case 1 : {
			textNumber = 'one';
			break;
		}
		case 2 : {
			textNumber = 'two';
			break;
		}
		case 3 : {
			textNumber = 'three';
			break;
		}
		case 4 : {
			textNumber = 'four';
			break;
		}
		case 5 : {
			textNumber = 'five';
			break;
		}
		case 6 : {
			textNumber = 'six';
			break;
		}
		case 7 : {
			textNumber = 'seven';
			break;
		}
		case 8 : {
			textNumber = 'eight';
			break;
		}
		case 9 : {
			textNumber = 'nine';
			break;
		}
	}
	return textNumber;
}


var number = +prompt('Введите число : ' , '12309');
while ((isNaN(number)) || (number % 1)) {
	number = +prompt('Введённое число некорректно. Введите число : ' , '12309');
}
document.write('Введённое число : ' + number + '</br>');
document.write('Последня цифра в числе, представленная в виде английского слова : ' + textDigit(number));