/*7. Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]` and extracts from it the `[protocol]`, `[server]` and `[resource]` elements. Return the elements in a JSON object.

    For example from the URL `http://www.tut.by/forum/index.php` the following information should be extracted:
    
    
    {
        protocol: "http",
        server: "www.tut.by",
        resource: "/forum/index.php"
    }*/
function parseUrl(str) {
	var arr = str.split(/(.*):\/\/(.*?)(\/.*)/);
		if (typeof(arr[1]) !== 'undefined') {
			return {
				protocol: arr[1],
				server: arr[2],
				resource: arr[3]
			};
		}
		else {
			arr = str.split(/(.*):\/\/(.*?)/);
			return {
				protocol: arr[1],
				server: arr[3],
				resource: arr[2]
			};
		}
}

var str = 'http://www.tut.by/forum/index.php',i,key,parseStr;
parseStr = parseUrl(str);
console.log(parseStr);

str = 'http://www.google.com';
parseStr = parseUrl(str);
console.log(parseStr);