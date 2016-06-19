var n = +prompt("Введите количество товаров : ","10"),
numberOfCombinations = 1;
do {
	numberOfCombinations = numberOfCombinations * n;
	n -= 1;
}
while ( n > 0)
document.write("Количество различных вариантов доставки товара равно : " + numberOfCombinations);