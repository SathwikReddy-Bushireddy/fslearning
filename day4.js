/* Scope , Closure, Hoisting, This KEy word, Call Stack and Event Loop */
// Scope defines where variables and functions are accessible in the code. It can be global or local. Global scope means that the variable or function is accessible from anywhere in the code, while local scope means that it is only accessible within a specific block of code, such as a function or a loop.

// 1. Code Block Scope
{
    let x = 10; 
    console.log(x); // Output: 10
}
//console.log(x); 
// 2. Function Scope
// function myFunction() {
//     let y = 20;
//     console.log(y); // Output: 20
// }
// myFunction();
// console.log(y);
// 3. Global Scope
let z = 30;
function myFunc(){
    let y = 20;
    {
        let a = 10;
        console.log(a+y); // Output: 30
    }
    console.log(a); 
    console.log(y);
    console.log(z);
}
console.log(z); // Output: 30

// Closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned. This allows the inner function to "remember" the environment in which it was created, enabling powerful programming patterns such as data encapsulation and function factories.

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter();
counter();
counter();

//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

function hoistingExample() {
    console.log(hoistedVar);
}
hoistingExample(); // Output: undefined
var hoistedVar = 10;
hoistingExample();


//var it is hoisting with undefined, let and const are not hoisted. They are in a "temporal dead zone" until they are declared, which means you cannot access them before their declaration without causing a ReferenceError.
// This KeyWord refers to the context in which a function is executed. It can refer to different objects depending on how the function is called. In a regular function, this refers to the global object (window in browsers). In an object method, this refers to the object itself. In an arrow function, this refers to the enclosing lexical context.

const person = {
    name: 'Mani Krishna',
    greet(){
        console.log(`Hello, my name is ${this.name}`); // printf("%d",ans);
    }
}
person.greet(); // Output: Hello, my name is Mani Krishna


const person1 = {
    name : "Sathwik",
    greet : ()=> console.log(this.name)
}
const person2 = {
    name : "Mani Krishna"
}
//person2.greet = person1.greet;
//person2.greet(); // Output: undefined

// In the above example, the arrow function does not have its own this context, so it inherits this from the enclosing scope, which is the global scope. Since there is no name property in the global scope, this.name evaluates to undefined.

// Call Stack is a data structure that keeps track of the function calls in a program. It follows the Last In, First Out (LIFO) principle, meaning that the most recently called function is the first one to be executed. When a function is called, it is added to the top of the call stack, and when it returns, it is removed from the stack. This allows JavaScript to manage function execution and handle nested function calls effectively.

// Event Loop is a mechanism that allows JavaScript to perform non-blocking 
// operations by offloading tasks to the browser's event handling system. 
// It continuously checks the call stack and the task queue. 
// If the call stack is empty, it takes the first task from the task queue and 
// pushes it onto the call stack for execution. 
// This allows JavaScript to handle asynchronous operations, such as user interactions, network requests, and timers, without blocking the main thread of execution.

console.log("Start");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 3000);
console.log("End");

//Callback 
console.log("Start");
for(let i=0; i<100000000000; i++){}
console.log("End");


function greet(name,callback){
    console.log(`Hello, ${name}`);
    callback();
}
function finished(){
    console.log("Finished greeting");
}
greet("Sathwik",finished);