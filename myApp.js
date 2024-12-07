require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(( request, response, next) => { console.log(request.method + " "
      + request.path + " - " + request.ip); next() });
/* app.get( "/", function( req, res){
   res.send( "Hello Express");
});*/

app.use(bodyParser.urlencoded( {extended: false}) );
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

app.get( "/now", ( request, response, next ) =>{
   request.time = new Date().toString();next()},
   (request, response ) => response.json({"time": request.time}));

app.get( "/:word/echo", ( request, response) =>{
  response.json({ echo: request.params.word} );
});

app.get( "/name", ( request, response) =>{
   let reqPerson = request.query.first + " " + request.query.last;
   response.json({ name: reqPerson} );
 });

 app.post( "/name", bodyParser.urlencoded( {extended: false}),
    ( request, response) =>{ let reqPerson = request.body.first + " " + request.body.last;
      response.json({ name: reqPerson} );
    });
 




























 module.exports = app;
