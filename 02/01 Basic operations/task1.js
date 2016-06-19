/*
﻿Task 1 
 
Создайте 3 переменные   x = 6, y = 15, и z = 4: 
Выполните и отобразите результат следующих операций для этих переменных:  
· x += y - x++ * z ; 
· z = -- x - y * 5 ; 
· y /= x + 5 % z ;  
· z = x++ + y * 5 ; 
· x = y - x++ * z ; 
*/

var x = 6,
	y = 15,
	z = 4;
x += y - x++ * z; 
document.write("x += y - x++ * z = " + x + "</br>");
z = -- x - y * 5; 
document.write("z = -- x - y * 5 = " + z + "</br>");
y /= x + 5 % z;  
document.write("y /= x + 5 % z = " + y + "</br>");
z = x++ + y * 5;
document.write("z = x++ + y * 5 = " + z + "</br>"); 
x = y - x++ * z;
document.write("x = y - x++ * z = " + x + "</br>"); 