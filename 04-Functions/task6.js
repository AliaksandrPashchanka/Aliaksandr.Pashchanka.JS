/* Task 6. Arguments Object Create function parts which takes several parameters. Each parameter is a group of sentences. 
This function should extract the substring from the sign ":"(colon) to the sign "."(period) of each parameter and return 
the array of this substrings Use Function Definition Expression. Test Data: param1 = "This is the first sentence. 
This is a sentence with a list of items: cherries, oranges, apples, bananas." param2 = "This is the second sentence. 
This is a sentence with a list of items: red, blue, yellow, black." result = ["cherries, oranges, apples, bananas", "red, 
blue, yellow, black"]  */

var parts = function () {
	var result = [],
		args = Array.prototype.slice.call(arguments),
		i,j,k,str;
	for (i = 0; i < args.length; i++) {
		//console.log(args[i]);
		for (j = 0; j < args[i].length; j++) {
			str = '';
			if ((args[i][j] === ':') & ((j+2) < args[i].length) & (args[i][j+1] !== '.')) {
				j += 2;
				while ((args[i][j] !== '.') & (j < args[i].length)) {
					str += args[i][j];
					j++;
				}
				result.push(str);
			}

		}
	}
	return (result.length) ? result : 'There\'s no matches';

};

var str1 = 'This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.',
	str2 = 'This is the second sentence.This is a sentence with a list of items: red, blue, yellow, black.',
	str3 = 'This is the second sentence.This is a sentence with a list of items',
	str4 = 'This is :.';
console.log(parts(str1,str2));
console.log(parts(str2,str3));
console.log(parts(str3,str4));
