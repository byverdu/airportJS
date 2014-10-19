var Plane   = require('../lib/Plane')

var plane   = new Plane();

function Airport (name) {
	this.name     = name;
	this.capacity = 20;
	this.hangar   = [];
}

Airport.prototype.connecting_plane = function(plane) {
	plane.location = this.name
}

Airport.prototype.trackField_ready = function(plane) {
	this.hangar.push(plane);
	this.capacity = (this.capacity-1);
	this._checkCapacity()
}

Airport.prototype._checkCapacity = function() {
	if(this.capacity===0){ throw "We are full"}
}


module.exports = Airport;

//function pex(number){if(number<10) console.log("hello"); else{throw "hell"} }