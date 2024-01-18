import express from 'express';
import Lawyer from './../models/lawyers-model.js';

const getLawyers=async(req,res)=>{
  try{
    const query={...req.query}
    const alllawyers=await Lawyer.find(query);
    res.status(200).json({
        status:"sucesss",
        data:{
          alllawyers,
        }
    })
  }
  catch(err) {
    res.status(404).json({
      status:"fail",
      message:"Page Not Found",
    })
  }
}

const createLawyer=async(req,res)=>{
  try{
    const newlawyer=await Lawyer.create(req.body);
    res.status(201).json({
        status:"sucesss",
        data:{
          newlawyer,
        }
    })
  }
  catch(err) {
    res.status(404).json({
      status:"fail",
      message:err,
    })
  }
}

const getLawyer=async(req,res)=>{
  try{
    const alllawyers=await Lawyer.findById(req.params.id);
    res.status(200).json({
        status:"sucesss",
        data:{
          alllawyers,
        }
    })
  }
  catch(err) {
    res.status(404).json({
      status:"fail",
      message:"Page Not Found",
    })
  }
}
const getSector=async(req,res)=>{
  try{
    const alllawyers=await Lawyer.findById(el=>el.Sector===req.params.id);
    res.status(200).json({
        status:"sucesss",
        data:{
          alllawyers,
        }
    })
  }
  catch(err) {
    res.status(404).json({
      status:"fail",
      message:err,
    })
  }
}

const updateLawyer=async(req,res)=>{
  try{
    const updatedlawyer=await Lawyer.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
    });
    res.status(200).json({
        status:"sucesss",
        data:{
        updatedlawyer
        }
    })
  }
  catch(err) {
    res.status(404).json({
      status:"fail",
      message:err,
    })
  }
}
const deleteLawyer=async(req,res)=>{
  try{
    const lawyerdeleted=await Lawyer.findByIdAndDelete(req.params.id)
    res.status(204).json({
        status:"sucesss",
        data:null,
    })
  }
  catch(err) {
    res.status(404).json({
      status:"fail",
      message:"Page Not Found",
    })
  }
}

export { getLawyers, createLawyer, getLawyer, getSector, updateLawyer, deleteLawyer }