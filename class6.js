// IF ELSE
if(3<4){
   console.log("IF BLOCK RUN")
}else{
    console.log("ELSE BLOCK RUN")
}



// >=80  A+ ,>=70&&<=79.9 A, >=60&&<=69.9 B ,>=50&&<=59.9 C ,<50 FAIL
let percentage=30;
if(percentage>=80){
    console.log("A+")
}
else if(percentage>=70&&percentage<=79.9){ 
    console.log("A")
}
else if(percentage>=60&&percentage<=69.9){
    console.log("B")
}
else if(percentage>=50&&percentage<=59.9){
    console.log("C")
}else{
    console.log("FAIL")
}




// IF ELSEIF
let str="A"
if(str==="a"){
    console.log("FIRST BLOCK RUN")
}
else if(str==="b"){
    console.log("SECOND BLOCK RUN")
}else if(str==="A"){
    console.log("THIRD BLOCK RUN")
}else{
    console.log("ELSE BLOCK RUN")
}


// SWITH CASE
let strr="WORLD__"
switch (strr) {
    case "WORLD":{
        console.log("WORLD CODE BLOCK")
    }  
        break;
    case "HELLO":{
        console.log("HELLO CODE BLOCK")
    }
    break;
    default:{
        console.log("DEFAULT CODE BLOCK")
    }
}