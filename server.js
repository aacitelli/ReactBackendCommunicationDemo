// NPM Imports
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// Setting Up Express's Server
var app = express();
app.use(cors());
app.use(bodyParser.text());

// Handle post request to "/" route 
app.post("/", (req, res) => 
{ 
    console.log("Backend recieved this: ");
    console.log(req.body);
})

// Start up server at given port 
app.listen(5000, () => 
{
    console.log("Server listening on port 5000!");
})