const {model, Schema} = require('mongoose');



const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50
    },
    price:{
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
})

const productModel = model('Product', productSchema);

module.exports = productModel;