/* ﻿Task 1.

Create a function constructor for Person. Each Person must have:
1. properties firstname, lastname and age
	1.1. firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
	1.2. age must always be a number in the range (0, 150), inclusive
		1.2.1. the setter of age can receive a convertible-to-number value
	1.3. if any of the above is not met, throw Error
	
2. property fullname
	2.1. the getter returns a string in the format 'FIRST_NAME LAST_NAME'
	2.2. the setter receives a string is the format 'FIRST_NAME LAST_NAME'
		2.2.1. it must parse it and set firstname and lastname
		
3. method introduce() that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'

4. all methods and properties must be attached to the prototype of the Person
*/
//-----------------------CHECK FUNCTIONS---------------------------------------------------------------------------------------------------------------------
function firstNameCheck(value) {
	var wrongSymbols = /[0-9\W_]+/gi;
	if (typeof(value) !== 'string') {
		return 'Firstname is not a string!';
	} else {
		if (wrongSymbols.test(value)) {
			return 'Invalid characters! Firstname must consist of only Latin letters.';
		} else if(value.length < 3 || value.length > 20) {
			return 'Firstname must consist of 3 - 20 symbols!';
		} else {
			return true;
		}
	}
}

function lastNameCheck(value) {
	var wrongSymbols = /[0-9\W_]+/gi;
	if (typeof(value) !== 'string') {
		throw 'Lastname is not a string!';
	} else {
		if (wrongSymbols.test(value)) {
			throw 'Invalid characters! Lastname must consist of only Latin letters.';
		} else if(value.length < 3 || value.length > 20) {
			throw 'Lastname must consist of 3 - 20 symbols!';
		} else {
			return true;
		}
	}

}

function ageCheck(value) {
	if ( ((typeof(value) === 'number') && (!isNaN(value))) || ( (typeof(value) === 'string') && (!isNaN(+(value))))) {
		if ((+(value) >= 0) && (+(value) <= 150)) {
			return true;
		} else {
			return 'Age must be in range [0 ... 150]'
		}
	} else {
		return 'Age is not a number';
	}

}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------CONSTRUCTOR------------------------------------------------------------------------------------------------------------------

function Person(firstname, lastname, age) {
  	if (typeof(firstNameCheck(firstname)) !== 'string') {
    	this.firstname = firstname;
    }
    else {
    	throw firstNameCheck(firstname);
    }
  	if (typeof(lastNameCheck(lastname)) !== 'string') {
    	this.lastname = lastname;
    }
    else {
    	throw lastNameCheck(lastname);
    }
  	if (typeof(ageCheck(age)) !== 'string') {
    	this.age = age;
    }
    else {
    	throw ageCheck(age);
    }

	Object.defineProperty(this, 'firstname', {
    	get: function() {
      		return firstname;
    	},
   		set: function(value) {
      		if (typeof(firstNameCheck(value)) !== 'string') {
      			firstname = value;
      		}
      		else {
      			throw firstNameCheck(value);
      		}
    	}
  	});
 	Object.defineProperty(this, 'lastname', {
    	get: function() {
      		return lastname;
    	},
   		set: function(value) {
      		if (typeof(lastNameCheck(value)) !== 'string') {
      			lastname = value;
      		}
      		else {
      			throw lastNameCheck(value);
      		}
    	}
  	});
  	Object.defineProperty(this, 'age', {
    	get: function() {
      		return age;
    	},
   		set: function(value) {
      		if (typeof(ageCheck(value)) !== 'string') {
      			age = value;
      		}
      		else {
      			throw ageCheck(value);
      		}
    	}
  	});
  	Object.defineProperty(this, 'fullname', {
    	get: function() {
      		return firstname + ' ' + lastname;
    	},
   		set: function(value) {
      		if (typeof(value) === 'string') {
      			value = value.split(' ');
      			if (typeof(firstNameCheck(value[0])) !== 'string') {
      				firstname = value[0];
      			}
      			else {
      				throw firstNameCheck(value[0]);
      			}
      			if (typeof(lastNameCheck(value[1])) !== 'string') {
      				lastname = value[1];
      			}
      			else {
      				throw lastNameCheck(value[1]);
      			}

      		}
      		else {
      			throw 'check your input data, it\'s not a string.It must be \'FIRST_NAME LAST_NAME\'';
      		}
    	}
  	});
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------INTRODUCE-----------------------------------------------------------------------------------------------------------------------------
Person.prototype.introduce = function() {
	return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + ' years-old';
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------
