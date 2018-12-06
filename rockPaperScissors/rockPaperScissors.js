/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

//create an array of possible answers [rock, paper, scissors]
//create an array to hold possible answers []
//loop through answer array with a limit of 2
	//loop through with limit of 2
		//loop through with limit of 2
			//push each element loop to holder array to possible answers array
var rockPaperScissors = function (rounds) {
	var actions = ['rock', 'paper', 'scissors'];
	var possibleAnswers = [];
	var count = 0;
	for (var i = 1; i <= rounds; i++) {
		let currentAnswers = [];
		for (var j = 0; j < 3; j++) {
			currentAnswers.push(actions[j]);
		}
		possibleAnswers.push(currentAnswers);
	}
	// for (var i = 0; i < actions.length; i++) {
	// 	for(var j = 0; j < actions.length; j++) {
	// 		for (var k = 0; k < actions.length; k++) {
	// 			possibleAnswers.push([actions[i], actions[j], actions[k]]);
	// 		}
	// 	}
	// }
	return possibleAnswers;
};

//Extra
//input: number of rounds
//output: large array with small arrays that contain possible answers for that round
//Transformation: rounds = 1
//	should add another instance of possible answers; 3 ^ number of rounds
//	0: push index 0, 1 times
//  1: push index 1, 1 times
//  2: push index 2, 1 times





