const express=require('express');
const fs=require('fs');
const Lawyers=require('./../models/lawyers-model');

const getallawyers=(req,res)=>{
  const alllawyers=Lawyers.find();
  res.status(200).json({
    status:"success",
    data:{
      Lawyers:alllawyers
    }
  })
}

const createlawyers=(req,res)=>{
  const Lawyerdata=Lawyers.create(req.body);
  res.status(200).json({
    status:"success",
    data:{
      lawyer:Lawyerdata,
    }
  })
}



module.exports={getallawyers,createlawyers}