const http = require('http');
const express = require('express');
const Sequelize = require('sequelize');

const { Binge } = require('./models');
const { Parties } = require('./models');
const { XmasGifts } = require('./models');

const app = express();
const server = http.createServer(app);

const PORT = 3003;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.send(`WarmUp 12-14`)
});

//implement the database

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
