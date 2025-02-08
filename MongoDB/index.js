const express = require('express');
const app = express();
const users = require('./routes/users');
const port = 3000;
const database = require('./db');

app.use(express.json());
database();
app.use('/api', users)

app.get('/', (req, res)=>{
    res.send("hello");
})





app.listen(port, ()=>{
    console.log(`the app will be running on port ${port}`)
});
