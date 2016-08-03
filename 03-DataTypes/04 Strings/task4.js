/* 4. You are given a text. Write a function that changes the text in all regions:
    * `<upcase>text</upcase>` to uppercase.
    * `<lowcase>text</lowcase>` to lowercase
    * `<mixcase>text</mixcase>` to mix casing (random)
    
    **Example**: `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`
    
    The expected result: `We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.`

    Regions can be nested.*/

function mixerCase(str) {
    var result = '',i;        i;
    for (i = 0; i < str.length; i++){
    	if (Math.random() < 0.5) {
    		result += str.charAt(i).toUpperCase();
    	}
    	else {
    		result += str.charAt(i).toLowerCase();
    	}
	}
    return result;
}



function changeText(str) {
	var upCaseRegExp = new RegExp('<upcase>(.*?)<\/upcase>','g'),
		lowCaseRegExp = new RegExp('<lowcase>(.*?)<\/lowcase>','g'),
		mixCaseRegExp = new RegExp('<mixcase>(.*?)<\/mixcase>','g');;
    str = str.replace(upCaseRegExp, function (match, result) {
    	return result.toUpperCase();
    });
    str = str.replace(lowCaseRegExp, function (match, result) {
    	return result.toLowerCase();
    });
  	str = str.replace(mixCaseRegExp, function (match, result) {
    	return mixerCase(result);
    });
    return str;
}
var str = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
document.write('Исходный текс : ' + str + '</br>');
document.write('Изменённый текст : ' + changeText(str) + '</br>');