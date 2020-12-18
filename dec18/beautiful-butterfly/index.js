const http = require('http');
const express = require('express');
const morgan = require('morgan');
const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const logger = morgan('tiny');

const data = require('./data.json')

const homeRouter = require('./routers/homeRouter')
const movieRouter = require('./routers/movieRouter')

const PORT = 3001;

app.use(logger);
app.use('/', homeRouter);

//goal is to render the data from daa.json
//to a template

app.use('/films', movieRouter)
// app.get('/movies', (req, res) => {
//     console.log(data)
   

//     res.render('movieList', {
//         locals:{
//             movies: data 
//         }
//     });
// });


server.listen(PORT, () =>{
    console.log(`listening at ${PORT}`)
});