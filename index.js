console.log("Harish Raajaa R V")


// setTimeout(()=>{ 
//     console.log("Welcome to GeeksforGeeks!"); 
// }, 2000); 
  
// console.log("Hi!")




let Promise1= new Promise((resolve,reject)=>{
    resolve("Promise-1 Pass")
})

let Promise2= new Promise((resolve,reject)=>{
    resolve("Promise-2 Pass")
})

let Promise3= new Promise((resolve,reject)=>{
    resolve("Promise-3 Pass")
})

let Promise4= new Promise((resolve,reject)=>{
    resolve("Promise-4 Pass")
})

let Promise5= new Promise((resolve,reject)=>{
    resolve("Promise-5 Pass")
})


// Promise1
// .then((val)=>{
//     console.log(val)
//     Promise2.then((val)=>{
//         console.log(val)
//     })
// })


//Async and Await
//This makes easier to write the Promises

async function getData(){

    try {
        let res=await fetch("https://restcountries.com/v3.1/all")
        let data= await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)   
    }

}

getData()