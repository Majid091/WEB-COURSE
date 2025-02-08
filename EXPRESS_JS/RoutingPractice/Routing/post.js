const express = require('express');
const router = express.Router();
const app = express();


app.get('/',(req, res)=>{
    res.send("this is get response...")
    //res.sendFile('./index.html', {root: __dirname})
});

app.post('/items',(req, res)=>{
    //res.send("this is post response.......")
    res.json({x:"majid", y:"khan", z:3})
});

app.put('/items/:id',(req, res)=>{
    res.send("this is put response!")
});

app.delete('/items/:id', (req, res)=>{
    res.send("this is delete response!!");
});

module.exports = router