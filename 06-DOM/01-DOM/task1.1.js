/*----------------------------------------------------------------------------------------------------------------	
1. Write a script that selects all the div nodes that are directly inside other div elements
    * Create a function using querySelectorAll()
    * Create a function using getElementsByTagName()
*/
function selectElementByQuertSelector(selector) {
	var result = document.querySelectorAll(selector);
	console.log('Count of elements, that was selected by your selector (\'' + selector + '\') using querySelectorAll() = ' + result.length);

}
function selectElementByGetElementsByTagName(tagName) {
	var result = document.getElementsByTagName(tagName);
	var i=0, count=0;
	tagName = tagName.toUpperCase();
	for (i = 0; i < result.length;i ++) {
		if (result[i].parentElement.nodeName === tagName) {
			count ++;
		}
	}
	console.log('Count of elements, with name (\'' + tagName + '\') using getElementsByTagName() = ' + count);
}
selectElementByQuertSelector('div > div');
selectElementByGetElementsByTagName('div');