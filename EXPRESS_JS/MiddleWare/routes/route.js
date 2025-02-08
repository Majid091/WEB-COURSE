const express = require('express');
const route = express();


const userAuth = function(req, res, next){
    //console.log("this is user auth middleware");

    req.user = {userId:12, role:"admin"}

    if(req.user){
        next();
    }
    else{
        res.json({
            success: false,
            message: "not a valid user"
        })
    }
}

const isStudent = function(req, res, next){
    console.log("this is student validation middleware");
    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
            success : false,
            message : "Access denied: you are not a valid student"
        })
    }
    
}

const isAdmin = function(req, res, next){
    console.log("this is admin validation middleware");
    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success : false,
            message : "Access Denied: you are not an admin"
        })
    }
}


route.get('/student',userAuth, isStudent,(req, res)=>{
    console.log("i am inside student middleware")
    res.send("students specific page")
})

route.get('/admin', userAuth, isAdmin, (req,res)=>{
    console.log("i am inside admin middleware");
    res.send("admin specific page")
})


module.exports = route