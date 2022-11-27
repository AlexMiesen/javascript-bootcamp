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

//for loops and arrays
console.log('for loops and arrays')

const seaCreatures = ["sting ray", "dolphin", "crab", "sword fish", 'eel', 'shark']

for (let i = 0; i <= seaCreatures.length; i++) {
	console.log(i, seaCreatures[i])

}

const winningDogs = [
	{
		dogType: 'dalmation',
		lapTime: 3.6
	},
	{
		dogType: 'bulldog',
		lapTime: 5.0
	},
	{
		dogType: 'corgy',
		lapTime: 7.9
	},
	{
		dogType: 'great dane',
		lapTime: 1.2
	}
]

for (let i = 0; i <= winningDogs.length - 1; i++) {
	let dog = winningDogs[i]
	console.log(`${dog.dogType} has a lap speed of ${dog.lapTime}`)
}
let totalLapTime = 0  

for (let i = 0; i <= winningDogs.length - 1; i++) {	
	let dog = winningDogs[i]
	console.log(`${totalLapTime += dog.lapTime }`)
}
console.log('average laptime:', totalLapTime / winningDogs.length)

const word = 'diploma'
let reversedWord = ''

for(let i = word.length - 1; i >= 0; i--) {
	console.log(reversedWord += word[i]) // adds a new letter to the reversedWord empty string
}

//nested loops
const numberOfPlayers = 5
const weaponsArray = ['knife', 'gun', 'sword', 'bazooka']


for(let i = 0; i <= numberOfPlayers - 1; i++) {
	console.log('player:',i)
	for(let i = 0; i <= weaponsArray.length - 1; i++) {
		console.log(weaponsArray[i])
	}
}

// while loop. Good for when we done know how long it will run. Good for games. 

let countUpTo5 = 0;

while(countUpTo5 <= 5) {
	console.log(countUpTo5)
	countUpTo5++
}

let target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while (guess !== target) {
	console.log(`Target is: ${target}. Guess is ${guess}`)
	guess = Math.floor(Math.random() * 10)
}

console.log(`Congrats, guess was ${guess} and target was ${target}`)

// For..of loops 

let subreddits = ['soccer', 'books', 'wicked edge', 'guitar pedals']

for(let subreddit of subreddits) {
	console.log(subreddit)
}

for (let char of 'cockadoodledoo') {
	console.log(char, char.toUpperCase)
}

// For of with objects
// Objects are not iterable so we can't use 'for ( of ) loop', However we can use 'Object.keys/values to get one or the other. 

const movieReviews = {
	tombRaider: 9,
	killBill:  8,
	starWars:	7,
	shrek: 5,
	indianaJones: 10
}

console.log(Object.keys(movieReviews))
console.log(Object.values(movieReviews))

for ( movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie])
}

const ratings = Object.values(movieReviews);

let averageRatingstotal = 0

for (let rating of ratings) {
	averageRatingstotal += rating;
}

averageRatingstotal /= ratings.length

console.log(`The average rating is: ${averageRatingstotal}`) // we could also just do console.log(averageRatingstotal/ratings.length)

// for in loops . Here we don't have to use Object.keys/values

const realMadridSquadEarlyTwoThousands = {
	raul: 7,
	ronaldo: 11,
	zidane: 5, 
	hierro: 6,
	casillas: 1
}

for ( let player in realMadridSquadEarlyTwoThousands) {
	console.log(player)
	console.log(realMadridSquadEarlyTwoThousands[player])
}

let squadNumberTotal = 0


for ( let player in realMadridSquadEarlyTwoThousands) {
	squadNumberTotal += realMadridSquadEarlyTwoThousands[player]
}

console.log(`the squad total is ${squadNumberTotal}`)

// functions 

function greetingsInMyLanguages() {
	console.log("G'day")
	console.log("Goedemorgen")
	console.log("Buenos dias")
}

greetingsInMyLanguages()


// function within a function (also modified throwDice to take a number)
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1
	console.log(`Rolled: ${roll}`)
}

rollDie() 

function throwDice(numberOfRolls) {
	for(let i = 0; i < numberOfRolls; i++) {
		rollDie()
	}
}

throwDice(3)

// function with an argument 

function greetUser(userInput) {
	console.log(`Hello ${userInput}!`)
}

// function with multiple parametres (Added with my own return!)
function capitalise(name){
	const captialLetter = name[0].toUpperCase()
	result = name.replace(name[0], captialLetter)
	return result
}

function fullName(firstName, lastName) {
	console.log(`${capitalise(firstName)} ${capitalise(lastName)}`)
}

//multiple return statements, functions stop once you hit a return.  

// function isPurple(colour) {
// 	if(colour.toLowerCase() === 'purple')
// 		return true;
// 	else {
// 		return false
// 	}	
// }

// function isPurple(colour) {
// 	if(colour.toLowerCase() === 'purple') {
// 		return true;
// 	}
// 	return false
// }

// function isPurple(colour) {
// 	return colour.toLowerCase() === 'purple';
// }

function containsPurple(array) {
	for(let colour of array) {
		if(colour === 'purple' || colour === 'Indigo') {
			return true
		}
	}
	return false
}

//Function Challenge 1: passwordValidator

function isValidPassword(examplePassword, username) {
	if (examplePassword.length >= 8 && examplePassword.indexOf(' ') === -1 && examplePassword.indexOf(username) === -1) {
		return true
	} else {
		return false
	}
}

// alternative:

// function isValidPassword(examplePassword, username) {
// 	const tooShort = examplePassword.length < 8;
// 	const hasSpace = examplePassword.indexOf(' ') !== -1;
// 	const tooSimilar = examplePassword.indexOf(username) !== -1;
// 	return !tooShort && !hasSpace && !tooSimilar;
// }

// Function Challenge 2: Average
function avg(arr) {
	sum = 0
	for (let num of arr) {
		console.log(num)
		sum += num
	}
	return sum / arr.length
}

// Function Challenge 3: Pangrams

// function isPangram(sentence) {
// 	let lowerCase = sentence.toLowerCase()

// 	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
// 		if (lowerCase.indexOf(char) === -1) {
// 			return false;
// 		}
// 	}
// 	return true
// }

function isPangram(sentence) {
	let lowerCase = sentence.toLowerCase()

	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCase.includes(char)) {
			return false;
		}
	}
	return true
}

// Function Challenge 4: getCard()

function getCard() {
	let value = [2,3,4,5,6,7,8,9,10,'J','Q', 'K','A']
	let suit = ['clubs', 'spades', 'hearts', 'diamonds']
	

	function getRandomElementFromArray(array) {
		return Math.floor(Math.random() * array.length)
	}
	randomValue = value[getRandomElementFromArray(value)]
	randomSuit = suit[getRandomElementFromArray(suit)]

	card = {
		value: randomValue,
		suit: randomSuit
	}
	return card
}

// Function Expressions

// the word 'multiply' does not have to be there, we can just do an anonymous function
const product = function multiply(x, y) {
	return x * y
}

console.dir(product) // we can see the object form. 'proof' of object with key an value properties 

const devide = function (x, y) {
	return x / y
}

const operations = [product, devide] 

console.log(operations[0](100, 4))

for(let func of operations){
	let result = func(60,2)
	console.log(`Ran operation ${func} and result was ${result}`)
}

// We can also call the product function from within an object. mathsRobot.doMultiplication(2,10)
const mathsRobot = {
	doMultiplication: product
}

// Functions as arguments 

function singIfYourHappy(){
	console.log('if your happy and you know it clap your hands')
}
function singAroundTheWorld(){
	console.log('Around the World')
}

function repeatNTime(sing, num){
	for (i = 0; i < num; i++) {
		sing()
	}
}

repeatNTime(singAroundTheWorld, 5)

function randomSongToSing(song1, song2) {
	let randomSong = Math.floor(Math.random() * 10)
	if (randomSong > 5 ) {
		song1()
	} else {
		song2()
	}
}

randomSongToSing(singAroundTheWorld, singIfYourHappy)

// functions as return values

function multiplyBy(num) {
	return function(product){ // we can use 'return function () { }' to return a function. In our example the num we return is product x num. 
		return product * num;
	} 
}

const triple = multiplyBy(3)
const double = multiplyBy(2)


// function makeBetweenFunc(firstNum, SecondNum) {      This works! but we can shorten it below
// 	return function(input) {
// 		if (input >= firstNum && input <= SecondNum) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}
// }


function makeBetweenFunc(firstNum, SecondNum) {
	return function(input) {
		return input >= firstNum && input <= SecondNum
	}
}


const isChild = makeBetweenFunc(0, 18)

const isInNineties = makeBetweenFunc(1990, 1999)

const isNiceWeather = makeBetweenFunc(25, 30)

// Callbacks - passing a function into another function 

const btn = document.querySelector('button')
btn.addEventListener('click', function(){
	alert('Why did you click me?')
})

// Section 10
console.log('Section 10')
// Foreach 

const numbers = [20,21,22,23,24,25,26,27]

numbers.forEach(function(num){
	console.log(num * 2)
})

console.log('Print Triple')

function printTriple(n){
	console.log(n * 3);
}

numbers.forEach(printTriple)

numbers.forEach(function(num, index) {  // second parametre is the index
	console.log(index, num)
});


const books = [
	{
		title: 'Harry Potter',
		authors: ['JK Rowling'],
		rating: 4.25,
		genres:['fiction', 'fantasy']
	},
	{
		title: 'Good Omens',
		authors: ['Terry Pratchett', 'Neil Gaiman'],
		rating: 3.00,
		genres:['fiction', 'fantasy']
	},
	{
		title: 'American Gods',
		authors: ['Neil Gaiman'],
		rating: 4.11,
		genres:['fiction', 'fantasy']
	},
	{
		title: 'Dark Emu',
		authors: ['Bruce Pascoe'],
		rating: 4.3,
		genres:['non-fiction']
	},
	{
		title: 'Bone: The Complete Edition',
		authors: ['Jeff Smith'],
		rating: 4.42,
		genres:['fiction', 'graphic novel', 'fantasy']
	},
	{
		title: 'Lord of the flies',
		authors: ['William Golding'],
		rating: 3.67,
		genres:['fiction', 'graphic novel']
	},
	{
		title: 'A truely horrible book',
		authors: ['Xavier Time'],
		rating: 2.37,
		genres:['fiction', 'graphic novel']
	},
]

books.forEach(function(book) {
	console.log(book.title.toUpperCase())
})

// Map

const doubles = numbers.map(function(num){
	return num * 2
})

console.log(doubles)

const isEvenNumbers = numbers.map((n) => {
	return {
		value: n,
		isEven: n % 2 === 0
	}
})

console.log(isEvenNumbers)

const words = ['asap', 'byob', 'rsvp', 'diy']

const abbreviations = words.map(function(word){
	return word.toUpperCase().split('').join('.')
})

console.log(abbreviations)

const bookTitles = books.map(function(book){
	return book.title
})

console.log(bookTitles)

// Arrow functions

const square = (x) => {
	return x * x
}

const isEven = num => {  // since there is only one parametre it is ok to leave the '()'
	return num % 2 === 0
}

const greet = () => {
	console.log('HI!')
}
greet()

// implicit returns - we can have a function that does not need a 'return'

const quadrupleNumbers = numbers.map(n => n * 2)
console.log(quadrupleNumbers)

const parityList = numbers.map((n) => n % 2 === 0 ? 'even' : 'odd')

// using 'find' in an array

let movies = ['The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds']

const mrsMovie = movies.find((movie) => {
	return movie.includes('Mrs')
})
const mrsMovie2 = movies.find((movie) => { //looks for the first one that start with 'Mrs' 
	return movie.indexOf('Mrs') === 0
})

const goodBook = books.find(b => b.rating >= 4.3)
const neilBook = books.find(book => (
	book.authors.includes('Neil Gaiman')
))

// filter array 

const odds = numbers.filter(n => n % 2 === 1)
const evens = numbers.filter(n => n % 2 === 0)

const bigNums = numbers.filter(n => n > 25)

const goodBooks = books.filter(
	(book) => book.rating > 4.0
)

const fantasyNovels = books.filter(book => (
	book.genres.includes('fantasy')
))

const nonFictionAndGraphic = books.filter(book => {
	return book.genres.includes('non-fiction') || book.genres.includes('graphic novel') 
})

const query = 'The'

const results = books.filter(book => 
	book.title.toLowerCase().includes(query.toLowerCase())
)

// 'Every' method

const simpleWords = ['dog', 'dig', 'bag', 'tag', 'rug']

const threeLetterWords = simpleWords.every((word) =>
	word.length === 3
)

const areWordsEndingWithG = simpleWords.every((word) => {
	const last = word.length - 1
	return word[last] === 'g' 
})

const areWordsStartingWithD = simpleWords.some((word) => word[0] === 'd')

const areBooksRatingsAboveThreeStars = books.every((book) => book.rating > 3)

const anyTwoAuthors = books.some((book) => book.authors.length === 2)

// Sort method revisited

const prices = [400.24, 3000, 12, 9500, 99.99, 72]

prices.sort() // sort them as if a string so ... 12, 3000, 400.24, 72 , 9500, 99,99

const ascSort = prices.slice().sort((a,b) => a - b)

const ascDesc = prices.slice().sort((a,b) => b - a)  

// we use slice so that we can return a new array, sort will mutate the original array otherwise.

const bookRatingSorted = books.sort((a,b) => a.rating - b.rating)

// Reduce method


// const numbers = [20,21,22,23,24,25,26,27]
const numbersProduct = numbers.reduce((total, currentValue) => {
	return total * currentValue
})

// find the max using reduce

const maxNumberInPrices = prices.reduce((max, currentValue) => {
	if (currentValue > max) return currentValue;
	return max
})

// below is the same but written using Math.max which return the largest number, opposite is Max.min

// const maxNumberInPrices = prices.reduce((max, currentValue) => {
// 	Math.max(max, currentValue)
// })

console.log(maxNumberInPrices)

// using reduce as a tally

const votes = ['y', 'y', 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'y', 'y', 'n', 'absent', 'y', 'y', 'y', 'n']

const votesResults = votes.reduce((tally, currentVote) => {
	if(tally[currentVote]) {
		tally[currentVote]++
	} else {
		tally[currentVote] = 1
	}
	return tally
}, {})

// the empty {} at the bottom is the starting value, which in this case is an empty object. 

// in the first iteration there is nothing in tally ( tally['y'] does not exist) so we can't add an additional 1 to it's 
// total (++ will not work). Therefore the else part kicks in and sets the tally['y'] to 1. The rest get added until we reach 'n' where the cycle repeats. 

// another way to do the above: 

// const differentWayForVotesResults = votes.reduce((tally, currentVote) => {
// 	tally[currentVote] = (tally[currentVote] || 0) + 1;
// 	return tally;
// }, {})

// Reminder fo what books looks like.
// {
// 	title: 'Harry Potter',
// 	authors: ['JK Rowling'],
// 	rating: 4.25,
// 	genres:['fiction', 'fantasy']
// },


organisedBooksOnRating = books.reduce((groupedBooks,book) => {
	const key = Math.floor(book.rating);

	if(!groupedBooks[key]) groupedBooks[key] = [];
	groupedBooks[key].push(book)
	return groupedBooks;
}, {})


// first time it runs it, it checks is there a 'key' of 4 in groups books (There is not since it is an empty object. So we set it to an empty array)
// then we push the book object into the groupedbooks empty array:
// {
// 	4: [] (first it is empty, then the object gets pushed)
// }

//Default params

const greetSomeone = (person, greeting = 'hi', punctuation = '!') => { // default can be an array, object, string etc) order absolutely matters. they come at the end.  
	console.log(`${greeting}, ${person} ${punctuation}`)
} 

// Spread - basically expanding an iterable (array, string, etc ) into a list of arguments in a function call

const randomSpreadNUmbers = [3,4,5,6,7,8] // return '8' the highest number. 

Math.max(...randomSpreadNUmbers) //this will return '8' (we are spreading the numbers into iterable arguements ) == Math.max(3,4,5,6,7,8)

function giveMeFourNumbers(a, b, c, d) {
	console.log('a', a)
	console.log('b', b)
	console.log('c', c)
	console.log('d', d)
}

// we could do something like giveMeFourNumbers(3,4,5,6) - this will work 

const colours = ['red', 'yellow', 'blue', 'pink']

// but if we passed in colours this would not work like above - instead we need to do this: 

console.log(giveMeFourNumbers(...colours)) // they are now 4 arguments!

const str = 'GOAT'

console.log(giveMeFourNumbers(...str)) // string are also iterable. 

// Spread in Array literals - 

const primates = ['monkey', 'gorrila', 'chimp']

const dogs = ['dalmation', 'pitbull', 'corgi']

const dogsAndPrimates = [...dogs, ...primates] // combines both arrays together. 
console.log(dogsAndPrimates)

// another example
console.log([..."abcdefg"])

// Spread in Object literals


//properties are added using spread -> see goatSoccerPlayers. Order does matter, conflicting properties(look it up)
const messi = {
	country: "Argentina",
	club: "PSG"
}

const ronaldo = {
	country: "Portugal",
	club: "Manchester United"
}

const goatSoccerPlayers = {
	...messi,
	championsLeagueWinner: true,
	worldCupWinner: false 
}

console.log(goatSoccerPlayers)

console.log(numbers)
// Rest (looks like spread but is not)
// if can use lots (1,2,5,6,7) or just (2,4), notice no parametres like (firstNumber, secondNumber)
// we are 'spreading out' the numbers.  


function totalSumOfNumbers(...numbers) {
	return numbers.reduce((total, currentVal) =>  {
		return total + currentVal
	})
} 

//use it to collect remaining arguements

function fullNameAndTitles(first, last, ...titles) {
	console.log('first:', first)
	console.log('last:', last)
	console.log('titles:', titles)
}
// fullNameAndTitles('tom', 'jones', 'royal', 'king', 'harry')
// this returns titles in an array with 'royal', 'king', 'harry' along with first and last
const worldCupFrance98Results = ['France', 'Brazil', 'Croatia', 'Netherlands'];

const [winner, runnerUp, third] = worldCupFrance98Results;
const [first, , , fourth] = worldCupFrance98Results
const [gold, ...others] = worldCupFrance98Results // others is an array of brasil, croatia


// Object Destructuring 

const raul = {
	number: 7,
	club: "Real Madrid, Schalke 04",
	country: "Spain",
	worldCups: [1998, 2002, 2006]
}

// const {number, country} = raul; //must exist in object 

const {country: nation} = raul;
const {worldCups: tournaments} = raul;

// use rest to single out something and collect rest in variable

const {number, club, ...other} = raul;

// Nested Desctructuring 

const sportsBrands = [{
	brand: 'Nike',
	country: 'U.S.A.'
},{
	brand: 'Adidas',
	country: 'Germany',
}, {
	brand: 'Asics',
	country: 'Japan'
}]

const [{brand: greekGod}, {country}] = sportsBrands // the commma skips the first element. this can get crazy

const [, germanBrand] = sportsBrands;
const {brand} = germanBrand;

// Param Destructuring

function print({number, club, country}) { // notice the {} we expect an object
	console.log(`${number}, ${club}, ${country}`)
}

const response = [
	'HTTP/1.1',
	'200 OK',
	'application/JSON'
]

function parseResponse([protocol, statusCode, contentType]){  // notice the [], we expect an array 
	console.log(`Status: ${statusCode}`)

}

// Short hand properties - create an object literal when you have variables. 

// const getStats = (arr) => {
// 	const max = Math.max(...arr);
// 	const min = Math.min(...arr);
// 	const sum = arr.reduce((total, r ) => total + r);
// 	const avg = sum / arr.length;
// 	return {
// 		max: max,
// 		min: min,
// 		sum: sum,
// 		avg: avg
// 	}
// }

const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((total, r ) => total + r);
	const avg = sum / arr.length;
	return {
		max,
		min,
		sum,
		avg
	}
}
const restuarantReviews = [2,3,4,5,6];

const stats = getStats(restuarantReviews)

// Computed properties

const role = 'host'
const person = 'Jools Holland'
const roleTwo = 'Director'
const personTwo = 'James Cameron'


// Old way of doing it
// const team = {}
// team[role] = person
// team[roleTwo] = personTwo

const team = {
	[role]: person,
	[roleTwo]: personTwo,
	[1+6+9]: 'sixteen'
}

// old way below
// function addProp(obj, key, value) {
// 	const copy = {...obj};
// 	copy[key] = value;
// 	return copy
// }

// now using computered properties: 

const addProp = (obj, key, value) => {
	return {
		...obj, 
		[key]: value 
	}
};