var protoRabbit = {
	speak: function (line) {
		console.log('The ' + this.type + " raddit says '" + line + "'.");
	}
}

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak('SKREEEE!');

function Rabbit(type) {
	this.type = type;
	this.speak = protoRabbit.speak;
}

var killerR = new Rabbit('killer');
var blackR = new Rabbit('black');

killerR.speak('killer new');
blackR.speak('black R');

console.log('---------------Table_Formating-----------------')

function rowHeights(rows) {
	return rows.map(function (row) {
		return row.reduce(function (max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0)
	})
}

function colWidths(rows) {
	return rows[0].map(function (_, i) {
		return rows.reduce(function (max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0)
	})
}

// draw table
function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLine(blocks, lineNo) {
		return blocks.map(function (block) {
			return block[lineNo];
		}).join(" ");
	}
	function drawRow(row, rowNum) {
		var blocks = row.map(function (cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		})
		return blocks[0].map(function (_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n");
	}
	return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++)
		result += string
	return result;
}

function TextCell(text) {
		this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function (width, line) {
		return Math.max(width, line.length);
	}, 0)
};

TextCell.prototype.minHeight = function () {
	return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
}

<<<<<<< HEAD
function row_init() {
	var rows = [];
	for (var i = 0; i < 5; i++) {
		var row = [];
		for (var j = 0; j < 5; j++) {
			if ((j+i) % 2 == 0)
				row.push(new TextCell("##"));
			else
				row.push(new TextCell('  '));
		}	
		rows.push(row);
	}
	return rows;
}

console.log(drawTable(row_init()));
var mountains = require('./mountain');
console.log(drawTable(mountains));
=======
var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j+i) % 2 == 0)
			row.push(new TextCell("##"));
		else
			row.push(new TextCell("  "));
	}	
	rows.push(row);
}
var mountains = require('./mountain')
console.log(mountains);
// console.log(drawTable(mountains));

function UnderlinedCell(inner) {
	this.inner = inner;
};

UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth;
}

UnderlinedCell.prototype.minHeight = function() {
	return this.inner.minHeight + 1;
}

UnderlinedCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1)
		.concat([repeat("-", width)]);
}

function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			return new TextCell(String(row[name]));
		});
	});
	return [headers].concat(body);
}

console.log(drawTable(dataTable(mountains)));


var pipe = {
	elem : ["first", "second", "third"],
	get height() {
		return this.elem.length;
	},
	set height(val) {
		console.log('Push val ignore.' + val);
	}
}

console.log(pipe.height);

pipe.height = 100;

function RTextCell(text) {
	TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(repeat(" ", width - line.length) + line);
	}
	return result;
};

function dataTableNew(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name];

			if (typeof value == "number")
				return new RTextCell(String(value));
			else
				return new TextCell(String(value));
		});
	});
	return [headers].concat(body);
}

console.log('---------------Table New----------------');
console.log(drawTable(dataTableNew(mountains)));


>>>>>>> 19cea7cc1fc93047fabdae2727d61a83981f3a8a





