/*2. Write a function that removes all elements with a given value
	* var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
    * arr.remove(1); // arr = [2, 4, 3, 4, 111, 3, 2, "1"];
   
   * Attach it to the array object
   * Read about `prototype` and how to attach methods*/
(function() {
	window.isEqual = function(a, b) {
		if (!(a instanceof Object) && !(b instanceof Object)) {
			if (a !== b)
				return false;
			else
				return true;
		}
		else if ((a instanceof Object) && (b instanceof Object)) {
			var p, t;
			for (p in a) {
				if (typeof b[p] === 'undefined') {
					return false;
				}
				if (b[p] && !a[p]) {
					return false;
				}
				t = typeof a[p];
				if (t === 'object' && !isEqual(a[p], b[p])) {
					return false;
				}
				if (t === 'function' && (typeof b[p] === 'undefined' || a[p].toString() !== b[p].toString())) {
					return false;
				}
				if (a[p] !== b[p]) {
					return false;
				}
			}
			for (p in b) {
				if (typeof a[p] === 'undefined') {
					return false;
				}
			}
			return true;
		}
	}

}).call(this);




Array.prototype.remove = function(value) {
	var i,n = this.length;
	for (i = 0; i < this.length; i++) {
		if (isEqual(this[i],value)) {
			this.splice(i,1);
			i--;
		}
	}
}

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1',
			{	
				x: 10,
				y: 15
			},
			{
				y: 15,
				x: 10
			},
			{
				x: 10,
				y: 15,
				z: 20
			}
		  ],
	arr1,
 	i,
 	value1 = '1',
 	value2 = 1,
 	value3 = 111,
 	value4 = {
 		x: 10,
 		y: 15,
 	};

arr1 = arr.slice(0,arr.length);
console.log('Исходный массив :');
for (i = 0; i < arr1.length; i++) {
		console.log(arr1[i]);
}
console.log('Значение, которое надо удалить из массива : ');
console.log(value1);
arr1.remove(value1);
console.log('Массив после удаления :');
for (i = 0; i < arr1.length; i++) {
	console.log(arr1[i]);
}
console.log('Значение, которое надо удалить из массива : ');
console.log(value2);
arr1.remove(value2);
console.log('Массив после удаления :');
for (i = 0; i < arr1.length; i++) {
	console.log(arr1[i]);
}
console.log('Значение, которое надо удалить из массива : ');
console.log(value3);
arr1.remove(value3);
console.log('Массив после удаления :');
for (i = 0; i < arr1.length; i++) {
	console.log(arr1[i]);
}
console.log('Значение, которое надо удалить из массива : ');
console.log(value4);
arr1.remove(value4);
console.log('Массив после удаления :');
for (i = 0; i < arr1.length; i++) {
	console.log(arr1[i]);
}