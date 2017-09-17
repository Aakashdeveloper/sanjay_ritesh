var express = require("express");
var app = express();

var port = 3600;

app.get("/",function(req,res){
    res.send("this is home page");
});


app.get("/books",function(req,res){
    res.send("this is book page");
})

app.get("/authors",function(req,res){
    res.send("this is a Author page");
})


app.listen(port,function(err){
    if(err){
        console.log("error")
    }else{
        console.log("Running on port"+port)
    }
})
