const Product = require('../Model/productModel');


const getProducts = async(req, res)=>{
    try{
        const allProducts = await Product.find();
        if(!allProducts || allProducts.length === 0){
            res.json({
                message: "there is no element in the database..."
            })
        }

        res.json({
            success: true,
            product: allProducts
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            messge: err.message
        })
    }
}

const addProduct = async(req, res)=>{
    try{
    const {name, price, description} = req.body;
    const newProduct = new Product({name, price, description});
    await newProduct.save();
    res.status(200).json({
        success: true,
        product: newProduct
    })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const updateProduct = async(req, res)=>{
    try{
        const {id} = req.params;
        const {name, price, description} = req.body;
        const updateProduct = await Product.findByIdAndUpdate(id, {name, price, description}, {new:true});

        if(!updateProduct){
            res.send("no element is found of this id");
        }
        res.status(200).json({
            success: true,
            product: updateProduct
        })

    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })    
    }
}

const deleteProduct = async(req, res)=>{
    try{
        const {id} = req.params;
        const {name, price, description} = req.body;
        const deleteElement = await Product.findByIdAndDelete(id,{name, price, description});

        if(!deleteElement){
            res.send("element of this id does not exist...");
        }

        res.status(200).json({
            success: true,
            product: deleteElement
        })

    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {getProducts, addProduct, updateProduct, deleteProduct}