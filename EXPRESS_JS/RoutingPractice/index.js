const express = require('express');
const app = express();
const port = 5000;


//import router file here
const route = require('./Routing/post')

//load file into the application
app.use('/route', route)

app.listen(port, ()=>{
    console.log(`example app is listenin on port:${port}`);
})