// callbacks, promises, async-await, setTimeout, ErrorHandling, 
// Fetch API, DOM,  Local Storage, Event Bubbling & Capturing

// Callbacks

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

greet("Sathwik",()=>{
    console.log("Welcome to JavaScript!");
})

// // Async callback

// // Introducing setTimeout

console.log("Start");
setTimeout(()=>{
    console.log("Inside setTimeout block");
}, 2000);
console.log("End");

// Callback with Array Functions

const numbers = [1, 2, 3, 4, 5];
numbers.map(function(num){
    return num * 2;
});

const sqnum = numbers.map(num => num * num);


// Callback HELL 

setTimeout(() => {
    console.log("First callback");
    setTimeout(() => {
        console.log("Second callback");
        setTimeout(() => {
            console.log("Third callback");
        }, 1000);
    }, 1000);
}   , 1000);


// /Promises - Handling Asynchronous Operations

//  represnts a value that will be available in the future, either resolved or rejected.

// promises - 3 states - pending, resolved, rejected

const myPromise = new Promise((resolve, reject) => {
    const success = false;
    if(success){
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }   
});

myPromise.then(result=>console.log(result))
.catch(error => console.log(error))

// Async - Await

// Async Await is just a cleaner way to write a Promise.

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

async function getData(){
    const response = await fetch("https://jsonplaceholder..com/posts");
    const data = await response.json();
    console.log(data);
}

getData();



//ErroHandling
//Try & Catch

async function getData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicod.com/postss");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data: ", error);
    }
}
getData();


//Fetch API
// 1.Fetch reques
// 2.server response
// 3.converting to JSON
// 4. use data

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error fetching data: ", error));

// DOM - Document Object Model
// It tells what happens to JS through HTML
// introduces Interactions to HTML

const title = document.getElementById("title");
const changeTitleBtn = document.getElementById("ChangeT").addEventListener("click",()=>{
    title.textContent = "Sathwik & Team"
})


//Event Bubbling & Capturing

// Event Bubbling - When an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. This is called bubbling.
//Event Capturing - When an event occurs on an element, it first runs the handlers on the ancestors from the root down to the target element. This is called capturing.

// Example of Event Bubbling
document.getElementById("title").addEventListener("click",()=>{
    console.log("Title clicked");
});
//Example of Event Capturing
document.getElementById("title").addEventListener("click",()=>{
    console.log("Title clicked - Capturing");
}, true);


//Local Storage & Cookies

// Local Storage - Stored in browser as key-value pairs
// cookies - temporary storage of data
localStorage.setItem("name", "Sathwik");
const name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("name");
localStorage.clear();



//callbackhell
function getUser (callback){
    setTimeout(()=>{
        console.log("User data fetched");
        callback({id:1, name:"Sathwik"});
    },1000);
}
function getPosts (userId,callback){
    setTimeout(()=>{
        console.log("Posts fetched");
        callback(["posts1,posts2"]);
    },1000);
}
function getComments (posts,callback){
    setTimeout(()=>{
        console.log("Comments fetched");
        callback(["comments1,comment2"]);
    },1000);
}

getUser((user)=>{
    getPosts(user.id,(posts)=>{
        getComments(posts[0],(comments)=>{
            console.log(comments);
        })
    })
})


// callback HELL -> promises
function getUser (callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("User data fetched");
        resolve({id:1, name:"Sathwik"});
    },1000);
})
}
function getPosts (userId,callback){
    return new Promise((reolve)=>{
        setTimeout(()=>{
            console.log("Posts fetched");
            resolve(["posts1,posts2"]);
        },1000);
    })
}
function getComments (posts,callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Comments fetched");
            resolve(["comments1,comment2"]);
        },1000);
    })
}

getUser()
.then(user=>getPosts(user.id))
.then(posts=>getComments(posts[0]))
.then(comments=>console.log(comments))

//callBack HELL -> Async/Await

async function getUserData(){
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0]);

    console.log(comments);
}

getUserData();

// callbacks H/W
function checkProduct(callback){
    setTimeout(()=>{
        console.log("Checking product availability...");
        callback();
    },2000);
}
function processPayment(callback){
    setTimeout(()=>{
        console.log("Payment Successful!");
        callback();
    },2000);
}
function shipProduct(callback){
    setTimeout(()=>{
        console.log("Shipping Product!");
        callback();
    },2000);
}

checkProduct(()=>{
    processPayment(()=>{
        shipProduct(()=>{
            console.log("Order Completed!");
        });
    });
});

// callbacks -> promises H/W

function checkProduct(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Checking product availability...");
            resolve();
        },2000);
    })
}
function processPayment(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Payment Successful!");
            resolve();
        },2000);
    })
}
function shipProduct(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Shipping Product!");
            resolve();
        },2000);
    })
}

checkProduct()
.then(()=> processPayment)
.then(()=> shipProduct)
.then(()=>{
    console.log("Order Completed");
})


// Promises -> Async/Await H/W
async function checkProduct() {
    await checkProduct();
    await processPayment();
    await shipProduct();
    console.log("Order Completed");
}
