alert("It works!")

console.log(3 + 7, "hello", true);

// example 1 
if (1 === 1) {
	console.log("it's true");
}
// exmaple 2 
let rating = 2

if (rating === 3) {
	console.log("great job");
} 
else if (rating === 2) {
	console.log("meets standards");
}
else {
	console.log("Rating is invalid");
}

// example 3 

let userScore = 1600
let highScore = 1426

if (userScore >= highScore) {
	console.log(`Congratulations! You scored ${userScore}, which is now the high score`);
	highScore = userScore
	console.log(`the highscore is ${highScore}`)
} else {
	console.log(`Great Game, you scored ${userScore}, but it did not beat ${highScore}`);
}