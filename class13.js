// Async Await
async function getData(){
try {
    const jsonData=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data= await jsonData.json()
    console.log(data)
} catch (error) {
    console.log(error)
}
}

getData()