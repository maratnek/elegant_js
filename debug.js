// function numberToString(n, base) {
//   var result = "", sign = "";
//   if (n < 0) {
//     sign = "-";
//     n = -n;
//   }
//   do {
//     result = String(n % base) + result;
//     n /= base;
//   } while (n > 0);
//   return sign + result;
// }
// console.log(numberToString(13, 10));

function promptNumber(question) {
  var result = Number(prompt(question, ""));
  if (isNaN(result)) return null;
  else return result;
}

// console.log(promptNumber("Сколько пальцев видите?"));
'use strict'
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

function MultiplicatorUnitFailure() {}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
	for (;;) {
		try {
			return primitiveMultiply(a, b);
		} catch (e){
			console.log(e);
			continue;
		}
	}
}

// console.log(reliableMultiply(8, 8));
// → 64

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Заперто!");
    return this._content;
  }
};

console.log(box.locked);

function withBoxUnlocked(body) {
	try {
		box.unlock();
		body();
	} finally {
		box.lock();
	}
}

withBoxUnlocked(function() {
  box.content.push("золотишко");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Пираты на горизонте! Отмена!");
  });
} catch (e) {
  console.log("Произошла ошибка:", e);
}
console.log(box.locked);
// → true

// console.log(box._content);