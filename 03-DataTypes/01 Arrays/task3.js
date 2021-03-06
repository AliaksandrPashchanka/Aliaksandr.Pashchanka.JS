/* 3. Write a script that finds the maximal sequence of equal elements in an array.

    **Example:** [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] -> [2, 2, 2].*/
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var n = +prompt('Введите размер массива','10'),
	arr1 = [],
	arr2 = [],
	i,j,start,end,count,
	m = 0,
	maxCount = 0;
while ((isNaN(n)) || (n <=0)) {
	n = +prompt('Некорректный размер массива. Введите размер массива : ' , '10')
}	

for (i=0; i < n; i++)
	arr1[i] = getRandom(1,10);
for (i = 0; i < n; i++) {
	count = 0;
	j = i;
	while ((arr1[i] == arr1[j]) & (j < n)) {
		if ((count) > maxCount) {
			arr2 = [];
			maxCount = count;
			arr2[0] = {
				start: i,
				end : j
			};
			m = 1;
		}
		else if ((count) == (maxCount)) {
			arr2[m] = {
				start: i,
				end : j
			};
			m++;
		}
		j++;
		count++;
	}
}
document.write('Введённый размер массива : ' + n + '</br>');
for (i = 0; i < n; i++)	{
	document.write(' ' + arr1[i]);
}
document.write('</br>Наибольшая последовательность повторяющихся элементов: ');
if (maxCount) {
	document.write('</br>');
	for (i = 0; i < arr2.length; i++) {
		for (j = arr2[i].start; j <= arr2[i].end; j++) {
			document.write(arr1[j] + ' ');
		}
		document.write('</br>');
	}
}
else {
	document.write('Последовательности нету');
}
