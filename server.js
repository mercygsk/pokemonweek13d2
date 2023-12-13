// require dotenv so that I can use the .env fil
require('dotenv').config();
const express = require('express');
// require mongoose so that I can connect to my db
const mongoose = require('mongoose');
const app = express();
const pokemon = require('./models/pokemon.js');
const jsxViewEngine = require('jsx-view-engine');

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// ================ Middleware ================
//
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send(' Welcome to the Pokemon App!');
});

// I - INDEX - dsiplays a list of all fruits
app.get('/pokemon/', (req, res) => {
    //res.send(pokemon);//jason file display
    res.render('Index' , {pokemon : pokemon});
    // try {
    //     const foundPokemon = await Pokemon.find({});
    //     res.status(200).render('Index', {pokemon: foundPokemon});
    // } catch (err) {
    //     res.status(400).send(err);
    // }
    
});




// N - NEW - allows a user to input a new fruit
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});


// C - CREATE - update our data store
app.post('/pokemon', (req, res) => {
  
    pokemon.push(req.body);
    // console.log(fruits);
    // console.log(req.body)
    // res.send('data received');
    res.redirect('/pokemon'); // send user back to /fruits
})
// S - SHOW - show route displays details of an individual fruit
app.get('/pokemon/:whatever', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {// second parameter must be an object
        pokemon: pokemon[req.params.whatever]
        
    });
})


app.listen(3000, () => {
    console.log('listening');
});