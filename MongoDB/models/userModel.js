const {Schema,model} = require('mongoose');


const userSchema = new Schema ({
    name: {
        type: String,
        require: true,
        maxlength: 50
    },
    age: {
        type: Number,
        require: true
    },
    weight: {
        type: Number
    }
});

const userModel = model('User', userSchema);

module.exports = userModel;