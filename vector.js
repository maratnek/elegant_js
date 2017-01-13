console.log('----------------Vector--------------------')

function Vector(x, y) {
	this.x = x;
	this.y = y;
	console.log('Vector x: ' + x + ', y: ' + y);
}

console.log(new Vector(1,0));

Vector.prototype.plus = function(vec) {
	return new Vector(this.x + vec.x, this.y + vec.y);
};

Vector.prototype.minus = function(vec) {
	return new Vector(this.x - vec.x, this.y - vec.y);
};

Object.defineProperty(Vector.prototype, "length", {
	get : function() {return Math.sqrt(this.x*this.x + this.y*this.y);}
})

console.log((new Vector(2,2)).plus(new Vector(3,3)));
console.log((new Vector(2,2)).minus(new Vector(3,3)));
console.log((new Vector(3,4)).length);
console.log((new Vector(3,4)).x);

console.log('-----------------------Sequence----------------------')

function Seq(N) {
	this.length = N;
	this.ind = 0;
}

Seq.prototype.index = function() {
	return this.ind;	
};

Seq.prototype.next = function() {
	return ++this.ind;
}

Seq.prototype.current = function(ind) {
	return this.ind;
}

Seq.prototype.end = function() {
	return this.ind == this.length;	
};

function logFile(seq) {
	while( !seq.end() && seq.index() != 5)
		console.log(seq.current(), seq.next());
}

logFile(new Seq(8));
logFile(new Seq(3));

function ArraySeq(massiv) {
	Seq.call(this, massiv.length);
	this.massiv = massiv;
}

ArraySeq.prototype = Object.create(Seq.prototype);

ArraySeq.prototype.current = function() {
	 return this.massiv[this.ind];
};

logFile(new ArraySeq([1,2]));

function RangeSeq(from, to) {
	this.raz = to - from;
	this.to = to;
	this.from = from;
	Seq.call(this, this.raz);
}


RangeSeq.prototype = Object.create(Seq.prototype);

RangeSeq.prototype.current = function() {
	 return this.ind+this.from;
};

logFile(new RangeSeq(100, 1000));

