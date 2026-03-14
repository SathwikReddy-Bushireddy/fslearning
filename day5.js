// callbacks, promises, async-await, setTimeout, ErrorHandling, 
// Fetch API, DOM,  Local Storage, Event Bubbling & Capturing

//callBacks



// Async CallBack


// CallBack with Array Function


// CallBack HELL


// Promises


// Async - Await

// Error Handling

//Fetch API

// DOM

// Local Storage & Cookies


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
