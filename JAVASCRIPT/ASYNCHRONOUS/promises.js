//1. we just used the flag to check the execution of code......

// let promise1 = new Promise((resolve, reject)=>{
//     let flag = false;
//     if(flag){
//         resolve("the code execute successfully.......");
//     }
//     else{
//         reject("the code does not execute successfully......");
//     }
// })
// promise1.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.error(error)
// })

//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//


//2. passing the timeout function inside the promise multiple promises
// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, "first");
// })

// let promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 5000, "second");
// })

// let promise4 = new Promise((resolve, reject)=>{
//     setTimeout(reject, 3000, "third");
// })

// Promise.all([promise2,promise3,promise4])
// .then((values)=>{
//     console.log(values)
// }).catch((error)=>{
//     console.error(error);
    
// })



//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//



//3. promises chaining
let promiseee = new Promise((resolve, reject)=>{
    let flag = true;
    if(flag){
        resolve(10);
    }
    else{
        reject(-1);
    }
})

promiseee.then((msg)=>{
    console.log(msg);
    return 20;
}).then((msg)=>{
    console.log(msg);
    return 30;
}).then((msg)=>{
    console.log(msg);
    return 40;
}).then((msg)=>{
    console.log(msg)
    return 50;
}).then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.error(error);
});