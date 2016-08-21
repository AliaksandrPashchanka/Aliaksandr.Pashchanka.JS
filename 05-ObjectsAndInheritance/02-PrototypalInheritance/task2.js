/*﻿Task 2.

Create an object "domElement", that has the following properties and methods:
  1. Use prototypal inheritance, without function constructors
  
  2. Method "init()" that gets the __domElement__ type
    2.1. i.e. "Object.create(domElement).init('div');"
	
  3. Property type that is the type of the __domElement__
    3.1. a valid type is any non-empty string that contains only Latin letters and digits
	
  4. Property "innerHTML" of type string
    4.1. gets the __domElement__, parsed as valid HTML:
      <type attr1="value1" attr2="value2" ... > ... content / children's.innerHTML</type>

	4.2. attributes must be sorted in ascending alphabetical order by their name, not in the order they were added
	
  5. Property "content" of type string
    5.1. sets the content of the element
    5.2. works only if there are no children
	
  6. Property "attributes"
    6.1. each attribute has name and value
    6.2. a valid attribute has a non-empty string for a name that contains only Latin letters and digits or dashes "-"
	
  7. Property "children"
    7.1. each child is a __domElement__ or a string
	
  8. Property "parent"
    8.1. parent is a __domElement__
	
  9. Method "appendChild(domElement / string)"
    9.1. appends to the end of children list
	
  10. Method "addAttribute(name, value)"
    10.1. "throw Error" if type is not valid
	
  11. Method "removeAttribute(attribute)"
    11.1. "throw Error" if attribute does not exist in the domElement
~~~~~~~~~~~~~
Example:

  var meta = Object.create(domElement)
    .init('meta')
    .addAttribute('charset', 'utf-8');

  var head = Object.create(domElement)
    .init('head')
    .appendChild(meta)

  var div = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'font-size: 42px');

  div.content = 'Hello, world!';

  var body = Object.create(domElement)
    .init('body')
    .appendChild(div)
    .addAttribute('id', 'myid')
    .addAttribute('bgcolor', '#012345');

  var root = Object.create(domElement)
    .init('html')
    .appendChild(head)
    .appendChild(body);

  console.log(root.innerHTML);
~~~~~~~~~~~~
Outputs:
<html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="myid"><div style="font-size: 42px">Hello, world!</div></body></html>
*/



var domElement = {
	//---------------INIT method--------------------------------------------------------------------------------	
	init: function(type) {
		var that = this;
		var typeRegExp = new RegExp('^[a-z0-9]+$', 'i');
		//----------CHECK FOR VALID TYPE OF domeElement----------------------------------------------------------
		if (typeRegExp.test(type)) {
			that.type = type;
			//-------------------------INNERHTML PROPERTY---------------------------------------------------------------
			Object.defineProperty(this, 'innerHTML',{ 
				get: function() {
					var attrs = '';
					var childs = '';
					var content = (that.childrens.length === 0 ) ? that.content : '';
					//---------sort attributes--------------------------------------------
					if (that.attributes.length) {
						that.attributes.sort(function(a,b){
							if (a.name > b.name)
								return 1;
							if (a.name < b.name)
								return -1;
							if (a.name === b.name) 
								return 0;
						});
					}
					//-----------------------end of sort-------------------------------------
					for (var i =0; i < that.attributes.length; i++) {
						attrs += ' ' + that.attributes[i].name + '="' + that.attributes[i].value +'"';
					}
					if (typeof(that.childrens) === 'object') {
						for (var i=0; i < that.childrens.length; i++) {
							childs += that.childrens[i].innerHTML;
						}
					} else {
						childs += that.childrens;
					}
					var str = '<' + that.type + attrs + '>' + content + childs + '</' + that.type + '>'
					return str; 
				}
				//-------------------------END OF INNERHTML PROPERTY----------------------------------------------------------------------------------
			});
			//------------------------END OF INNER METHOD--------------------------------------------------------------------------------------			
		//----------content of this domLement--------------------------------------------
		that.content = '';
		//--------array with attributes of this domElement-------------------------------
		that.attributes = [];
		//-----------array of childrens of this domElement-------------------------------		
		that.childrens = [];
		//-----------parrent of this domElement------------------------------------------
		that.parent = null;
		return this;
		} else {
			throw 'DomeElementType is not valid. There must contains only Latin letters and digits.';
		}
	},
	//---------------appendChild METHOD------------------------------------------------------
	appendChild: function(child) {
		child.parent = this;
		if (typeof(child) === 'object') {
			this.childrens.push(child);
		} else {
			this.childrens = child;
		}
		return this;
	},
	//------------------end of appendChild METHOD------------------------------------------------------	
	//----------------addAtribute method---------------------------------------------------------------
	addAttribute: function(key, value) {
		var attrRegExp = new RegExp('^[a-zA-Z0-9-]+$','i');
		//-----check for valid attribute name----------
		if (attrRegExp.test(key)) {
			this.attributes.push({
				name: key,
				value : value
			});
		} else {
			throw 'AttributeType is not valid. There must contains only Latin letters and digits or dashes "-".';
		}
		return this;
	},
	//------------end of addAttribute method---------------------------------------------------------
	//------------removeAttribute method-------------------------------------------------------------	

	removeAttribute: function(key) {
		var i;
		for (i = 0; i < this.attributes.length; i++) {
			if (this.attributes[i].name === key) {
					this.attributes.splice(i,1);
					return this;
			}
		}
		throw 'This attribute does not exist.';
	}
	//---------end of removeAttribute method---------------------------------------------------------------------------------------	
};


var meta = Object.create(domElement)
  .init('meta')
  .addAttribute('charset', 'utf-8');
var head = Object.create(domElement)
  .init('head')
  .appendChild(meta)
var div = Object.create(domElement)
  .init('div')
  .addAttribute('style', 'font-size: 42px');
div.content = 'Hello, world!';
var body = Object.create(domElement)
  .init('body')
  .appendChild(div)
  .addAttribute('id', 'myid')
  .addAttribute('bgcolor', '#012345');
var root = Object.create(domElement)
  .init('html')
  .appendChild(head)
  .appendChild(body);

console.log(root.innerHTML);

body.removeAttribute('id');

console.log(root.innerHTML);

body.removeAttribute('id');