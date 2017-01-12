function min(a, b) {
		if (!a && !b)
			return 0;
		else
			if (a >= b)
				return b;
			else if (a < b)
				return a;
			else
				return 0;
}

console.log(min());
console.log(min(1, 3));
console.log(min(3));
console.log(min(5, 3));
console.log(min(-5, 3));

function recurs_chetn(x) {
	if (x === 0)
		return true;
	else if (!x || x < 0)
		return x;
	else if (x === 1)
		return false;
	else return recurs_chetn(x-2);
}

console.log('Recursiya');
console.log(recurs_chetn(0));
console.log(recurs_chetn(50));
console.log(recurs_chetn(75));
console.log(recurs_chetn(-1));

function countBs(str) {
	var count = 0;
	var char = 'B';
	for (var i = 0; i < str.length; i++) {
		if (str[i] == char)
			++count;
	}
	return count;
}

console.log(countBs("We count number B. B. Test B for my functionB"));
console.log(countBs("We Bcount number B. B. Test B for my functionB"));
console.log(countBs("We Bcount numBber B. B. TBest B for my functionB"));
