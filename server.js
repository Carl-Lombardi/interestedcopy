const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const logger = require("morgan");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

mongoose.connect('mongodb://heroku_fdbt2cm1:deg6bbpc8lfr4ldj14actncmcg@ds129023.mlab.com:29023/heroku_fdbt2cm1', {useCreateIndex:true, useNewUrlParser: true }, 
); 

app.use('/api', require('./routes/api'));

app.use(function(err, req,res, next){
  console.log(err);
  res.status(422).send({error: err.message});
})

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
