function range(a, b, step) {
	var mas = [];
	if (!step) step = 1;
	console.log(step);
	for (var i = 0; Math.abs(i*step) <= Math.abs(b-a); i++)
		mas[i] = a + i*step;
	return mas;
}

function sum(mas) {
	return (mas[mas.length-1]+mas[0])*mas.length/2;
}

console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(range(1,10, 2));
console.log(range(1,10, -1));
console.log(range(10,1, -1));
console.log(range(5,2, -1));
console.log(sum(range(1,10)) == 55);

console.log('-------------Reverse--------------')
function reverseArray(mas) {
	var mas2 = [];
	for (var i = 0; i < mas.length; i++) {
		mas2[i] = mas[mas.length-1 - i];
	}
	return mas2;
}
function reverseArrayInPlace(mas) {
	for (var i = 0; i < mas.length/2; i++) {
		temp = mas[i];
		mas[i] = mas[mas.length-1 - i];
		mas[mas.length-1 - i] = temp;
	}
}
console.log(reverseArray(["A", "B", "C"]));
var arrV = [1,2,3,4,5];
reverseArrayInPlace(arrV);
console.log(arrV);

console.log('-------------List--------------')
var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: {
				value: 4,
				rest: list
			} 
		}
	}
}

var list1 = {value: 0, rest: list}, list2 = {value: -1, rest: list};
// console.log(list2);

function arrayToList(mas) {
	var list = null;
	for (var i = mas.length - 1; i >= 0; i--) 
		list = { value: mas[i], rest: list }
	return list;
}
function listToArray(list) {
	var mas = [];
	var i = 0;
	while (list != null){
		mas[i++] = list.value;
		list = list.rest;
	}
	return mas;
}

function show(list) {
	while (list != null){
		console.log('value: ' + list.value);	
		list = list.rest;
	}
}
var list = arrayToList([1,2,3,4,5])
show(list);
console.log(list)
console.log(listToArray(list));

function prepend(val, list) {
	return {value: val, rest: list};
}

function nth(list, index) {
	var i = 0;
	while (list != null){
		if (i++ == index)
			return list.value;
		list = list.rest;
	}
}

function nth_rec(list, index, i) {
	if (!i) i = 0;
	if (index == i)
		return list.value;
	else if (list.rest != null)
		return nth_rec(list.rest, index, ++i);
}

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth_rec(arrayToList([10, 20, 30]), 2));

function deepEqual(val1, val2) {
	if (typeof val1 == typeof val2 && typeof val1 == 'object') {
		for(v in val1)
			if (!deepEqual(val1[v], val2[v]))
				return false;
		return true;
	}
	else 
		return val1 === val2;
	return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(1, 3));
console.log(deepEqual("tr", "tr"));
console.log(deepEqual(null, null));
console.log(deepEqual("tr", null));




























