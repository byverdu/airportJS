var expect  = require('chai').expect
var Airport = require('../lib/Airport')
var Plane   = require('../lib/Plane')

var gatwick;

before(function(){
	gatwick = new Airport("Gatwick")
});

describe('Airport', function() {
 	
 	context('When is initialized', function(){

 		it('Has a name', function() {
 			expect(gatwick.name).to.eq('Gatwick')
 		});

 		it('has a default capacity of 20', function() {
 			expect(gatwick.capacity).to.eq(20)
 		});

 		it('has an hangar for store planes', function() {
 			expect(gatwick.hangar).to.eql([])
 		});
 	});
 }); 