const { getallawyers, createlawyers, getSector } = require("../controllers/law-controller");

const express=reqiure('express');
const LawyerRouter=express.Router();

LawyerRouter.
     route('/')
     .get(getallawyers)
     .post(createlawyers)
     .get(getSector)

module.exports=LawyerRouter;