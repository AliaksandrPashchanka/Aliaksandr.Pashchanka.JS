/* Task 5. IIFE Make the function conc immediately-invoked function expression  */
var str1 = '12',
	str2 = '34',
	conc = (function (a,b) {
	var a = a || '',
		b = b || '';
		return a.toString() + b.toString();
}(str1,str2));

console.log(conc);