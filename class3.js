// Default Values For Function Parameters
const newFunc=function(a=0,b=0){
    console.log(a+b)
}

newFunc(1)


// REST OPERATOR
const restFunc=function(a,b,c,...e){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(e)
}

restFunc(1,2,3,4,5,6,7,8,9)

// INCREMENT OPERATOR
let a=1;
a++  // 2
a=a+1 // 3
console.log("A ====>")
console.log(a)
a++  // 4
console.log(a)
a+=2  // 6
a=a+2  // 8
console.log(a)

// DECREMENT OPERATOR
let b=1;
b--;  // 0
console.log("B =====>")
console.log(b)


// PRE INCREMENT VS POST INCREMENT
// POST INCREMENT
let c=4;
console.log(c++)
console.log(c)

// PRE INCREMENT
let d=5
console.log(++d)
console.log(d)




