const fs = require('fs');
const path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function callback(err,data){
    if(err){
        return err;
    } 
   
   var temp = data.length;

    for(var i=0; i<temp; i++)
    {
        var temp2 = data[i];
        var temp3 = path.extname(temp2);
        
        if(temp3 == "."+ext){
            console.log(temp2);
        }
    }
});