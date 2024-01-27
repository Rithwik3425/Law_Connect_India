const express=require('express');
const User =require('../models/user.model')
const catchAsync=require('../utils/catchAsync');

const getallusers=catchAsync(async(req,res,next)=>{
    const allusers=await User.find();
    res.status(200).json({
        status:"success",
        users:{
            allusers
        }
    })
})

const createuser=async(req,res,next)=>{
    res.status(500).json({
        status:"success",
         message:"Internal server error has happened",         
    })
}

const getuserbyid=async(req,res,next)=>{
    res.status(500).json({
        status:"success",
         message:"Internal server error has happened",

    })
}
const updateduser=async(req,res,next)=>{
    res.status(500).json({
        status:"success",
         message:"Internal server error has happened",
    })
}
const deleteuser =async(req,res,next)=>{
    res.status(500).json({
        status:"success",
         message:"Internal server error has happened",

    })
}

module.exports={getallusers,createuser,getuserbyid,updateduser,deleteuser};