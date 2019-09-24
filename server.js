const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const mongoose = require('mongoose');
const APIroutes = require('./routes/api')
const routes = require("/routes");


const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  next();
})

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://heroku_9lbkcnmx:tojec01gm9uqqp7i7ol9jb6dke@ds151086.mlab.com:51086/heroku_9lbkcnmx', {useCreateIndex:true, useNewUrlParser: true }, 
); 

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use(bodyParser.json());

app.use('/api', APIroutes);

app.use(function(err, req,res, next){
  console.log(err);
  res.status(422).send({error: err.message});
})

// Define API routes here
app.use('/', routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
