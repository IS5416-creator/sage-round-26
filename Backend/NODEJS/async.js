// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res)=>res.json())
// .then((data)=>console.log(data))

// console.log("hi")
async function getData(){
    const data =await fetch("https://jsonplaceholder.typicode.com/posts/1")
    console.log(await data.json())
    console.log("hi")
}

getData()