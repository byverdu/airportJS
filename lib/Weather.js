function Weather(){

	(this.prediction = function(){
	
			var cases = ['Sunny','Stormy','Cloudy'];
	
			var value = Math.floor(Math.random()*cases.length);
	
			return  cases[value]
		})()
}


module.exports = Weather;