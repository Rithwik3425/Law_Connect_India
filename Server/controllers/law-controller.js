const express=require('express');
const fs=require('fs');

const getallawyers=(req,res)=>{
  const alllawyers=
  res.status(200).json({
    status:"success",
    
  })
}

const createlawyers=(req,res)=>{
  res.status(200).json({
    status:"success",
    data:{
      lawdata:parsedLawData,
    }
  })
}

const getSector=(req,res)=>{
 if(typeof(req.params.id==='string')){
    const lawyer1=lawobj.filter(el=>el.Sector===req.params.id);
    res.status(200).json({
      status:"success",
      data:{
       lawyer1
      }
    })
  } 
}

const  


module.exports={getallawyers,createlawyers,getSector}