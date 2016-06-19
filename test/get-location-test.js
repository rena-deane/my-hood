var test = require('tape')
var getLocation = require('../lib/get-location')

var data = require('../data/location-test.json')

test('return location coordinates from the results json and returns an object', function (t){
    // arrange
    var expectedResult = { lat: -37.7674568, lng: 178.4650891 }
    // action
    var actualResult = getLocation(data)
    // assert
    t.deepEqual(actualResult, expectedResult, 'my function returns the lat and lng')
    t.end()
})