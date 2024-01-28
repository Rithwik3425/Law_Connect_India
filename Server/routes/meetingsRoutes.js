const express=require('express');
const bookingsController=require('../controllers/meetingsController');
const authController=require('../controllers/auth-controller');

const router =express.Router();

router.get('/checkout-session/:lawyerId',authController.protect,bookingsController.getCheckoutSession)


module.exports=router