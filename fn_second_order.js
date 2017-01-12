console.log('---------------Reduce-Concat----------------');
var arrays = [[1,2,3], [4,5], [6]];
var arr = arrays.reduce(function(a, b){
	return a.concat(b);
});

console.log(arr);


console.log('---------------Raznica----------------');
function average(array) {
	function plus(a,b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var ANCESTRY_FILE = require('./ancestry');
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.filter(function (per) {
		return per.born > 1900 && per.born < 1925;
}))
console.log(ancestry.filter(function(per) {
	return per.died - per.born > 90;
}).map(function (per) {
	return per.name;
}))
function age(p) {
	return p.died - p.born;
}
function male(p) {
	return p.sex == "m";
}
function female(p) {
	return p.sex == "f";
}
console.log(average(ancestry.filter(male).map(age)))
console.log(average(ancestry.filter(female).map(age)))

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
})

console.log(byName["Philibert Haverbeke"]);

function raznica(per) {
	return per.born - byName[per.mother].born;
}


console.log(raznica(byName["Philibert Haverbeke"]));

function isExistMother(per) {
	return byName[per.mother];
}
function min(a, b) {
	if ( a < b )
		return a;
	return b;
}
function max(a, b) {
	if ( a < b )
		return b;
	return a; 
}

console.log(ancestry.filter(isExistMother).map(raznica));
console.log(ancestry.filter(isExistMother).map(raznica).reduce(min));
console.log(ancestry.filter(isExistMother).map(raznica).reduce(max));
// console.log(ancestry.map().reduce(max));
console.log(average(ancestry.filter(isExistMother).map(raznica)));

function massiv(array){
	var new_arr = {};
	array.forEach(function(p) {
		if(!new_arr[p[0]])
			new_arr[p[0]] = [p[1]];
		new_arr[p[0]].push(p[1]);
	})	
	console.log(new_arr);
	return new_arr;
};
console.log(ancestry.length);
var temp = ancestry.map(function (per) {
	milen = Math.ceil(per.died/100);
	year = per.died - per.born;
	return [ milen, year ];
});
console.log('\n');
var m = massiv(temp)
for (millen in m){
	console.log(millen, average(m[millen]));
};

var mas = [1,2,3,4,5,-1].some(function (arg) {
	console.log(arg);
	return arg > -2;
})

console.log(mas);























