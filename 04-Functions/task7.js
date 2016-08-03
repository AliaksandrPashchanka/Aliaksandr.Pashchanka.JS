/* Task 7. Optional Arguments Create function find(testString, test) which should return the position of test 
string in testString. If you don’t pass the second parameter use test = testString. Use Function Definition Expression. 
Test Data: testString = "abc", test ="b", result = 1 testString = "abc", result = 0 testString = "abc", test = "d", 
result = -1 testString = "abc", test="a", test2="b", result = 0  
*/
var find = function (testString, test) {
	var test = test || testString;
	//return (testString.indexOf(test) >= 0) ? testString.indexOf(test) : 'There\'s no matches';
	return testString.indexOf(test);
};
var str1 = 'abc',
	subStr1 = 'b',
	str2 = 'abc',
	str3 = 'abc',
	subStr3 = 'd',
	str4 = 'abc',
	subStr4 = 'a',
	subStr5 = 'b';
console.log(find(str1,subStr1));
console.log(find(str2));
console.log(find(str3,subStr3));
console.log(find(str4,subStr4,subStr5));

