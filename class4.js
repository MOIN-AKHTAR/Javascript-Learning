// TIMERS 
//  1sec = 1000
setTimeout(function(){
    console.log("SET TIME OUT CALLED")
}, 5000);

// clearInterval(setTimeOutId)

let i=0;
let id;
id=setInterval(function(){
    console.log(++i)
    if(i==3){
      clearInterval(id)
    }
}, 1000);


// +,-,*,/,%,**
// % ====> MODULUS/REMAINDER
console.log(6%4)

// // ** ====> POWER 
// // 2**6=2*2*2*2*2*2=64
console.log(2**6)

// Previous Value
console.log(Math.floor(6.9))

//  Next Value
console.log(Math.ceil(6.1))

console.log(Number(6.888888888888).toFixed(3))

// Math.random()
console.log(Math.floor(Math.random()*1000))

