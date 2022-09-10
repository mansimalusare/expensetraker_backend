const mongoose = require("mongoose");

//creat schema(format)


const userSchema = new  mongoose.Schema({
    item:String,
    price:Number,
    date:Date
});


module.exports = mongoose.model("userdata",userSchema);
 
