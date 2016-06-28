/* 6. Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags:

    ```html
    <html>
        <head>
            <title>Sample site</title>
        </head>
        <body>
            <div>text<div>more text</div>and more...</div>in body
        </body>
    </html>
    ```

    Result: `Sample sitetextmore textand more...in body`*/
function getContentFromHtml(str) {
	return str.replace(/<(.*?)>/g, '');
}

var str = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
document.write(getContentFromHtml(str) + '</br>');