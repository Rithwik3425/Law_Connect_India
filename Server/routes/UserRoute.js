const express=require('express');
const {getallusers,createuser,getuser,updateuser,deleteuser} =require('../controllers/user-controller');

const UserRouter=express.Router();

UserRouter.
    route('/')
    .get(getallusers)
    .post(createuser);
UserRouter.
    route('/:id')
   .get(getuser)
   .patch(updateuser)
   .delete(deleteuser);

   module.exports=UserRouter;