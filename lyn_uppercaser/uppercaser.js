const http = require("http");
let port = process.argv[2];
var map = require('through2-map');

let server = http.createServer(function callback (req,res){
    if(req.method=='POST'){
        req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase(); 
     })).pipe(res);
    }
})
server.listen(port);