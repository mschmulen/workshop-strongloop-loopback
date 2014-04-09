var loopback = require('loopback');
var app = require('../app');

var myInstances = [
{"name":"productA", "description":"description A", "inventory":11, "price" :66.34, "UPC": "127890" },
{"name":"productB", "description":"description B", "inventory":22, "price" :22.34, "UPC": "127891" },
{"name":"productC", "description":"description C", "inventory":33, "price" :11.54, "UPC": "127892" },
{"name":"productD", "description":"description D", "inventory":44, "price" :9.24, "UPC": "123893" },
{"name":"productE", "description":"description E", "inventory":55, "price" :2.24, "UPC": "123894" }
];

for( var i = 0 ; i <myInstances.length ; i ++ ) 
{
	var myModel = app.models.product;
	myModel.create( myInstances[i]);
}//end for
