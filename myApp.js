require('dotenv').config();
let express = require('express');
let app = express();

app.use((this.request, response, next) => { console.log(this.request.method + " "
      + this.request.path + "-" + this.request.ip)});
/* app.get( "/", function( req, res){
   res.send( "Hello Express");
});*/

console.log( "Hello World");

app.get( "/", ( request, response) =>{
   response.sendFile(__dirname + "/views/index.html" );
});

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
