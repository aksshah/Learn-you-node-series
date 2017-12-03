const net = require("net");
const port = process.argv[2];
   
   
let obj = new Date();
let date = obj.getDate();
if(date<10){date = "0" + date}
let year = obj.getFullYear();
let month = obj.getMonth() + 1;
if(month<10){month = "0" + month}
let hours = obj.getHours();
if(hours<10){hours = "0" + hours}
let Minutes = obj.getMinutes();
if(Minutes<10){Minutes = "0" + Minutes}

var server = net.createServer(function trial(socket) {  
     
         
       let data = year+"-"+month+"-"+date+ " " +hours+":"+Minutes+"\n";
    socket.end(data); 
})  
server.listen(port); 