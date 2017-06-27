const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')
const parseurl = require('parseurl')
const expressValidator = require('express-Validator');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());
app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true
}))
app.use(express.static('../public'));
app.set('views', '../views')
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

//function to render guessed letters
app.get('/', function(req, res){
  res.render('index', {guessedLetters: data.guessedLetters});
});


//function to pick a random word from the List of Words
app.get('/', function(req, res){
  var randomValue = myArray[Math.floor(Math.random() * data.listOfWords.length)];
  res.render('index', {listOfWords: data.listOfWords})
});

//function to push the letter from the input field into the guessed letters array.
app.post('/', function (req, res){
  data.guessedLetters.push(req.body.letterInput);
  function validate(input){
  letterInput.value = letterInput.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
  }
  res.redirect('/');
});

app.listen(3000, function(){
  console.log('You did it!  Great Job Ethan!! All that hard work is finally paying off!!');
});
