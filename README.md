# AirportJS


Recreation of the [third challenge](https://github.com/byverdu/airport) at Makers but this time using Javascript. Consist in describe how an Airport interacts with planes.

## Objectives

1. Interaction between javascript objects.
2. Build using TDD

## Technologies used

1. NodeJS
2. Mocha
3. Chai

## How to run the test

1. `> clone https://github.com/byverdu/airportJS.git`
2. `> cd airportJS`
3. `> mocha`

## How to use it

1. `> clone https://github.com/byverdu/airportJS.git`
2. `> cd airportJS`
3. `> node`

```javascript
> var Airport = require('./lib/Airport');
> var Plane   = require('../lib/Plane')
> var Weather = require('../lib/Weather');

> vueling = new Plane('Vueling') // vueling.status = 'flying'
> gatwick = new Airport('Gatwick')

> // Airport methods
> gatwick.name     = 'Gatwick';
> gatwick.capacity = 20;
> gatwick.hangar   = [];
> gatwick.weather  = this.checkWeather(); // Calls new Weather().prediction();

> // Objects Interaction
> gatwick.track_ready_toLand(vueling)

> // Checks
> gatwick.weather  === 'Sunny'
> gatwick.capacity !== 0

> // Sets
> vueling.location = gatwick.name 
> vueling.status   = 'landed'

> gatwick.track_ready_toTakeOff(vueling)

> // Sets
 > vueling.status   = 'flying again'
```













