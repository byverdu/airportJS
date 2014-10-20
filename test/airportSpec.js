var expect  = require('chai').expect
var Airport = require('../lib/Airport')
var Plane   = require('../lib/Plane')

var gatwick, vueling, heathrow, iberia;


describe('Airport', function() {

before(function(){
	gatwick = new Airport("Gatwick");
	vueling = new Plane("Vueling")
});

after(function(){
	gatwick = null;
	vueling = null;
})
 	
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

 	context("Interacting with the plane",function() {
 		it("sets the location's plane when contacts with the plane", function() {
 			gatwick._connecting_plane(vueling)
 			expect(vueling.location).to.eq(gatwick.name)
 		});

 		it('can land planes', function() {
 			gatwick.track_ready_toLand(vueling);
 			
 			expect(gatwick.hangar).to.include(vueling);
 			expect(gatwick.capacity).to.eq(19);
 		});

 		it('knows when the Airport is full', function() {
 			gatwick.capacity = 1;
 			expect(function(){ gatwick._checkCapacity() }).to.not.throw();
 			gatwick.capacity = 0;
 			expect(function(){ gatwick._checkCapacity() }).to.throw("We are full");
 		});

 		it('a plane can take off', function() {
 			gatwick.track_ready_toTakeOff()
 			expect(gatwick.hangar.length).to.eq(0);
 		});

 		it('a plane can take off by asking to the control tower', function() {
 			klm = new Plane('KLM')
 			gatwick.track_ready_toLand(vueling)
 			gatwick.track_ready_toLand(klm)
 			
 			gatwick.track_ready_toTakeOff(klm)
 			expect(gatwick.hangar).to.not.include(klm)
 		});
 	})
}); 


describe('Plane', function() {

	before(function(){

		iberia   = new Plane('Iberia');
		heathrow = new Airport('Heathrow');
	})
	
	context("When is initialized",function(){

		it('has a company name', function() {
			expect(iberia.name).to.eq('Iberia')
		});

		it('has an Airport location', function() {
			heathrow._connecting_plane(iberia);
			expect(iberia.location).to.eq(heathrow.name)
		});

	  it('has a flight status and starts flying', function() {
		expect(iberia.status).to.eq('flying');
		});

	});

	context("Interacting with the Airport",function(){

		it('changes his status after the plane lands on the Airport', function() {
		
			heathrow.track_ready_toLand(iberia)
			expect(iberia.status).to.eq('landed')

		});


		it('changes his status after the plane takes off from the Airport', function() {
			heathrow.track_ready_toTakeOff(iberia)
			expect(iberia.location).to.eq(null)
			expect(iberia.status).to.eq('flying again')

		});
	});
		


});