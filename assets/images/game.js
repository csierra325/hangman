

var animalList = [
    "dolphin", "monkey", "elephant", "leopard", "turtle", "kangaroo", "cheetah", "goose", "parrot",
    "crocodile"
];
var animal = "";
var incorrect = 4;
var started = false;
var losses = 1;
var correct = 0;


document.onkeyup = function (e) {
    var userGuess = e.keyCode;
    var userKey = e.key;
    console.log(e)

    if (userGuess === 32 && !started) {
        started = true;
        animal = animalList[Math.floor(Math.random() * animalList.length)]



        var correct = []
        for (i = 0; i < animal.length; i++) {
            correct[i] = "_";
        }
       alert(correct)
        // animal2 = animal.replace(new RegExp(".", 'g'), "-");
        alert(animal);
        // alert(animal2);


        document.querySelector(".hidden-word").innerHTML = correct;

    };


    if (userGuess >= 65 && userGuess <= 90) {
        console.log('you pressed a letter: ', userKey)

        if (animal.includes(userKey)) {

            alert("yay");

            var animaltwo = animal.replace(userKey, "_");
            alert(animaltwo);


              

            // result = function () {
            //     wordHolder = document.getElementById('hold');
            //     correct = document.createElement('ul');

            // for (var i = 0; i < word.length; i++) {
            //   correct.setAttribute('id', 'my-word');
            //   guess = document.createElement('li');
            //   guess.setAttribute('class', 'guess');
            //   if (word[i] === "-") {
            //     guess.innerHTML = "-";
            //     space = 1;
            //   } else {
            //     guess.innerHTML = "_";
            //   }

            //   geusses.push(guess);
            //   wordHolder.appendChild(correct);
            //   correct.appendChild(guess);
            // }







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