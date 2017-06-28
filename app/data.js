const fs = require('fs');
const listOfWords = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");


  function getRandomWord(myArray){
    var randomValue = myArray[Math.floor(Math.random() * myArray.length)];
    return randomValue;
    }
    var randomWord = getRandomWord(listOfWords);

    function makeWordAnObject(strArr){
    strArr.split("");
    str = [];
    for (var i = 0; i < strArr.length; i++){
    let c = strArr[i];
    str.push({"letter": c})};
     return{str};
    }

   let newWord = makeWordAnObject(randomWord);
   console.log(newWord);

//    var findOne = function (letterarray, wordarray) {
//     return wordarray.some(function (v) {
//         return letterarray.indexOf(v) >= 0;
//     });
// };
//
// findOne(guessedLetters, newWord);
// console.log(findOne);

   module.exports = {
     newWord: str
   }
