/*Tasks 2 
Требуется: Создать двумерный массив элементов размерностью 5х5 и заполнить его произвольными целочисленными значениями.  
По главной диагонали все числа со знаком (-) заменить на 0, а числа со знаком (+) на число 1. 
*/
function getRandomInt(max) {
	var result = (Math.floor(Math.random() * (max)) + 1);
	if (Math.random() > 0.5)
		result *= -1;
    return result;
}



var n =5,
	m = 5,
	arr = new Array(n);
for (var i = 0; i < n; i++) {
	arr[i] = new Array(m);
	for (var j = 0; j < m; j++) {
		arr[i][j] = getRandomInt(100);
	}
}

document.write("Исходный массив :</br>");
for (var i = 0; i < n; i++) {
	for (var j = 0; j < m; j++) {
		if ((arr[i][j]) > 0 && (arr[i][j] >= 10) || ((arr[i][j] > -10) && (arr[i][j] < 0)))
			document.write("&nbsp" + arr[i][j]);
		else 
			if ((arr[i][j] < 10) && (arr[i][j]) >= 0)
				document.write(" " + arr[i][j]);
		else
			document.write(arr[i][j]);
		document.write(" ");
	}
	document.write("</br>");
}


for (var i= 0; i < n; i++){
	if (arr[i][i] > 0)
		arr[i][i] = 1;
	else
		arr[i][i] = 0;
}


document.write("Массив после изменений :</br>");
for (var i = 0; i < n; i++) {
	for (var j = 0; j < m; j++) {
		if ((arr[i][j]) > 0 && (arr[i][j] >= 10) || ((arr[i][j] > -10) && (arr[i][j] < 0)))
			document.write("&nbsp" + arr[i][j]);
		else 
			if ((arr[i][j] < 10) && (arr[i][j]) >= 0)
				document.write("&nbsp&nbsp" + arr[i][j]);
		else
			document.write(arr[i][j]);
		document.write(" ");
	}
	document.write("</br>");
}