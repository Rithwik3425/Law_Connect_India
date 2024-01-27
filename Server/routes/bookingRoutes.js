const express=require('express');
const bookingsController=require('./../controllers/bookingsController');
const authController=require('./../controllers/authcontroller');

const router =express.Router();

router.get('/checkout-session/:lawyerID',authcontroller.protect,bookingcontroller.getCheckoutSession)


module.exports=router