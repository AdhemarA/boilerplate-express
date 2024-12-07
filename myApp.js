require('dotenv').config();
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
let message = { "message" : "Hello json"};
/*app.get( "/json", ( request, response) =>{
   response.json(message );
});*/

app.get( "/json", ( request, response) =>{
   if( process.env.MESSAGE_STYLE === "uppercase"){
     response.json({ "message": "HELLO JSON"} );
   }else {
     response.json( message );
   }
});































 module.exports = app;
