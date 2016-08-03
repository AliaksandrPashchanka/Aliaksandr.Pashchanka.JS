/* 5. Write a function that groups an array of persons by age, first or last name. The function must return an associative array, with keys - the groups,
 and values -arrays with persons in this groups. Use function overloading (i.e. just one function).

   var persons = { ... };
   var groupedByFirstName = group(persons, "firstname");
   var groupedByAge = group(persons, "age");*/

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortBy(obj,key) {
	var newObj = [],n =0,str = '',j;
	for (i = 0; i < obj.length; i++) {
		if (str.indexOf(obj[i]['groupName']) == -1)
			str += obj[i]['groupName'] + ' ';
	}
	str = str.slice(0,str.length -1);
	str = str.split(' ');
	str.sort();
	for (i = 0; i < str.length; i ++) {
		newObj[i] = {
			groupName: str[i],
			arrayOfPersons: []
		};
	}
	for (i = 0; i < obj.length; i++) {
		for (j = 0; j < str.length; j++) {
			if (obj[i]['groupName'] === str[j])
				newObj[j]['arrayOfPersons'].push(obj[i]);
		}
	}
	if (key === 'age') {
		for (i = 0; i < newObj.length; i++) {
			newObj[i]['arrayOfPersons'].sort(function(a,b) {
				return (a['age'] - b['age']);
			});
		}

	}
	if (key === 'firstname') {
		for (i = 0; i < newObj.length; i++) {
			newObj[i]['arrayOfPersons'].sort(function(a,b) {
				if (a['firstName'] > b['firstName'])
					return 1;
				if (a['firstName'] < b['firstName'])
					return -1;
				if (a['firstName'] === b['firstName']) 
					return 0;
			});
		}
	}
	if (key === 'lastname') {
		for (i = 0; i < newObj.length; i++) {
			newObj[i]['arrayOfPersons'].sort(function(a,b) {
				if (a['lastName'] > b['lastName'])
					return 1;
				if (a['lastName'] < b['lastName'])
					return -1;
				if (a['lastName'] === b['lastName']) 
					return 0;
			});
		}
	}
	return newObj;
}


var firstNames = ['Александр','Алексей','Андрей','Евгений','Пётр','Дмитрий','Иван','Кирил'], 
	lastNames = ['Петров','Иванов','Сидоров','Алексеев','Помидоров','Огурцов','Тищенко'],
	groups = ['A','B','C'],
	persons = [],
	i,key,arr,
	n = +prompt('Введите количество персон : ','10');
while ((n<=0) || (isNaN(n))) {
	n = +prompt('Введённое количество персон некорректно. Введите количество персон : ','10');
}
console.log('Исходный массив персон');
for (i = 0; i < n; i++) {
	persons[i] = {
		firstName: firstNames[getRandom(0,7)],
		lastName: lastNames[getRandom(0,6)],
		age: getRandom(18,40),
		groupName: groups[getRandom(0,2)]
	};
}

//document.write('List of all persons :</br>');
//console.log(persons);
for (i = 0; i < persons.length; i++) {
	//for (key in persons[i]) {
		//document.write(key + ' : ' + persons[i][key] + '</br>');
		console.log(persons[i]);
	//}
}
arr = sortBy(persons,'age');
console.log('Отсортировано по возрасту');
for (i = 0; i < arr.length; i++) {
		console.log(arr[i]['groupName']);
		console.log(arr[i]['arrayOfPersons']);
}
arr = sortBy(persons,'firstname');
console.log('Отсортировано по имени');
for (i = 0; i < arr.length; i++) {
		console.log(arr[i]['groupName']);
		console.log(arr[i]['arrayOfPersons']);
}

arr = sortBy(persons,'lastname');
console.log('Отсортировано по фамилии');
for (i = 0; i < arr.length; i++) {
		console.log(arr[i]['groupName']);
		console.log(arr[i]['arrayOfPersons']);
}

