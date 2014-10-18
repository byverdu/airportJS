var expect  = require('chai').expect
var Airport = require('../lib/Airport')
var Plane   = require('../lib/Plane')

var gatwick, vueling;

before(function(){
	gatwick = new Airport("Gatwick");
	vueling = new Plane("Vueling")
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

 	context("sets the location's plane when contacts with the plane",function() {
 		it('sets the location', function() {
 			gatwick.connecting_plane(vueling)
 			expect(vueling.location).to.eq(gatwick.name)
 		});
 	})
}); 


describe('Plane', function() {
	
	it('has a company name', function() {
		expect(vueling.name).to.eq('Vueling')
	});

	it('has an Airport location', function() {
		expect(vueling.location).to.eq(gatwick.name)
	});

});