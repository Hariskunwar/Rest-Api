const mongoose=require("mongoose");

const Courses=new mongoose.Schema({
    title:String,
    content:String,
    videos:Number,
    active:Boolean
})

module.exports=mongoose.model("Course",Courses);

