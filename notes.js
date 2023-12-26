// console.log("Hello World");
// .push() .pop() 
// var num=Math.random() * 10;
// num=Math.ceil(num)
// console.log(num);
// .concat() .charAt() .indexOf() .split() .toUpperCase()
// Remember to use the object literal syntax: {}.
//Remember to use the array literal syntax: [].
// .typeof()
// refernce error when a variable is not defined
// var letters = "abc";
// var matchResult = letters.match(/a/);
// console.log(matchResult);
// try {
//     console.log(a+b);
//     // throw new ReferenceError();
// } catch(err){
//     console.log(err);
//     console.log("An error occured");
// }
// console.log("The program execution doesnt stop")
// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing
// two variables, but this operator also checks datatype and compares two values

// example of functional programming using a program that does currency conversions
// In functional programming, data and functions that operate on it are clearly separated, not combined inside objects.
// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 1.2;
// function convertCurrency(amount,rate){
//     return amount*rate;
// }
// currencyTwo=convertCurrency(currencyOne,exchangeRate);
// console.log(currencyTwo);

// recursive functions

//Week 3 Assignment 1
// Task 1: Build a function-based console log message generator
// function consoleStyler(color,background,fontSize,txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`;
//     style += `background: ${background};`;
//     style += `font-size:${fontSize};`;
//     console.log(message, style);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size:50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');
// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color,background,fontSize,txt,reason) {
//     consoleStyler(color, background, fontSize, txt);  
//     celebrateStyler(reason);
// }
// // Call styleAndCelebrate
// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');





// // Task 1: Build a function-based console log message generator
// function consoleStyler(color,background,fontSize,txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`;
//     style += `background: ${background};`;
//     style += `font-size:${fontSize};`;
//     console.log(message, style);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size:50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');
// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color,background,fontSize,txt,reason) {
//     consoleStyler(color, background, fontSize, txt);  
//     celebrateStyler(reason);
// }
// // Call styleAndCelebrate
// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

//With Functional Programming
// var shoes = 100;
// var stateTax = 1.2;
// function totalPrice(shoes,tax){
//     return shoes*tax;
// }
// var toPay = totalPrice(shoes,stateTax);
// console.log(toPay);
// Same example with OOP
// var purchase1 = {
//     shoes:prompt("Enter Shoes Price: "),
//     stateTax:1.2,
//     totalPrce : function(){
//         var calculation = purchase1.shoes * purchase1.stateTax;
//         console.log(calculation);
//     }
// }
// purchase1.totalPrce();
// Another OOP example
// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log(calculation);
//     }
// }
// purchase2.totalPrice();

//The constructor function is called when you create new objects of a particular class. This process is called instantiation.
//When you use the new keyword followed by the class name and optionally some arguments, the constructor function is automatically
//invoked with those arguments.
//Building the object: Based on the provided arguments, the constructor function assigns values to the object's properties,
//effectively building a new object with those specific characteristics.
// greet() is a method of the Person class.
// class Person {
//     constructor(name, age) {
//       this.name = name; // Initializes name property
//       this.age = age; // Initializes age property
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   // Create a new object using the Person class
//   const person1 = new Person("John", 30);
  
//   // Access and print object properties
//   console.log(`Name: ${person1.name}`); // Output: Name: John
//   console.log(`Age: ${person1.age}`); // Output: Age: 30
  
//   // Call the greet method
//   person1.greet(); // Output: Hello, my name is John and I am 30 years old.  

//Classes
// class Car{
//     constructor(color, speed){
//         this.color = color;
//         this.speed = speed;
//     }
//     turboOn(){
//         console.log("turbo is on")
//     }
// }
// const car1 = new Car("red",120);
// console.log(car1);
// car1.turboOn();

// Iteration in arrays
// const colors = ['red','orange','yellow']
// for (var color of colors) {
//     console.log(color);
// }

// const car2 = {
//     speed: 200,
//     color: "red"
// }
// console.log(Object.keys(car2)); // ['speed','color']

// const car3 = {
//     speed: 300,
//     color: "yellow"
// }
// console.log(Object.values(car3)); // [300, 'yellow']

// const car4 = {
//     speed: 400,
//     color: 'magenta'
// }
// console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

// Example:
// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( const key of Object.keys(clothingItem) ) {
//     console.log(key, ":", clothingItem[key])
// }

//for-in loop is unreliable as it also iterates over the prototype of object
//whereas for-of is reliable

//template literal
//console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
// let first = `Hey`;
// let second = `world`;
// console.log(`${first}, How are you ${second}`);

// Data Structures: Object, Array, Map, Set
//Map
// let bestBoxers = new Map();
// bestBoxers.set("hey", "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");
// console.log(bestBoxers);

//.forEach()
// const fruits = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }
// fruits.forEach(appendIndex);

// .filter()
// const nums = [0,10,20,30,40,50];
// nums.filter( function(num) {
//     return num > 20;
// })

// .map()
// [0,10,20,30,40,50].map( function(num) {
//     return num / 10
// })

//Convert object to array
// const result = [];
// const drone = {
//     speed: 100,
//     color: 'yellow'
// }
// const droneKeys = Object.keys(drone);
// droneKeys.forEach( function(key) {
//     result.push(key, drone[key])
// })
// console.log(result)

//The spread operator allows you to pass all array elements into a function without having to type them all individually
// The rest operator allows you to take items from an array and use them to create a separate sub-array. 

// Refactoring is updating code without affecting the result it produces

//Types of Testing
// e2e
// Integration testing
// Unit testing 

//Jest
// Mocking in Jest
// Snapshot Testing

// Traditional function expression
//const add = function(x, y) {
//    return x + y;
//};
// Arrow function
//const addArrow = (x, y) => x + y;

//TDD (Test-Driven Development)
// Implemented in red, green and refactor cycle