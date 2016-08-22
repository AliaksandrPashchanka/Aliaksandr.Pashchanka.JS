/* Task 2. FDE Create function comp which should compare two parameters a and b and return 1 if a equal b and -1 
if a not equal b using Function Definition Expression (FDE). Call this function before its declaration. Test Data: a = "abc",
b = "abc", result = 1 a = "abC", b = "abc", result = -1  */


var str1 = 'abc',
	str2 = 'abc',
	str3 = 'abC',
	str4 = 'abc';
var obj1 = {
	x : 1,
	y : 2,
	z : 3
	},
	obj2 = {
		y : 2,
		x : 1,
		z : 3
	},
	obj3 = {
		z : 3,
		x : 1,
		y : 2
	},
	obj4 = {
		y : 3,
		x : 1,
		z : 2
	};


//At this moment we can't call comp like a function, cause comp isn't a function. It's just a varioble with undefined type.
//console.log(comp(str1,str2));
//console.log(comp(str3,str4));



var comp = function(a,b) {
	var a = a || '',
		b = b || '';
	if (typeof(a) !== 'object' && typeof(b) !== 'object') {
		return (a === b) ? 1 : -1;
	}
	else {
		var p, t;
			for (p in a) {
				if (typeof b[p] === 'undefined') {
					return -1;
				}
				if (b[p] && !a[p]) {
					return -1;
				}
				t = typeof a[p];
				if (t === 'function' && (typeof b[p] === 'undefined' || a[p].toString() !== b[p].toString())) {
					return -1;
				}
				if (a[p] !== b[p]) {
					return -1;
				}
			}
		return 1;
	}
}
console.log(comp(str1,str2));
console.log(comp(str3,str4));
console.log(comp(obj1,obj1));
console.log(comp(obj1,obj2));
console.log(comp(obj1,obj3));
console.log(comp(obj1,obj4));
console.log(comp(obj2,obj4));
console.log(comp(obj3,obj4));