const  { getLawyers,createLawyer,getLawyer,getSector,updateLawyer,deleteLawyer }  = require("../controllers/law-controller");

const express=require('express');
const LawyerRouter=express.Router();

LawyerRouter.
     route('/')
     .get(getLawyers)
     .post(createLawyer)

LawyerRouter.
     route('/:id')
     .get(getLawyer)
     .get(getSector)
     .patch(updateLawyer)
     .delete(deleteLawyer)

module.exports=LawyerRouter;