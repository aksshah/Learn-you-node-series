const http = require("http");
const fs = require("fs");
let port = process.argv[2];
let fileloc = process.argv[3];

let server = http.createServer(function (req, res) {  
     let readstream = fs.createReadStream(fileloc);
     readstream.pipe(res);
})  

server.listen(port);  