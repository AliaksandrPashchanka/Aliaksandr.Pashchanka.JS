/*
Task 2 
 
Вычислите среднее арифметическое трех целочисленных значений и выведите его на экран. 
*/
var x = +prompt("Ведите 1ое целое число :" , "1");
	y = +prompt("Ведите 2ое целое число :" , "2");
	z = +prompt("Ведите 3е целое число :" , "3");
if ((x < 0) || (isNaN(x)))
	x = 1;
if ((y < 0) || (isNaN(y)))
	y = 2;
if ((z < 0) || (isNaN(z)))
	z = 3;

	resust = (x + y + z)/3;
	document.write("Среднее арифметическое трёх целочисленных значений равно : " + resust);