const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const es6Renderer = require('express-es6-template-engine');

const PORT = 3333;

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

//new global array for create page
const db =[];

const items = {
    chair: "you sit in it",
    tv: "you watch it",
    bed: "you sleep in it"
}

app.get('/', (req,res) =>{
    res.render('home', {

    });
});

app.get('/items', (req,res) => {
    res.render('items', {
        locals: {
            items: Object.keys(items)
        }
    })
})
app.get('/items/:itemName', (req,res) => {
    const item = req.params.itemName
    res.render('itemTypes', {
        locals: {
            item,
            description: items[item]
        }

    })

})


app.use(express.urlencoded({extended: true}))

app.get('/create', (req, res) =>{
    res.render('create')
})



app.post('/create', (req, res) =>{
    console.log(req.body)
    const food =req.body.food;
    db.push({food});
    res.redirect('/thankyou');
})

app.get('/thankyou', (req, res) =>{
    res.render('thankyou')
})

server.listen( PORT, () =>{
    console.log(`listening on ${PORT}`)
})