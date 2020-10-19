const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// ATTACHING MIDDLEWARE
app.use(bodyParser.json()); 
app.use(express.static(__dirname + "/public")); 

// SERVER LOCATION
app.listen(3000, () => {
    console.log(`Server started at Port 3000`)
});