//1.import mongoose
const mongoose=require('mongoose');
const schema=mongoose.Schema({
    Name:String,
    Age:Number,
    place:String,
    Phone:Number

})
const userModel=mongoose.model("user",schema);
module.exports=userModel;