let express = require('express');
let app = express();
console.log( "Hello World");

/* app.get( "/", function( req, res){
   res.send( "Hello Express");
});*/
  
app.get( "/", ( request, response) =>{
   response.sendFile(__dirname + "/views/index.html" );
});

//app.use( express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

let jsonMessag = { msg: "Testing JSON" };
app.get( "/json", ( request, response) =>{
   response.json(jsonMessag );
});

































 module.exports = app;
