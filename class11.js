// Objects
let std1={
    name: "Asad",
    age: 20,
    class: "Matric"
}
let std2={
    name: "Ali",
    age: 30,
    class: "Matric"
}

// Getting Property Method 1
console.log(std1.name)
console.log(std2.name)

// Getting Property Method 2
console.log(std1["age"]) 
console.log(std2["age"])

// Adding or updating keys
std1.fullName= "Asad Ali"
std1["fatherName"]= "Muhammad Ali"
std1.age=44
console.log(std1.rollNo)

// Getting list of keys
console.log(Object.keys(std1))
// Getting list of values
console.log(Object.values(std1))
// Getting keys and values
console.log(Object.entries(std1))


console.log(std1)
// Deleting keys
delete std1.name

console.log(std1)

// Yeh object ko freez kar day ga jis ki wajah say na koi property add ho skay gi na update or na remove ho gi
Object.freeze(std1)
std1.name= "Hello"
delete std1.age
console.log(std1)
