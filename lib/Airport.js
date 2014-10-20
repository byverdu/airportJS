var Plane   = require('../lib/Plane')

var plane   = new Plane();

function Airport (name) {
	this.name     = name;
	this.capacity = 20;
	this.hangar   = [];
}

Airport.prototype._connecting_plane = function(plane) {
	plane.location = this.name
}

Airport.prototype._acceptingPlane = function(plane) {
	this.hangar.push(plane);
	this.capacity = (this.capacity-1);
	plane._changeStatus();
}

Airport.prototype.track_ready_toLand = function(plane) {
	this._connecting_plane(plane);
	this._acceptingPlane(plane);
	this._checkCapacity();
}

Airport.prototype.track_ready_toTakeOff = function(plane) {

	if(plane) {this._releasingPlane(plane);}
		else this.hangar.shift()
}

Airport.prototype._releasingPlane = function(plane) {
	if(this.hangar.indexOf(plane)!== -1){
		var index = this.hangar.indexOf(plane);
		this.hangar.splice(index,1)
	}
	plane.location = null;
	plane._changeStatus();
}

Airport.prototype._checkCapacity = function() {
	if(this.capacity===0){ throw "We are full"}
}


module.exports = Airport;
