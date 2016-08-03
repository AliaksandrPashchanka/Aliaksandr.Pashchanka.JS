/*5. Write a function that replaces non breaking white-spaces in a text with `&nbsp;`*/
function replaceWhiteSpace(str) {
	return str.replace(/\s+/g,'&nbsp;');
}
var str = 'Q            w e     r   t 		y';
console.log(str);
console.log(replaceWhiteSpace(str));