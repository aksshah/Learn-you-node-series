const http = require("http");
var urlone = process.argv[2];
var urltwo = process.argv[3];
var urlthree = process.argv[4];
var dataone = "";
var datatwo = "";
var datathree = "";

http.get(urlone,function callback(response){
    response.setEncoding('utf8');
    response.on("data",function(data){
        
        dataone = dataone + data;
        
    })
    response.on("end",function(){
        console.log(dataone);
        
                                
                            http.get(urltwo,function callback(response){
                            response.setEncoding('utf8');
                            response.on("data",function(data){
                                
                                datatwo = datatwo + data;
                                
                            })
                            response.on("end",function(){
                                console.log(datatwo);
                    
                                                                
                                                                            http.get(urlthree,function callback(response){
                                                                            response.setEncoding('utf8');
                                                                            response.on("data",function(data){
                                                                                
                                                                                datathree = datathree + data;
                                                                                
                                                                            })
                                                                            response.on("end",function(){
                                                                                console.log(datathree);
                                                                            });

                                                                             });
                            });
                            });
    
    });

});    
    
