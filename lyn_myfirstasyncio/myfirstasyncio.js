const fs = require('fs');
let path = process.argv[2];
fs.readFile(process.argv[2], function callback(err, data){
    if(err){
        return err;
    }
    let temp = data.toString();
    let temp2 = temp.split('\n');
    console.log(temp2.length - 1 );
});

