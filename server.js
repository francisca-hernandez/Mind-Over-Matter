require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const sequelize = require('./config/connection');

const routes = require('./controllers');

// confiiguration for handlebars
const hbs = exphbs.create({});

// 
const app = express();
const PORT = process.env.PORT || 3001;

const sessionSetting = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
};

// we setup handlebars and connect it with express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sessionSetting));

app.use(express.static(path.join(__dirname, 'public')));

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);




sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});