/* 
Task 11. Function as a Method Create object literal Employee with the following properties: 
name: "Ann", work – function which display message "I am "+ this.name +". I am working..." in console.log. 
Test Data Employee.work() result in console "I am Ann. I am working..."    
*/
var Employee = {
	name: 'Ann',
	work: function() {
		console.log('I am ' + this.name + '. I am working...');
	}
}
Employee.work();