function forEach(mas, action) {
	for (var i = 0; i < mas.length; i++) {
			action(mas[i]);
		}	
}

forEach(['Tili', 'trali', ' Vali', 100], console.log)
var sum = 0;
forEach([1,2,3,4,5,6], function (arg) {
	sum += arg;
})

console.log(sum);

[1,2,3,4,5].forEach(function (arg, val) {
	console.log(arg, val);
});