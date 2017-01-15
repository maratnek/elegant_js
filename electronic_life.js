function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vec) {
	return new Vector(this.x + vec.x, this.y + vec.y);
};

function Grid(width, height) {
	this.space = new Array(height * width);
	this.height = height;
	this.width = width;
}

Grid.prototype.isInside = function(vec) {
	return vec.x >= 0 && vec.x <= this.width &&
				 vec.y >= 0 && vec.y <= this.height; 
};

Grid.prototype.set = function(vec, value) {
	this.space[vec.x + vec.y*this.width] = value;
};

Grid.prototype.get = function(vec) {
	return this.space[vec.x + vec.y*this.width];
};

console.log('---------------Test Grid--------------');

var grid = new Grid(5,5);
console.log(grid.get(new Vector(2,2)));

grid.set(new Vector(3,3), 'o');
console.log(grid.get(new Vector(3,3)));

console.log(grid.isInside(new Vector(6,6)));

var directions = {
	"n" : new Vector( 0, -1),
	"ne": new Vector( 1, -1),
	"e" : new Vector( 1,  0), 
	"se": new Vector( 1,  1),
	"s" : new Vector( 0,  1),  
	"sw": new Vector(-1,  1), 
	"w" : new Vector(-1,  0), 
	"nw": new Vector(-1, -1) 

}

function randomElement(array) {
	return array[Math.floor(Math.random()*array.length)];
}

function BouncingCritter() {
	this.direction = randomElement(Object.keys(directions));
}

BouncingCritter.prototype.act = function(view) {
	if (view.look(this.direction) != " ")
		this.direction = view.find(" ") || "s";
	return { type: "move", direction: this.direction };
};

function View() {
	
};

View.prototype.look = function(direction) {
	
};

View.prototype.find = function(direction) {
	
};

View.prototype.findAll = function() {
	return this;
};

console.log('------------------World-------------------');

function elementFromChar(legend, ch) {
	if (ch == " ")
		return null;
	var element = new legend[ch]();
	element.originChar = ch;
	return element; 
}

function World(map, legend) {
	console.log(map[0].length);
	var grid = new Grid(map[0].length, map.length);
	this.grid = grid; 
	this.legend = legend;

	map.forEach(function(line, y) {
		for (var x = 0; x < line.length; x++) {
			grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
		}
	})
	console.log(grid);
}

function charFromElement(element) {
	if (element == null)
		return " ";
	else
		return element.originChar;
}

World.prototype.toString = function() {
		var output = "";
		for (var y = 0; y < this.grid.height; y++) {
			for (var x = 0; x < this.grid.width; x++) {
				var element = this.grid.get(new Vector(x,y));
				output += charFromElement(element);
			}
			output += "\n";
		}
		return output;	
};

function Wall() {}

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var world = new World(plan, {"#": Wall, "o":BouncingCritter});
// console.log(world);
console.log(plan.length);
console.log(plan[0].length);
console.log(world.toString());








































