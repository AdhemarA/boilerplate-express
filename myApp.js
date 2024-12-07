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

let jsonMessag = { "message" : "Hello json" };
/* app.get( "/json", ( request, response) =>{
   response.json(jsonMessag );
});*/

app.get( "/json", ( request, response) =>{
   if(process.env.MESSAGE_STYLE === "uppercase"){
      jsonMessag = { "message" : "HELLO JSON" };
      console.log( "step 1");
   }else{
      jsonMessag = { "message": "Hello json"};
   console.log( "step 2");
   };
});
































 module.exports = app;
