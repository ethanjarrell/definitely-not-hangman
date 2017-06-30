const fs = require('fs');
const listOfWords = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
let guessedLetters = [];

// choose a random word out of an array of words
  function getRandomWord(myArray){
    var randomValue = myArray[Math.floor(Math.random() * myArray.length)];
    return randomValue;
    }
    var randomWord = getRandomWord(listOfWords);

//Turn the word into an array of objects
    function makeWordAnObject(strArr){
    strArr.split("");
    str = [];
    for (var i = 0; i < strArr.length; i++){
    let c = strArr[i];
    str.push({"letter": c, "value":"_",})};
     return{str};
    }

   let newWord = makeWordAnObject(randomWord);
   console.log(newWord);





   module.exports = {
     newWord: str,
     guessedLetters: guessedLetters
   }
