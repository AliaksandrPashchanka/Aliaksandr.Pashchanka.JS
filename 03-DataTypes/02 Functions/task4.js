/* 4. Write a function to count the number of divs on the web page */

function divCount() {
	return document.getElementsByTagName('div').length;
}

document.write('Количество div на странице : ' + divCount());