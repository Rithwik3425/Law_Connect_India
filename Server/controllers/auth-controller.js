const user =require('../models/user.model');
const jwt=require('jsonwebtoken');
const catchAsync=require('../utils/catchAsync');
const AppError=require('../utils/appError');
const signup=catchAsync(async(req,res,next) =>{
    const newuser=await user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwConfirm:req.body.passwConfirm,
    });
    const token= jwt.sign({id:newuser._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRESIN,
    })
    res.status(201).json({
        status:'success',
        token:
        {
            token
        },
        data:{
            newuser,
        }
    })
    next(); 
});

const login=catchAsync(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email||!password) {
    return next(new AppError('please enter a email and password',400));
    }
    const User=await user.findOne({email}).select('+password');

    if(!User||!(await User.currpassw(password,User.password))){
        return next(new AppError('please check the details once again',401));
    }
    const token='';
    res.status(200).json({
        status:"success",
        token,
    })
})

const protect=catchAsync(async(req,res,next)=>{
    let token;
    if(req.headers.Authorization&&req.headers.Authorization.startsWith('Bearer')) {
        token=req.headers.Authorization.split(' ')[1];
    }
    console.log(token);
    if(!token) {
    return next(
        new AppError('hey there you are not logged in',401)
    );
    }
})

module.exports={signup,login,protect};

