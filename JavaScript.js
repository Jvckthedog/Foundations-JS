function favoriteAnimal (animal) {
    return animal + " is my best friend!"
    // dont forget the space before "is"
}

console.log(favoriteAnimal('Jack'))

// MDN examples of functions
const myText = "i am a string";
const newString = myText.replace("string", "sausage");
console.log(newString); 

// example 1 
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join (" ");
console.log(madeAString);

//example 2
const myNumber = Math.random();
console.log(myNumber);

// invoking a function 
function myFunction () {
	console.log("hello");
	}
	
	myFunction();

//optional parameters
const love = ["I", "love", "chocolate", "frogs"];
const madeAString2 = love.join(" ");
console.log(madeAString2); // i love chocolate frogs 

const loveAnother = love.join();
console.log(loveAnother); // I,love,chocolate,frogs

//supporting optional parameters
function hello(name = "Chris") {
    console.log(`hello ${name}!`);
}
  
hello("Ari");
hello();

//nameless functions
(function () {
	alert("hello");
});