// CONTINUE, BREAK;
// CONTINUE ====> Skip statements if executed but will not stop loop
for (let index = 0; index < 10; index++) {
    if(index%2!==0) continue
    console.log(index)
}

// BREAK;
// BREAK ====> If executed it will stop loop
for (let index = 0; index < 10; index++) {
    if(index==7) break;
    console.log(index)
}
// console.log("HELLO WORLD")
