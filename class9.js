// Arrays.
let a=[1,2,3,4,5,"String",true,5]
//     0 1 2 3 4   5        6  7

for (let index = 0; index < a.length; index++) {
    console.log(a[index])
}
    
console.log(a[5])
console.log(a.length)
console.log(a.indexOf(5))
console.log(a.lastIndexOf(5))


let index=0;
while (index<a.length) {
    console.log(a[index])
    index++ 
}

let i=0;
do{
    console.log(a[index])
    i++ 
}while(i<a.length)