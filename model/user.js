const mongoose = require("mongoose");


const User =new mongoose.Schema({
    name:{
        type:String,
        required:[true, "please enter name"],
        trim:true,
        unique:true,
        maxlength:[25, "name length should be 0-25 characters"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "please enter phone number"],
        unique: true,
        trim: true,
        length: [10, "phone numbers should be 10 characters"]
    },

    age:{
       type:Number,
       maxAge:[30, "user should be below 50 yrs"],
       minAge:[18, "user should be above 18 yrs"]
    }
})
module.exports = mongoose.model("user",User);