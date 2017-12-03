

var module = require("./mod.js");

module(process.argv[2],process.argv[3], function(err , list){
	
	if(err) return console.log("Error:", err)

	for(var s =0; s<list.length; s++)
	{
	    console.log(list[s])
	}
    
});