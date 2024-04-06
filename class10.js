// foreach,push,pop,shift,unshift,map,filte,concat,reduce
let a=[1,2,3,4,5,6];
// Push ====>  Item ko end of array add kata hai
a.push(7)
a.push(8)
a.push(9)
// ForEach ====> Visit karay ga har item ko aik baar
a.forEach(function(i){
    console.log(i)
    })

console.log(a)
// Pop ====>  Item ko end of array say remove kata hai
a.pop();

a.forEach(function(i){
    console.log(i)
    })

console.log(a)

a.pop()
console.log(a)


let b=[1,2,3,4,5,6];
// Unshift ====>  Item ko start of array add kata hai
b.unshift(0)
console.log(b)
// Shift ====>  Item ko start of array say remove kata hai
b.shift()
console.log(b)
b.shift()
console.log(b)

let c=[1,2,3,4,5,6]
// [2,4,6,8,10,12]
let d=c.map(function(i,index) {
    console.log("NUMBER ",i)
    console.log("Position ",index)
    return 3+i
})
console.log(d)


let e=[1,2,3,4,5,6,7,8]

let f=e.filter(function(i) {
    return i==4
})
console.log(f)

// concat =====> 2 arrays ko jodta hai aik array main
let g=[1,2,3,4,5,6]
let h=[7,8,9,10]
let j=[11,12,13]
let i=h.concat(g,j)
console.log(i)

let k=["Orange","Guava","Strawberry","WaterMelon","Orange","Apple","Grapes","Pineapple","Banana","Pomigranate"]
//        0        1         2            3           4       5        6         7         8           9
console.log(k.slice(3,7))
console.log(k.slice(3))
console.log(k.slice(-3))

// reduce
const sum=k.reduce(function(acc,item){
   return acc+ item;
},0)
console.log(sum)
console.log(k.reverse())






