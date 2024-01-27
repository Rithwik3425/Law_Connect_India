const express=require('express');
const UserRouter=express.Router();
const {getallusers,createuser,getuserbyid,updateduser,deleteuser}=require('../controllers/user-controller');
const {signup,login}=require('../controllers/auth-controller');


UserRouter.post('/signup',signup);
UserRouter.post('/login',login);

UserRouter
.route('/')
.get(getallusers)
.post(createuser)

UserRouter
.route('/id')
.get(getuserbyid)
.patch(updateduser)
.delete(deleteuser)

module.exports=UserRouter;