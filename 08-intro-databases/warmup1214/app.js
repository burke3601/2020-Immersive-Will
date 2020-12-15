//warmup exersice

const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const PORT = 3033
const pets = ["fluffy", "scooter", 'moose']

app.get('/', (req, res) => {
res.render('home')
});

server.listen(PORT, (req,res) => {
    console.log(`listening on ${PORT}`)
})
