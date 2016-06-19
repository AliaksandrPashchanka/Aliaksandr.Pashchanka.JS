/* Task 2 
Напишите программу, которая будет рассчитывать и выводить на экран количество возможных вариантов доставки товара. 
Для решения задачи, используйте факториал N!, рассчитываемый с помощью цикла do-while . 
*/
var n = +prompt("Введите количество товаров : ","10"),
	numberOfCombinations = 1;
if (numberOfCombinations < 1)
	numberOfCombinations = 1;
do {
	numberOfCombinations = numberOfCombinations * n;
	n -= 1;
}
while ( n > 0);
document.write("Количество различных вариантов доставки товара равно : " + numberOfCombinations);