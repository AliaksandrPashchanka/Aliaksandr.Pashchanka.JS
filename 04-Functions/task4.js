/* 
Task 4. NFE Create function fibo to calculate fibonachi numbers using named function expression  
*/
var f = function fibo(a) {
	if (a <= 0) { 
		return 0;
	}
	else if (a == 1) {
		return 1;
	}
	else {
		return fibo(a - 1) + fibo(a - 2);
	}


}

var n = +prompt('Введите количество чисел фибоначи','10'),
	i;
for (i = 1; i <= n; i++) {
	console.log(f(i));
}