/*
Task 3 
 
Напишите программу расчета объема - V и площади поверхности - S цилиндра.  
Объем V цилиндра радиусом - r и высотой – h, вычисляется по формуле: V = πr 2 h. 
Площадь S поверхности цилиндра вычисляется по формуле: S = 2π rh + 2π r 2 = 2π r (r+ h). 
Результаты расчетов выведите на экран. 
*/
var r = +prompt("Введите радиус цилиндра : " , "5"),
	h = +prompt("Введите высоту цилиндра : " , "15"),
	V = 0,
	S = 0;
	
while ((r <= 0) || (isNaN(r))) {
	r = r = +prompt("Некорректно введён радиус.Введите радиус цилиндра : " , "5");
}

while if ((h < 0) || (isNaN(h))) {
	h = +prompt("Некорректно введена высота.Введите высоту цилиндра : " , "15");
}

V = 2 * r * h * Math.PI;
S = 2 * Math.PI * r * (r + h);
document.write("Объём цилиндра равен : " + V + "</br>");
document.write("Площадь цилиндра равна : " + S + "</br>");