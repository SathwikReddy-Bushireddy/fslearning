console.log("Hello Sathwik");
// Variables declaration
var name = "Sathwik"; //var old version of variable declaration function scope
var age = 25;
let city = "Bangalore"; //let is the new version of variable declaration - blockscope
const country = "India"; //const is used for constant values that cannot be changed //block scope

//Data types
let isStudent = true;      //boolean    
let score = 85.5;        //number
let hobbies = ["Reading", "Traveling", "Cooking"]; //array
let person = {          //object
    name: "Sathwik",
    age: 25,
    city: "Bangalore"
};      
let undefinedVariable; //undefined
let nullVariable = null; //

const ageOfSathwik = 20;

ageOfSathwik = 21; // This will throw an error because ageOfSathwik is a constant and cannot be reassigned;

const per = {
    name: "Mani Krishna",
    age : 20,
    city : "Hyderabad"
};
per.age = 21;
console.log(per.age); // This will print 21 because we can change the properties of a constant object, but we cannot reassign the object itself.

//Functions
function greet(name) {
    console.log("Inside the greet function");
    return "Hello, " + name + "!";
}
console.log(greet("Sathwik")); // This will print "Hello, Sathwik!"

const mul = function(a,b) {
    return a*b;
} 
const ad = function add(a,b){
    return a+b;
}
console.log(ad(5,3)); // This will print 15
console.log(ad(5,3)); // This will print 8  

// Arrow function
const sub = (a,b)=> {
    return a-b;
}

const greet = (name)=>"Hello, " + name + "!";


const div = (a,b)=> a/b;

const sq = x => x*x;
const shr = ()=> console.log("Hello from arrow function with no parameters");