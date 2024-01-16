const express=require('express');
const app=express();
app.use(express.json());


const getallusers=(req,res) =>{
    res.status(500).json({
        status:"error",
        message:"Internal Server Error"
    })
}
const createuser=(req,res) =>{
    res.status(500).json({
        status:"error",
        message:"Internal Server Error"
    })
}
const getuser=(req,res) =>{
    res.status(500).json({
        status:"error",
        message:"Internal Server Error"
    })
}
const updateuser=(req,res) =>{
    res.status(500).json({
        status:"error",
        message:"Internal Server Error"
    })
}
const deleteuser=(req,res) =>{
    res.status(500).json({
        status:"error",
        message:"Internal Server Error"
    })
}

module.exports={getallusers,createuser,getuser,updateuser,deleteuser};