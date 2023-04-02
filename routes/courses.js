const express=require('express');
const Course=require('../models/course');
const fs=require('fs');

const router=express.Router();

//to get all courses
router.get("/",async (req,res)=>{
    try {
        const courses=await Course.find();

        res.json(courses);
        
    } catch (err) {
        res.json(err);
    }
});


//to get single courses
router.get("/:courseId",async (req,res)=>{
    const courseId=req.params.courseId;
    try {

        const course=await Course.findById(courseId);
        res.json(course);


        
    } catch (error) {
        res.json(error)
    }
});


//create course

router.post("/",async(req,res)=>{
    const course=await Course.create(req.body);
    res.json(course);
});


//to delete specified course

router.delete("/:courseId",async (req,res)=>{
   try{
    await Course.deleteOne({_id:req.params.courseId});
   
    res.status(200).json({message:"done"});
   }catch(err){
    res.json(err)
   }
});

//to update courses
router.put("/:courseId",async (req,res)=>{
    const courseId=req.params.courseId;
    try {
        const course=await Course.updateOne( {_id:courseId},req.body);
        res.json(course); 
           

            
        
    } catch (error) {
        res.json(error);
    }
});



module.exports=router;