//alert("It works!")

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
		break
}

//example 7, use of pop and push 

const fruits = ['apple', 'banana', 'pear', 'pineapple']

fruits.pop() // remove last item 

console.log(fruits)

fruits.push('grape') //add item 

//example 8, use of shift and unshift

const dishesToDo = ["mug", "small plate", "bowl", "cup"]

dishesToDo.unshift("spoon") // adds to the start of the array

console.log(dishesToDo)

dishesToDo.shift() // removes from start of the array

console.log(dishesToDo)

//example 9, use of other methods of arrays 
let meats = ["steak", "chicken", "pork"]
mixedArray = dishesToDo.concat(fruits, meats) 
console.log(mixedArray) // add arrays together with concat

console.log(meats.includes("chicken")) //returns boolean if present
console.log(meats.includes("chicken", 2)) // is it present after the index of 2? in this example it's false
console.log(meats.indexOf("pork")) // returns the index number, in this example '2'

meats.reverse()
console.log(meats) //reserves the array (in place!)

console.log(meats.join('-')) // joins the strings in the array togther
console.log(["hello", 1, false].join('#')) // will turn things into a string.

// example 10

let animals = ["Horse", "Cow","pig","turtle", "koala", "kanagaroo", "kukabara"]

const ausAnimals = animals.slice(4)
const dinner = animals.slice(1, 3)
const tripleAAnimals = animals.slice(-2)
console.log(ausAnimals)
console.log(dinner)
console.log(tripleAAnimals)

// example 11, splice

console.log(animals.splice(3, 1, 'shark')) //will return 'turtle' insert by using '0' in the second argument
console.log(animals) // notice how shark has replaced the turtle

// example 12, sort (this works for letter but not numbers!)

const sortedAnimals = animals.sort()

console.log(sortedAnimals)

//Section 6 - Objects

const fitBitData = {
	workOut: "Body Builder",
	jogTime: 33.6,
	workOutWeek: "5 of 7",
	alarmSet: false 
}
console.log(fitBitData.workOutWeek)
console.log(fitBitData["workOut"])

//section 7 - loops

for (let i = 0; i < 10; i+=3){ //here the number starts at 0, will run if the number is less than 10, and go up by 3 each time
	console.log(i)
}

for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num }`)
}

for (let i = 50; i >= 0; i -= 10) {	//counting down from 50
	console.log(i)	
}