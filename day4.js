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