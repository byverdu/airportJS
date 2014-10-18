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
	this.capacity = (this.capacity-1)
}


module.exports = Airport;