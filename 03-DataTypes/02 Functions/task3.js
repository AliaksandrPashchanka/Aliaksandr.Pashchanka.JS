/* 3. Write a function that finds all the occurrences of word in a text
    * The search can case sensitive or case insensitive
    * Use function overloading */

function keyWordSearch(str,keyWord,caseType) {
	if (caseType) {
		str = str.toLowerCase();
		keyWord = keyWord.toLowerCase();
	}
	return (str.split(keyWord).length - 1);
}


var str = prompt('Введите строку' , 'СтроСрокаСтрстрокастрострокСтрокастрока'),
	keyWord = prompt('Введите слово, которое надо найти' , 'Строка'),
	caseType = confirm('Искать без учёта регистра?');

document.write('Введённая строка : ' + str + '</br>');
document.write('Слово, которое надо найти : ' + keyWord + '</br>');
document.write('Поиск произведён : ' + (caseType ? 'без учёта регистра' : 'с учётом регистра') + '</br>');
document.write('Количество слов в строке : ' + keyWordSearch(str,keyWord,caseType));