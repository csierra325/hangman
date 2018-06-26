// array of words being guessed
var animalList = [
    "dolphin", "monkey", "elephant", "leopard", "turtle", "kangaroo", "cheetah", "goose", "parrot",
    "crocodile"
];

//  Computer selected random word will be held here.
var animal = "";


// This will break the solution into individual letters to be stored in array.
var lettersInAnimal = [];

// This will be the number of blanks we show based on the number of letters.
var correct = 0;

var word = document.getElementById("word")

var started = false;

// Game counters
var incorrect = 4;
var losses = 1;



document.onkeyup = function (e) {
    var userGuess = e.keyCode;
    var userKey = e.key;
    console.log(e)

    //  starts the game using the spacebar 
    if (userGuess === 32 && !started) {
        started = true;
        //  generates a random word
        animal = animalList[Math.floor(Math.random() * animalList.length)]

        for( var j = 0; j < animal.length; j++){
            
            lettersInAnimal.push({letter: animal[j], showletter:false })
        }

        for ( var k = 0; k < lettersInAnimal.length; k++){
            if (lettersInAnimal[k].showletter === false){
                word.innerHTML = word.innerHTML + " _ "
                
            }
            else {
                word.innerHTML = word.innerHTML + lettersInAnimal[k].letter
            }

        }
       

    

        document.querySelector(".hidden-word").innerHTML = correct;

    };


    if (userGuess >= 65 && userGuess <= 90) {
        console.log('you pressed a letter: ', userKey)

        if (animal.includes(userKey)) {

            alert("yay");

            var animaltwo = animal.replace(userKey, "_");
            alert(animaltwo);




        } else {
            alert("boo");

            var wrong = document.querySelector(".incorrect-guesses").innerHTML = "Wrong Letters: " + userKey;

           



            if (incorrect > 0) {

                document.querySelector(".numberofguesses").innerHTML = "Chances Left: " + incorrect--;



            } else {
                alert("Game Over!");

                document.querySelector(".losses").innerHTML = "Losses: " + losses++;
            }

        }



    }
}