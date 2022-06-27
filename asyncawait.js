// //async await 
// console.log('person1:shows Tickets')
// console.log('person2:shows Tickets')
// const promiseBringingTickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket")

//     },2000)
// })


// const hungry=promiseBringingTickets.then((t)=>{
//     console.log("Husband:We should go in")
//     console.log("Wife:No,Iam hungry")
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))




// })
// const popcorn=hungry.then((t)=>{
//     console.log("Husband:We should go in")
//     console.log("Wife:No,I need popcorn with butter")
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))




// })
// popcorn.then((t)=>{
//     console.log("Show Tickets",`${t}`)
// })
// console.log('person4:shows Tickets')
// console.log('person5:shows Tickets')


//making everything as a async function using promise without then and by using let to store 
//async await makes the code more readable than promises with then 

// console.log('person1:shows Tickets')
// console.log('person2:shows Tickets')

// //async function 
// const premovie=async()=>{//async function always returns a promise and will be stored inside a variable  
//     const promiseBringingTickets=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("ticket")
        
//             },2000)
//         })
//     const hungry=new Promise((resolve,reject)=>resolve(`popcorn`))
//     const addbutter=new Promise((resolve,reject)=>resolve(`butter`))
//     const getColdDrinks=new Promise((resolve,reject)=>resolve(`drinks`))
        
//     let ticket=await promiseBringingTickets//await can always be called inside async and let can be used instead of then in promise with async await 
//     console.log(`Wife:I have the ${ticket}`)
//     console.log("Husband:We should go in")
//     console.log("Wife:No,Iam hungry")
//     let popcorn=await hungry
//     console.log(`Husband:I got some ${popcorn}`)
//     console.log("Husband:We should go in")
//     console.log("Wife:No,I need butter to popcorn")
//     let butter=await addbutter
//     console.log(`Husband:I got some ${butter} on popcorn`)
//     console.log(`Husband:Anything else!!`)
//     console.log(`Wife:I need cold drinks`)
//     let drinks=await getColdDrinks
//     console.log(`Husband:I got some ${drinks} for you`)
//     console.log(`Husband:Anything else darling!!`)
//     console.log(`Wife:Thanks,Thats it!!Let's get in!`)


        

//     return ticket
//     }      

// premovie().then((m)=>console.log(`person3:shows ${m}`))//promise called with then 


// console.log('person4:shows Tickets')
// console.log('person5:shows Tickets')

//________________________________________________________________________

//promise.all=using arrays
//if things are not dependant on each other then go with promise.all--resolve everything together 
//  console.log('person1:shows Tickets')
//  console.log('person2:shows Tickets')

// const premovie=async()=>{//async function always returns a promise and will be stored inside a variable  
//     const promiseBringingTickets=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("ticket")
        
//             },2000)
//         })
//     const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
//     const getCandy=new Promise((resolve,reject)=>resolve(`candy`))
//     const getCoke=new Promise((resolve,reject)=>resolve(`coke`))
        
//     let ticket=await promiseBringingTickets//await can always be called inside async and let can be used instead of then in promise with async await 
    

//     let [popcorn,candy,coke] =await Promise.all([getPopcorn,getCandy,getCoke])
//     console.log(`${popcorn},${candy},${coke}`)
    


    


        

//     return ticket
//     }      

// premovie().then((m)=>console.log(`person3:shows ${m}`))//promise called with then 


// console.log('person4:shows Tickets')
// console.log('person5:shows Tickets')

//Error handling with async await --using try catch as in async await regular promise is not used as .then and .catch
//rejection 

// console.log('person1:shows Tickets')
//  console.log('person2:shows Tickets')

// const premovie=async()=>{//async function always returns a promise and will be stored inside a variable  
//     const promiseBringingTickets=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 reject("ticket")
        
//             },2000)
//         })
//         let ticket
//         try{
//             ticket=await promiseBringingTickets//await can always be called inside async and let can be used instead of then in promise with async await 
//         }catch(err){
//             ticket='Sad Face'

//         }

//     return ticket
//     }      

// premovie().then((m)=>console.log(`person3:shows ${m}`))//promise called with then 


// console.log('person4:shows Tickets')
// console.log('person5:shows Tickets')

//real time example


const testuserForm=async()=>{//async function always returns a promise and will be stored inside a variable  
    const loadUserForm=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("page loaded")
        
        },2000)
    })
    const enterUsername=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("User Entered")
        
        },2000)
    })
    const verifyUserDetails=()=>{
        console.log("the user details entered are correct")

    }
    await loadUserForm;
    await enterUsername;
    const testResult=verifyUserDetails()//this takes part after loaduser and enter user input is taken 
   
    

return testResult
}      

testuserForm().then((m)=>console.log(`shows ${m}`))//promise called with then 





