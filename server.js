const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Listen to Port
app.listen(process.env.PORT || 3001, function() {
  console.log("Server running on 3001");
});