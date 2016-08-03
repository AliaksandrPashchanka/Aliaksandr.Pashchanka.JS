/* 3. Write a function that makes a deep copy of an object. The function should work for both primitive and reference types. */

function copy(obj) {
	var newObj,key;
	if (typeof obj === 'object') {
		newObj = {};
		for (key in obj) {
			newObj[key] = obj[key];
		}
		return newObj;
	}
	else {
		newObj = obj;
		return newObj;
	}
}

var point = {
		x: 10,
		y: 15
	};
var newPoint = copy(point),
	key;
document.write('Исходный объект :' + '</br>');
for (key in point)
	document.write('Ключ : ' + key + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspЗначение : " + newPoint[key] + '</br>');
document.write('Копия объекта :' + '</br>');
for (key in newPoint)
	document.write('Ключ : ' + key + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspЗначение : " + newPoint[key] + '</br>');
var a = 5,
	b = copy(a);
document.write('Число а равно : ' + a + '</br>');
document.write('Копия числа а равна : ' + b + '</br>');
var s = 'qwerty',
	str = copy(s);
document.write('Строка s равна : ' + s + '</br>');
document.write('Копия строки s равна : ' + str + '</br>');
