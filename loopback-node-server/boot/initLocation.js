var loopback = require('loopback');
var app = require('../app');

var myInstances = [
{"name":"Loc A", "geo": { "lat": 37.796996, "lng": -122.429281 } ,"LOCATIONTYPE": "retail" },
{"name":"Loc B", "geo": { "lat": 37.766996, "lng": -122.409281 } ,"LOCATIONTYPE": "retail" },
{"name":"Loc C", "geo": { "lat": 37.8000, "lng": -122.449281 } ,"LOCATIONTYPE": "retail" }
];

for( var i = 0 ; i <myInstances.length ; i ++ ) 
{
	var myModel = app.models.location;
	myModel.create( myInstances[i]);
}//end for