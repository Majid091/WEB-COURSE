const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req, res)=>{
    //res.send("this is get response...")
    res.sendFile('./index.html', {root: __dirname})
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


app.listen(port, ()=>{
    console.log(`example app is listenin on port:${port}`);
})