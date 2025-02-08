const express = require('express')
const app = express()
const port = 3000;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//creating middlewares
//middlewares are of different types 
//1. InBuilt middle -->the middleware that application provides us like --> app.json()etc
//2. AppLevel --> in this we create middleware inside in the application
//3. errorhandling --> in this middleware we check some error handling
//4. router --> this middleware is same as app level middleware but in this we create 
// another router means we make another file and there we make the middleware and 
// then we use that middleware in our application by accessing it in our application
//5. Third party--> in this type of middleware we use some third party middleware
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//1. InBuilt middleware
// const jsonmw = express.json();
// app.use(jsonmw)

// app.get('/', (req, res)=>{
//     console.log(req.body);
//     res.send("hello");
// })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//2. App Level middleware

// const loggingUser = function(req, res, next){
//     console.log("inside logging user Auth")
//     next()
// }

// const userAuthMiddleware = function(req, res, next){
//     console.log("inside user Auth MiddleWare")
//     next()
// }

// const userValidation = function(req, res, next){
//     console.log("inside user validation middleware");
//     next()
// }

// app.use(loggingUser)
// app.use(userAuthMiddleware)
// app.use(userValidation)


// app.get('/', (req, res)=>{
//     console.log("this is app get call......")
//     res.send("hello");
// })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//03. routing middleware

const route = require("./routes/route");
app.use('/api', route);


app.get("/", (req, res)=>{
    console.log("i am route handler");
    res.send("kya sab kuch teek tak ho raha hy");
})


app.listen(port, ()=>{
    console.log(`this app is running on port: ${port}`);
})