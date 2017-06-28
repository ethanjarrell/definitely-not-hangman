const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')
const parseurl = require('parseurl')
const expressValidator = require('express-Validator');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();
let guessedLetters = [];
// const fs = require('fs');
// const listOfWords = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
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
  res.render('index', {newWord: data.newWord});
  console.log(guessedLetters);
});

//Changes to make:::.  Put everything in data.js including the fs and use the code have below but add [i] to the array to select the index value of the word, and then figure out thow to display it in the HTML

//function to pick a random word from the List of Words
// app.get('/', function(req, res){
//   var randomValue = myArray[Math.floor(Math.random() * listOfWords.length)];
//   res.render('index', {listOfWords: listOfWords})
// });

//function to push the letter from the input field into the guessed letters array.
app.post('/', function (req, res){
  guessedLetters.push(req.body.letterInput);
  console.log(guessedLetters);
  function validate(){
  letterInput.value = letterInput.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
  }
  res.redirect('/');
});

app.listen(3000, function(){
  console.log('You did it!  Great Job Ethan!! All that hard work is finally paying off!!');
});
