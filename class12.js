// Promise, Async Await
// Synchronous VS Asynchronous Code
// https://jsonplaceholder.typicode.com/
let a=10;
let b= 20;
setTimeout(() => {
    console.log("HELLO")
}, 5000);
console.log(a)
console.log(b)


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        console.log("RETURNED FROM SERVER")
        return data.json()
            })
    .then(function(data){
       console.log(data)
    })
    .catch(function(error){
   console.log(error)
        })

console.log("ANOTHER HELLO")

// COMPUTER  ---------->     SERVER