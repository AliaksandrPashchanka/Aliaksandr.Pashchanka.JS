/*
Task 3 
 
Напишите программу расчета объема - V и площади поверхности - S цилиндра.  
Объем V цилиндра радиусом - r и высотой – h, вычисляется по формуле: V = πr 2 h. 
Площадь S поверхности цилиндра вычисляется по формуле: S = 2π rh + 2π r 2 = 2π r (r+ h). 
Результаты расчетов выведите на экран. 
*/
var r = prompt("Введите радиус цилиндра : " , "5"),
	h = prompt("Введите высоту цилиндра : " , "15"),
	V = 0,
	S = 0;
V = 2 * (+r) * (+h) * Math.PI;
S = V + 2 * 2 * Math.PI * (+r);
document.write("Объём цилиндра равен : " + V + "</br>");
document.write("Площадь цилиндра равна : " + S + "</br>");