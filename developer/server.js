const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express(); // instantiate the server
const PORT = process.env.PORT || 3001; 

// Create the Handlebars.js engine object with custom helpers
const hbs = exphbs.create({});

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); // parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.static(path.join(__dirname, 'public'))); // serve static files in the public folder

app.use(routes); // turn on routes

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});