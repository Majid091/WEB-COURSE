console.log("before asynchronous code");

setTimeout(()=>{
    console.log("the code having asynchronous behavior");
}, 4000);

console.log("after asynchronous code")