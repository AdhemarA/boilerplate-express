let express = require('express');
let app = express();
console.log( "Hello World");

/* app.get( "/", function( req, res){
   res.send( "Hello Express");
});*/
  
app.get( "/", ( request, response) =>{
   response.sendFile(__dirname + "/views/index.html" );
});



































 module.exports = app;
