/* task 1

Дано два числа A и B где (A<B).  
Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.  
Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. 
*/
 
var A = +prompt("Введите число А : " , "1.1"),
	B = +prompt("Введите число B, которое больше A : " , "3"),
	sum = 0;

while (isNaN(A)) {
	A = +prompt("Введённое число А неверно. Введите число А : " , "1.1");
}

while ((B <= A) || (isNaN(B))) {
	B = +prompt("Введённое число B неверно. Введите число B : " , "3");
}

document.write("Все нечётные числа расположенные между A и B :");
for (var i = (A - (A % 1)) + 1; i < B; i++) {
	if ((i % 2)) document.write(" " + i);
	sum += i;
}

document.write("</br>" + "Сумма чисел расположенных в числовом промежутке от A до B равна : " + sum +"</br>");
