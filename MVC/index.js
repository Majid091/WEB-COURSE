const express = require("express");
const app = express();
const port  = 3000;
const connectDB = require('./DBConfig/db');
const productRoutes = require('./routes/productRoutes');

connectDB();
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("hello how are you!");
})
app.use('/api', productRoutes)

app.listen(port, ()=>{
    console.log(`this app is running on port ${port}`);
})