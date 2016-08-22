/* Task 1. FDS Create function conc which should concatenate two parameters a and b and return concatanating string 
using Function Declaration Statement (FDS). Call this function before its declaration. Test Data: a = "1", b = "1",
result = "11" a = 1, b = 1, result = "11"   */


console.log(conc(str1,str2));
console.log(conc(str3,str4));


function conc(a,b) {
	var a = a || '',
		b = b || '';
	return a.toString() + b.toString();
}

var str1 = '1',
	str2 = '1',
	str3 = 1,
	str4 = 1;
console.log(conc(str1,str2));
console.log(conc(str3,str4));
