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


module.exports = Airport;