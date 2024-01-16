const { getallawyers, createlawyers, getSector } = require("../controllers/law-controller");

const express=require('express');
const LawyerRouter=express.Router();

LawyerRouter.
     route('/')
     .get(getallawyers)
     .post(createlawyers)

module.exports=LawyerRouter;