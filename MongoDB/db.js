const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async ()=>{
    
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI,
            {useNewUrlParser: true});
        console.log("MogoDB is connected Successfully");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;