/* 4. Write a function that finds the youngest person in a given array of persons and prints his/hers full name
   * Each person has properties `firstName`, `lastName` and `age`, as shown:
   var persons = [
     { firstName : "Gosho", lastName: "Petrov", age: 32 },
     { firstName : "Bay", lastName: "Ivan", age: 81 }
     ...
   ];*/

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getYoungestPerson(obj) {
	var key,keyOfYoungestPerson = [];
	i,j = 0,minAge =100;
	for (i = 0; i < obj.length; i++){
		if (obj[i]['age'] < minAge) {
			keyOfYoungestPerson = [];
			minAge = obj[i]['age'];
			keyOfYoungestPerson[0] = i;
			j = 1;
		}
		else if (obj[i]['age'] == minAge) {
			keyOfYoungestPerson[j] = i;
			j++;
		}
	}
	return keyOfYoungestPerson;
}


var firstNames = ['Александр','Алексей','Андрей','Евгений','Пётр','Дмитрий','Иван','Кирил'], //7
	lastNames = ['Петров','Иванов','Сидоров','Алексеев','Помидоров','Огурцов','Тищенко'],	//6
	persons = [],
	i,key,
	youngestPerson,
	n = +prompt('Введите количество персон : ','10');
while ((n<=0) || (isNaN(n))) {
	n = +prompt('Введённое количество персон некорректно. Введите количество персон : ','10');
}
for (i = 0; i < n; i++) {
	persons[i] = {
		firstName: firstNames[getRandom(0,7)],
		lastName: lastNames[getRandom(0,6)],
		age: getRandom(10,65)
	}
}

youngestPerson = getYoungestPerson(persons);

document.write('List of all persons :</br>');
for (i = 0; i < persons.length; i++) {
	for (key in persons[i]) {
		document.write(key + ' : ' + persons[i][key] + '</br>');
	}
}
document.write('Youngest person is : ');
for (i =0; i < youngestPerson.length; i++)
  document.write('</br>' + persons[youngestPerson[i]]['firstName'] + ' ' + persons[youngestPerson[i]]['lastName']);