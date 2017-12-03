const http = require("http");
const url = process.argv[2];
var temp = "";

http.get(url,function callback(response){
    response.setEncoding('utf8');    
    response.on("data",function(data) { 
        temp += data;
    })
    
    response.on("end",function(){
        console.log(temp.length);
        console.log(temp);
    });
    
});
