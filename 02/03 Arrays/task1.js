/*Task 1
Требуется: Создать массив размерностью N элементов, заполнить его произвольными целыми значениями. 
Вывести наибольшее значение массива, наименьшее значение массива, общую сумму элементов, среднее арифметическое всех элементов, 
вывести все нечетные значения. */
function getRandomInt(max) {
  return (Math.floor(Math.random() * (max)) + 1);
}
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}



var arrayLength = +prompt("Введите размер массива : ", "10"),
	arr = new Array(arrayLength),
	sumOfArray = 0;

for (var i = 0; i < arr.length; i++)
	arr[i] = getRandomInt(100);
document.write("Сгенерированный массив чисел : " + arr);
document.write("</br>Наибольшее значение массива : " + getMaxOfArray(arr));
document.write("</br>Наименьшее значение массива : " + getMinOfArray(arr));
for (var i =0; i < arr.length; i++)
	sumOfArray += arr[i];
document.write("</br>Общая сумма элементов массива равна : " + sumOfArray);
document.write("</br>Среднее арифметическое всех элементов массива равно : " + (sumOfArray/arrayLength));
document.write("</br>Все нечётные элементы массива :");
for (var i =0; i < arr.length; i++) {
	if (arr[i] % 2)
		document.write(" " + arr[i]);
}

