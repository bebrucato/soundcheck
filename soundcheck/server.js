const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/soundcheck',
  collection: 'mySessions'
});
store.on('error', function(error) {
  console.log(error);
})
const path = require("path");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('express-session')({
  secret: 'super-secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: false,
  saveUninitialized: false
}));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"client/build")));
}
// Add routes, both API and view
app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/soundcheck");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
