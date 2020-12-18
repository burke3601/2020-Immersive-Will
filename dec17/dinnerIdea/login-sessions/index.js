require('dotenv').config();    // don't forget to require dotenv

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const es6Renderer = require('express-es6-template-engine');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const homeController = require('./controllers/home');


const {
    userRouter,
    dinnerIdeaRouter
} = require('./routers');

const { requireLogin } = require('./auth')

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const Sequelize = require('sequelize');

app.use(express.urlencoded({ extended: true }));

const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    store: new FileStore(),             // store in files on the server
    secret: process.env.SESSION_SECRET, //the secret is like a 2-way encryption key
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {                               //magic band
        maxAge: 1000 * 60 * 60 * 24 * 7     //how many milliseconds until it expires, 1 week
    }
}));



app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.get('/', homeController.home);

app.get('/unauthorized', (req, res) => {
    res.send(`You shall not pass!`);
});

app.use('/users', userRouter);

//middleware to protect the rest of the site
//app.use(requireLogin);

//need to add dinneridea router

app.use('/dinnerideas', dinnerIdeaRouter)

app.get('/members-only', (req, res) => {
    console.log(req.session.user);
    const { username } = req.session.user;
    res.send(`

<h1>Hi ${username}!</h1>
<a href="/users/logout">Log out</a>
    `);
});


server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
