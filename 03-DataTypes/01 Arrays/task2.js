
/*2. Write a script that compares two char arrays lexicographically (letter by letter).*/

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr1 = [],
	arr2 = [],
	n = +prompt('Введите размер 1ого массива символов : ','10'),
	m = +prompt('Введите размер 2ого массива символов : ','10'),
	i,
	result=0;

for (i = 0; i < n; i++) {
	arr1[i] = String.fromCharCode(getRandom(1040,1105));
}
for (i = 0; i < m; i++) {
	arr2[i] = String.fromCharCode(getRandom(1040,1105));
}

document.write('Первый массив символов : ' + '</br>');
for (i = 0; i < n; i++) {
	document.write(arr1[i] + "</br>");
}

document.write('Второй массив символов : ' + '</br>');
for (i = 0; i < m; i++) {
	document.write(arr2[i] + "</br>");
}

if (n < m) {
	i = 0;
	while (i < n) {
		if (arr1[i] > arr2[i]) {
			result = 1;
			break;
		}
		else if (arr1[i] < arr2[i]) {
			result = -1;
			break;
		}
		i++;
	}
	if (result == 1)
		document.write('Первый массив больше второго массива');
	else if (result == -1)
		document.write('Второй массив больше первого массива');
	else
		document.write('Второй массив больше первого массива');
}
else if (m < n) {
	i = 0;
	while (i < n) {
		if (arr1[i] > arr2[i]) {
			result = 1;
			break;
		}
		else if (arr1[i] < arr2[i]) {
			result = -1;
			break;
		}
		i++;
	}
	if (result == 1)
		document.write('Первый массив больше второго массива');
	else if (result == -1)
		document.write('Второй массив больше первого массива');
	else
		document.write('Первый массив больше второго массива');
}
else {
	i = 0;
	while (i < n) {
		if (arr1[i] > arr2[i]) {
			result = 1;
			break;
		}
		else if (arr1[i] < arr2[i]) {
			result = -1;
			break;
		}
		i++;
	}
	if (result == 1)
		document.write('Первый массив больше второго массива');
	else if (result == -1)
		document.write('Второй массив больше первого массива');
	else
		document.write('Массивы равны');
}
