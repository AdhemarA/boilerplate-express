require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let mongoDbEnv = require('mongoose');
let app = express();

let mongoDbURI = "mongodb+srv://aahborgesnogueira:dBJZnb3UNbMqcMho@cluster0.6qowl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoDbURI, { useNewUrlParser: true, useUnifiedTopology: true }); 




























 module.exports = app;
