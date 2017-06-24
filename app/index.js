const express = require('express');
// dependency of express
const bodyParser = require('body-Parser');
// dependency of body parser
const path = require('path');
// I don't understand what this path is?  I had it from the customer data exercise, but now I don't know what it does?
const expressValidator = require('express-Validator');
//dependency of express validator
const mustacheExpress = require('mustache-express');
//depencency of mustache express
// const data = require('./data.js');
const app = express();

const unguessedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// //why are some of them white?
// const listOfWords = ["apples", "bananas", "strawberries", "mangos", "pineapples", "watermelon"];
// const guessedLetters = [];
// const currentWord = [];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());
app.use(express.static('public'));
// app.set('views', __dirname + 'views');
// app.set('views', __dirname);
// app.set('views', './views');
app.set('views', './views')
//I'm getting an error related to this that I don't understand.
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.get('/', function(req, res){


  res.render('index', {guessedLetters:guessedLetters});
  //but the error may also be related to this.
});

// app.post('/', function (req, res){
//
//
//   guessedLetters.push(req.body.letterInput);
//   res.redirect('/');
// });

app.listen(3000, function(){
  console.log('You did it!  Great Job Ethan!! All that hard work is finally paying off!!');
});
