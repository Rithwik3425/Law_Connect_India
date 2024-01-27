const Lawyer=require('../models/lawyers-model');
const catchAsync=require('../utils/catchAsync');
const factory=require('./handlerFactory');
const AppError=require('./../utils/appError');
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

const getCheckoutSession=catchAsync(async(req,res,next)=>{
    const lawyer=await Lawyer.findById(req.params.lawyerID);
    const session=await  stripe.checkout.sessions.create({
        payment_methods_types:['card'],
        success_url:`${req.protocol}://${req.get('host')}/`,
        cancel_url:`${req.protocol}://${req.get('host')}/lawyer/${lawyer.slug}`,
        customer_email:req.user.email,
        client_reference_id:req.params.lawyerID,
        line_items:[
         {
            name:`${lawyer.name}Lawyer`,
            description:lawyer.description,
            amount:lawyer.price,
            currency:'inr',
            qunatity:1
         }
        ]
     });

     res.status(200).json({
      status:"success",
      session
     })
})