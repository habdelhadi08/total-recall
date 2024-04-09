// variables & Data types
// variables
const myName = "Heba"
console.log(myName)
let favoriteLanguage = "Python"
favoriteLanguage = "Javascript"
console.log (favoriteLanguage)
let newFavoriteLanguage= "JavaScript"
console.log (newFavoriteLanguage)
const message = myName === 'Heba' ? 'Welcome!' : 'try again!';
console.log(message);
const message1 = favoriteLanguage === 'Python' ? 'Welcome!' : 'try again!';
console.log(message1);

//strings
let firstVariable = "Hello World"
    firstVariable = 20
let secondVariable = 20
    secondVariable = "Welcome"
console.log(firstVariable)
const yourName = "Heba"
console.log("Hello, my name is "+ yourName)

// Booleans
//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
const name = e === 'Kevin' ? 'true' : 'false!';
console.log(name);
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true)
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a < a + d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm
let animal = "cow"
if (animal==="cow"){
console.log('you are a cow');
 } else {
        console.log("Hey! You're not a cow");
     }
//Driver's Ed
let age=20
if(age>=16){
    console.log("Here are the keys!")
}
else{
    console.log("Sorry, you're too young.")
}
//Arrays & Control flow
// Biggie Smalls
let userAge = 40
if(userAge < 100){
    console.log("little number")
}
else{
  console.log("big number")
}
// Monkey in the Middle
let numberInput =5
if (numberInput<5){
    console.log("little number")
}
else if(numberInput>10){
    console.log("big number")
}
else{
    console.log("monkey")
}
//II. Loops
//Remember: USE let when you initialize your for loops!

//This is GOOD: for(let i = 0; i < 100; i++)

//This is NO GOOD: for(i = 0; i < 100; i++)

//The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
//Write a loop that will print out all the numbers from 10 up to and including 400
//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 0; i <= 10; i++){
console.log(i)
 };
 for (let i = 10; i <= 400; i++){
    console.log(i)
     };
    //  another way to answer
    //  let x=10
    //  while(x>= 10){
    //      x++;
    //      if(x>400){
    //          break;
    //      }
    //      console.log(x)  } 
//for (let i = 12; i <= 4000; i+3)
 //{console.log(i) };
 //Get even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "is an even number"
for (let i= 0; i <= 100; i++){
console.log(`countdown is: ${i}`)}
for (let i= 0; i <= 100; i++)
if ( i % 2 ===0){
     console.log(`is an even number: ${i}`)}

//For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five Example Output:
//I found a 5. High five!
//I found a 10. High five!
for (let i= 0; i <= 100; i++){
console.log(`I found a <number>: ${i}`)}
for (let i= 0; i <= 100; i*5)
{ console.log("I found a ${i}. High five!")}

              




