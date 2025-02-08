const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

//router.use(express.json());


//CRUD Operations

//READ the data....

router.get('/users', async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

//post data

router.post('/users', async(req, res)=>{
    try{
        const {name, age, weight} = req.body;
        const newUser = new User({name, age, weight});
        await newUser.save();
        res.status(200).json({
            success: true,
            message: newUser
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })

    }
});

router.put('/users/:id', async(req, res)=>{
    const {id} = req.params;
    const {name, age, weight} = req.body;
    try{
        const updatedUser = await User.findByIdAndUpdate(id,
            {name, age, weight});

        if(!updatedUser){
            res.json({
                message: "user of this id did not exist"
            })
        }
        res.status(200).json({
            success: true,
            User: updatedUser
        })
    }
    catch(err){
        res.status(500).json({
            success: flase,
            message: err.message
        })
    }
})

router.delete('/users/:id', async(req, res)=>{
    const {id} = req.params;
    const {name, age, weight} = req.body;

    try{
        const deleteUser = await User.findByIdAndDelete(id, {name, age, weight})
        if(!deleteUser){
            res.json({
                message:"user not exists"
            })
        }
        res.status(200).json({
            success: true,
            User: deleteUser
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;