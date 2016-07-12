/* Task 2. FDE Create function comp which should compare two parameters a and b and return 1 if a equal b and -1 
if a not equal b using Function Definition Expression (FDE). Call this function before its declaration. Test Data: a = "abc",
b = "abc", result = 1 a = "abC", b = "abc", result = -1  */


var str1 = 'abc',
	str2 = 'abc',
	str3 = 'abC',
	str4 = 'abc';

//At this moment we can't call comp like a function, cause comp isn't a function. It's just a varioble with undefined type.
//console.log(comp(str1,str2));
//console.log(comp(str3,str4));



var comp = function(a,b) {
	var a = a || '',
		b = b || '';
	return (a === b) ? 1 : -1;
}
console.log(comp(str1,str2));
console.log(comp(str3,str4));