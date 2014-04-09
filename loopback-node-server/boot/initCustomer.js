var loopback = require('loopback');
var app = require('../app');

var myInstances = [
{"name":"Customer A", "zip": "127891" },
{"name":"Customer B", "zip": "127892" }
];

for( var i = 0 ; i <myInstances.length ; i ++ ) 
{
	var myModel = app.models.customer;
	myModel.create( myInstances[i]);
}//end for