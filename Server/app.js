const express=require('express');
const LawyerRouter = require('./routes/lawyerRoute');
const UserRouter = require('./routes/UserRoute');

const app=express();
app.use(express.json());


app.use('/api/lawyers',LawyerRouter);
app.use('/api/User',UserRouter);



module.exports=app;