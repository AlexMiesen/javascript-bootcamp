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

// example 4

 let password = 'Kitty hii'

 if (password.length >= 6) {
	//indexOf in this use case means that if it finds an empty space the empty space message shows 
	if (password.indexOf(' ') === -1) {
		console.log("Valid Password");
	} else {
		console.log("Password is long enough but can't contain an empty space");
	}
 } else {
	console.log("Password must be longer");
 }

//  example 5 

let new_password = "HelloKitty"

if (new_password.length >= 8 && new_password.indexOf(' ') === -1) {
	console.log("Valid Password")
} else {
	console.log("Invalid Password")
}

//example 6

day = "apple"

switch(day) {
	case 1: 
		console.log("MONDAY") 
		break
	case 2: 
		console.log("TUESDAY") 
		break
	case 3: 
		console.log("WEDSDAY") 
		break
	case 4: 
		console.log("THURSDAY") 
		break
	case 5: 
		console.log("FRIDAY") 
		break
	case 6: 
		console.log("SATURDAY") 
		break
	case 7: 
		console.log("SUNDAY") 
		break
	default:
		console.log("Invalid day")		
}
