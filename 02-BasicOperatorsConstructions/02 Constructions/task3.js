/*
Task 3 
Используя циклы нарисуйте в браузере с помощью пробелов (&nbsp) и звездочек (*): 
· Прямоугольник 
· Прямоугольный треугольник  
· Равносторонний треугольник 
· Ромб. 
*/
var a = +prompt("Введите любое целое число : " , "10");
if ((a < 3) || (a > 100) || (isNaN(a)))
	a = 5;
var	b = a * 2;

//rectangle
for (var i = 1; i <= a; i++) {
	if ((i == 1) || (i == a)) {
		document.write("</br>");
		for (var j = 1; j <= b*2; j++)
			document.write("*");
	}
	else {
		document.write("</br>" + "*");
		for (var j = 2; j < (b*4 - 2); j++)
			document.write("&nbsp");
		document.write("*");
	}
}

//ident
for (var i =0; i < 5; i++) {
	document.write("</br>");
}

//right triangle <B = 90°
var n = 1;
document.write("*" + "</br>");
for (var i =2; i <= a; i++) {
	document.write("*");
	for (var k = 1; k <= n; k++) {
		document.write("&nbsp");
		
	}
	n+=(b/a)*2;
	document.write("*");
	document.write("</br>");
}
for (var i = 1; i <= a+1; i++) {
	document.write("*&nbsp&nbsp");
}



//ident
for (var i =0; i < 5; i++) {
	document.write("</br>");
}


//equilateral triangle <A = <B = <C = 60 °
for (var i = 1; i < a; i++) {
		document.write("&nbsp&nbsp&nbsp");
}
document.write("*");

n = a - 1;
var m = 2;
for (var i = 2; i < a; i++) {
	document.write("</br>");
	n--;
	for (var k = 1; k <= n; k++) {
		document.write("&nbsp&nbsp&nbsp");
		
	}
	document.write("*");
	for (var k = 1; k <= m; k++) {
		document.write("&nbsp&nbsp");
	}
	m +=3;
	document.write("*");
}
document.write("</br>");
for (var i = 1; i <= a; i++) {
	document.write("*&nbsp&nbsp&nbsp&nbsp");
}



//ident
for (var i =0; i < 5; i++) {
	document.write("</br>");
}

//rhombus

// 1st part
for (var i = 1; i < a; i++) {
		document.write("&nbsp&nbsp&nbsp");
}
document.write("*");

n = a - 1;
var m = 2;
for (var i = 2; i <= a; i++) {
	document.write("</br>");
	n--;
	for (var k = 1; k <= n; k++) {
		document.write("&nbsp&nbsp&nbsp");
		
	}
	document.write("*");
	for (var k = 1; k <= m; k++) {
		document.write("&nbsp&nbsp");
	}
	m +=3;
	document.write("*");
}


//2nd part

n = 1;
var m = 2 + 3 * (a-3);
for (var i = 2; i < a; i++) {
	document.write("</br>");
	for (var k = 1; k <= n; k++) {
		document.write("&nbsp&nbsp&nbsp");
		
	}
	document.write("*");
	for (var k = 1; k <= m; k++) {
		document.write("&nbsp&nbsp");
	}
	m -=3;
	n++;
	document.write("*");
}
document.write("</br>");
for (var i = 1; i < a; i++) {
		document.write("&nbsp&nbsp&nbsp");
}
document.write("*");



