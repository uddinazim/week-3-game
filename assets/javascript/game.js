var gameLetters = ("abcedfghijklmnopqrstuvwxyz").split("");

var playerGuess = [];

var win = 0;
var loss = 0;
var guesses = 9;

var compLetter = gameLetters[Math.floor(Math.random() * gameLetters.length)];
console.log("Game Picked: " + compLetter);


function Restart (){
	guesses = 9
	playerGuess = []
	compLetter = gameLetters[Math.floor(Math.random() * gameLetters.length)];
}


document.onkeyup =function(event){

	var userInput = String.fromCharCode(event.keyCode).toLowerCase(); //Make everything lower case
	console.log(userInput); //debugging User input recognized 


		
		if ( userInput == compLetter) {
			console.log("You win");
			win++
			Restart ();
			console.log("Game Picked " + compLetter + " to guess")
			console.log("You won " + win + " times")
			document.getElementById("wins").innerHTML = win;
		}

		

		else if (guesses == 0) {
			Restart ();	
			loss++
			console.log("GAME OVER YOU LOSE")
			console.log("You lost " + loss + " times")
			console.log("Game Picked " + compLetter + " to guess")
			document.getElementById("losses").innerHTML = loss;
		}

		else {
			guesses--
			console.log("Guesses left " + guesses);
			console.log("Game Picked " + compLetter + " to guess")
			document.getElementById("guessesLeft").innerHTML = guesses;
			
   			playerGuess.push(userInput);
   			console.log("You have guessed" + userInput);
   			document.getElementById("guessedSoFar").innerHTML = playerGuess;

		}

	


}
