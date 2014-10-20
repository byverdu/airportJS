var Airport = require('../lib/Airport');

 // var gatwick = new Airport();

function Plane(name){
	this.name     = name;
	this.location = undefined;
	this.status   = 'flying'
}

Plane.prototype._changeStatus = function() {
	if (this.location != undefined) this.status = 'landed'
	if (this.location === null)     this.status = 'flying again'
}


module.exports = Plane;