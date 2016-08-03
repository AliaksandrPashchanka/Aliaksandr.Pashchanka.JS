/*3. Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

    **Example**: The target substring is **"in"**. The text is as follows: We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.

    The result is: 9.*/

function getCountSubStringInString(str,subStr) {
	var count = str.match(new RegExp(subStr, 'gi'));
	if (count && count.length)
		return count.length;
	else
		return 0;
}
var str = 'We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We do not have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.',
	subStr;
	
subStr = 'in';	
document.write('Исходная строка : ' + str + ' </br>');
document.write('Подстрока : ' + subStr + '</br>');
document.write('Количество вхождение подстроки в строку :' + getCountSubStringInString(str,subStr) + ' </br>');
subStr = 'we';	
document.write('Исходная строка : ' + str + ' </br>');
document.write('Подстрока : ' + subStr + '</br>');
document.write('Количество вхождение подстроки в строку :' + getCountSubStringInString(str,subStr) + ' </br>');
subStr = 'submar';	
document.write('Исходная строка : ' + str + ' </br>');
document.write('Подстрока : ' + subStr + '</br>');
document.write('Количество вхождение подстроки в строку :' + getCountSubStringInString(str,subStr) + ' </br>');